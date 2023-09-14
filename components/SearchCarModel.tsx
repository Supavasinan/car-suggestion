import React from 'react'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import { CarModelProp } from '@/types'
import { CarModels } from '@/constants'
import { BsFillCarFrontFill } from 'react-icons/bs';


export function SearchCarModel({ carModel, setCarModel }: CarModelProp) {
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "flex gap-3 items-center justify-center",
                            !carModel && "text-muted-foreground"
                        )}
                    >
                        <BsFillCarFrontFill />
                        {carModel
                            ? CarModels.find(
                                (item) => item === carModel
                            )
                            : "Select Car Model"}
                    </Button>

                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0 ">
                    <Command>
                        <CommandInput placeholder="Search manufacturer..." />
                        <CommandEmpty>No manufacturer found.</CommandEmpty>
                        <CommandGroup className='overflow-y-scroll max-h-[300px]'>
                            {CarModels.map((item) => {
                                return (
                                    <CommandItem
                                        value={item}
                                        key={item}
                                        onSelect={() => {
                                            setCarModel(item)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                item === carModel
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