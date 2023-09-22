import React from 'react'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { CarModelProp } from '@/types'
import { CarModels } from '@/constants'
import { BsFillCarFrontFill } from 'react-icons/bs';
import { Input } from '@/components/ui/input'

export function SearchCarModel({ carModel, setCarModel }: CarModelProp) {
    return (
        <Input type="text" placeholder="Car Model" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
    )
}