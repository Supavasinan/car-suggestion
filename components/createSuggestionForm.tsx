"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import { createSuggestionSchema } from '@/validators/suggestion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputCreateSuggestionProp } from '@/types'
import { Loader2 } from 'lucide-react'
import { SearchSalary } from '@/components/SearchSalary'
import { SearchManufacturer } from '@/components/SearchManufacturer'
import { SearchCountry } from '@/components/SearchCountry'
import { SearchCarType } from '@/components/SearchCarType'

export function CreateSuggestionForm() {
    const [Loading, setLoading] = React.useState<boolean>(false)


    const form = useForm<InputCreateSuggestionProp>({
        resolver: zodResolver(createSuggestionSchema as any),
        defaultValues: {
            country: "",
            manufacturer: "",
            carType: "",
            salary: ""
        }
    })

    async function onSubmit(data: InputCreateSuggestionProp) {
        setLoading(true)
        try {
            const res = await fetch("/api/gpt-suggestion", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
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
                                <FormControl>
                                    <SearchCountry country={field.value} setCountry={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="manufacturer"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Manufacturer</FormLabel>
                                <FormControl>
                                    <SearchManufacturer manufacturer={field.value} setManuFacturer={field.onChange} />
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
                                    <SearchCarType carType={field.value} setCarTypes={field.onChange} />
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
                                <FormLabel>Salary per month</FormLabel>
                                <FormControl>
                                    <SearchSalary salary={field.value} setSalary={field.onChange} />
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