'use client'
import React from 'react'
import { Search } from 'lucide-react'
import { SearchManufacturer } from '@/components/SearchManufacturer'
import { SearchCarModel } from '@/components/SearchCarModel'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";


export function SearchBar() {
    const [manufacturer, setManuFacturer] = React.useState("")
    const [model, setModel] = React.useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };

    const updateSearchParams = (model: string, manufacturer: string) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);

        // Update or delete the 'model' search parameter based on the 'model' value
        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }

        // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("manufacturer");
        }

        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
    };
    return (
        <form onSubmit={handleSearch} className='mt-6 flex gap-5 items-center justify-start'>
            <SearchManufacturer manufacturer={manufacturer} setManuFacturer={setManuFacturer} />
            <SearchCarModel carModel={model} setCarModel={setModel} />
            <Button variant={"default"} type='submit'><Search className='w-4 h-4' /></Button>
        </form>
    )
}