"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { z } from 'zod'
import { createSuggestionSchema } from '@/validators/suggestion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Country, ICountry } from 'country-state-city'
import { Check, ChevronsUpDown, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
type Props = {}

type Input = z.infer<typeof createSuggestionSchema>

export function CreateSuggestionForm(props: Props) {
    const [CountryData, setCountryData] = React.useState<ICountry[]>([])
    const [Loading, setLoading] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (CountryData.length > 0) return
        let country = Country.getAllCountries()
        setCountryData(country)
    }, [])

    const form = useForm<Input>({
        resolver: zodResolver(createSuggestionSchema),
        defaultValues: {
            country: "",
            brand: "",
            carType: "",
            salary: ""
        }
    })
    function onSubmit(data: Input) {
        setLoading(true)
        alert(JSON.stringify(data, null, 4))
    }
    return (

        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-3'>
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-full justify-between",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? CountryData.find(
                                                        (country) => country.name === field.value
                                                    )?.name
                                                    : "Select language"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[400px] p-0 "  >
                                        <Command>
                                            <CommandInput placeholder="Search framework..." />
                                            <CommandEmpty>No country found.</CommandEmpty>
                                            <CommandGroup>
                                                {CountryData.map((country, index) => (
                                                    <CommandItem
                                                        value={country.name}
                                                        key={index}
                                                        onSelect={() => {
                                                            form.setValue("country", country.name)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                country.name === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {country.name}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Brand</FormLabel>
                                <FormControl>
                                    <Input  {...field} type='text' placeholder='Please select your brand' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="salary"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Salary</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type='number'
                                        placeholder='fill your current salary'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="carType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Car type</FormLabel>
                                <FormControl>
                                    <Input  {...field}
                                        type='text'
                                        placeholder='fill your car type'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='mt-4 flex items-center justify-end'>
                    <Button type="submit" disabled={Loading}>{Loading ? <Loader2 className='w-4 h-4 animate-spin	' /> : "Submit"}</Button>
                </div>

            </form>
        </Form>

    )
}