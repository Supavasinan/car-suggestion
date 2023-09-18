
import React from 'react'
import { SearchBar } from '@/components/SearchBar'
import { fetchCars, generateCarImageUrl } from "@/lib/utils";
import { FilterProps } from '@/types';
import { CarCard } from '@/components/CarCard';
import Image from 'next/image';



export async function Suggestion({ searchParams }: { searchParams: FilterProps }) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        year: searchParams.year || 2023,
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || 20,
        model: searchParams.model || ''
    })

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
    return (
        <div className='container'>
            <div className='py-6'>
                <p className='text-2xl font-bold'>Car Catalogue</p>
                <SearchBar />

                {!isDataEmpty ? (
                    <section className='w-full'>
                        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
                            {allCars?.map((car) => (
                                <CarCard car={car} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <div>
                        <h2 >Oops, no results</h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}
            </div>
        </div>
    )
}