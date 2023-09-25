
import React from 'react'
import { SearchBar } from '@/components/SearchBar'
import { fetchCars } from "@/lib/utils";
import { CarProps, FilterProps } from '@/types';
import { CarCard } from './CarCard';
import { ShowMore } from '@/components/ShowMore'



export async function Suggestion(searchParams: FilterProps) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        year: searchParams.year || 2023,
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || 10,
        model: searchParams.model || ''
    })
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
    return (
        <div className='container' id='Suggestion'>
            <div className='pt-6 pb-10'>
                <p className='text-2xl font-bold'>Car Catalogue</p>
                <SearchBar SetManufacturer={searchParams.manufacturer || ''} SetModel={searchParams.model || ''} />

                {!isDataEmpty ? (
                    <section className='w-full'>
                        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
                            {allCars?.map((car: CarProps, index: number) => (
                                <CarCard key={`vehicle-${index}`} car={car} index={index} />
                            ))}
                        </div>
                        <ShowMore
                            pageNumber={(searchParams.limit || 10) / 10}
                            isNext={(searchParams.limit || 10) > allCars.length}
                        />
                    </section>

                ) : (
                    <div>
                        <h2 className='py-6'>Oops, no results</h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}

            </div>
        </div>
    )
}