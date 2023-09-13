import React from 'react'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { Country, ICountry } from 'country-state-city'
import { Check, ChevronsUpDown } from 'lucide-react'
import { CountryProp } from '@/types'
import { cn } from '@/lib/utils'


export function SearchCountry({ country, setCountry }: CountryProp) {
    const [CountryData, setCountryData] = React.useState<ICountry[]>([])
    React.useEffect(() => {
        if (CountryData.length > 0) return
        let countryRaw = Country.getAllCountries()
        setCountryData(countryRaw)
    }, [])

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-full justify-between",
                            !country && "text-muted-foreground"
                        )}

                    >
                        {country
                            ? country
                            : "Select Country"
                        }
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0 "  >
                    <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup className='overflow-y-scroll max-h-[300px]'>
                            {CountryData.map((item) => (
                                <CommandItem
                                    value={item.name}
                                    key={item.name}
                                    onSelect={() => {
                                        setCountry(item.name)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            item.name === country
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                    {item.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}