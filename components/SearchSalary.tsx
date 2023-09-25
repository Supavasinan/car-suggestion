import React from 'react'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { SalaryList } from '@/constants'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import { SalaryProp } from '@/types'


export function SearchSalary({ salary, setSalary }: SalaryProp) {
    return (
        <div>  <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                        "w-full justify-between",
                        !salary && "text-muted-foreground"
                    )}
                >

                    {salary
                        ? SalaryList.find(
                            (item) => item === salary
                        )
                        : "Select Salary"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />

                </Button>

            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0 ">
                <Command>
                    <CommandInput placeholder="Search manufacturer..." />
                    <CommandEmpty>No manufacturer found.</CommandEmpty>
                    <CommandGroup className='overflow-y-scroll max-h-[300px]'>
                        {SalaryList.map((item) => {
                            return (
                                <CommandItem
                                    value={item}
                                    key={item}
                                    onSelect={(e) => {
                                        setSalary(item)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            item === salary
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
        </Popover></div>
    )
}