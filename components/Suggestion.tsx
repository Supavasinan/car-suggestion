
import React from 'react'
import { SearchBar } from '@/components/SearchBar'
import { fetchCars } from "@/lib/utils";
import { FilterProps } from '@/types';
import { CarCard } from './CarCard';

type Prop = {
    searchParams: FilterProps
}

export async function Suggestion({ searchParams }: Prop) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || 1,
        model: searchParams.model || ''
    })
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <div className='container py-6'>
            <p className='text-2xl font-bold'>Car Catalogue</p>
            <SearchBar />
            {!isDataEmpty ? (
                <section>
                    <div className='home__cars-wrapper'>
                        {allCars?.map((car) => (
                            <CarCard car={car} />
                        ))}
                    </div>

                            
                </section>
            ) : (
                <div className='home__error-container'>
                    <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                    <p>{allCars?.message}</p>
                </div>
            )}
        </div>
    )
}