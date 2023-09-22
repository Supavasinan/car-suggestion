'use client'
import React from 'react'
import { Loader2, Search } from 'lucide-react'
import { SearchManufacturer } from '@/components/SearchManufacturer'
import { SearchCarModel } from '@/components/SearchCarModel'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";


export function SearchBar() {
    const [manufacturer, setManuFacturer] = React.useState<string>("")
    const [model, setModel] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false)
    const router = useRouter();
    

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
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
        setLoading(false)

    };
    return (
        <form onSubmit={handleSearch} className='mt-6 gap-5 grid grid-flow-row sm:grid-flow-col w-fit '>
            <SearchManufacturer manufacturer={manufacturer} setManuFacturer={setManuFacturer} />
            <SearchCarModel carModel={model} setCarModel={setModel} />
            <Button variant={"default"} className='w-fit' type='submit' disabled={loading}>
                {loading ? <Loader2 className='w-4 h-4' /> : <Search className='w-4 h-4' />}
            </Button>
        </form>
    )
}