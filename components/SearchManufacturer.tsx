import { SearchManuFacturerProps } from '@/types'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { manufacturers } from '@/constants'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { SiLamborghini } from 'react-icons/si';


export function SearchManufacturer({ manufacturer, setManuFacturer }: SearchManuFacturerProps) {


    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>

                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "flex gap-3 items-center justify-center",
                            !manufacturer && "text-muted-foreground"
                        )}
                    >
                        <SiLamborghini />

                        {manufacturer
                            ? manufacturers.find(item => item === manufacturer) || 'Not found'
                            : "Select Manufacturer"}

                    </Button>

                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0 " >
                    <Command >
                        <CommandInput placeholder="Search manufacturer..." />
                        <CommandEmpty>No manufacturer found.</CommandEmpty>
                        <CommandGroup className='overflow-y-scroll max-h-[300px]'>
                            {manufacturers.map((item) => {
                                return (

                                    <CommandItem
                                        value={item}
                                        key={item}
                                        onSelect={() => {
                                            setManuFacturer(item)
                                        }}
                                    >

                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                item === manufacturer
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                        {item}
                                    </CommandItem>
                                )
                            })

                            }
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}