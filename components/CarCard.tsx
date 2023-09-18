import { calculateCarRent, generateCarImageUrl } from '@/lib/utils';
import { CarProps } from '@/types';
import React from 'react'
import Image from 'next/image'

export function CarCard({ car }: { car: CarProps }) {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className='p-6 '>
            <h1 className='font-righteous text-2xl'>{make} {model}</h1>
            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                <span>{carRent}</span>
                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>
            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={generateCarImageUrl(car)} alt='car' fill priority className='object-contain' />
            </div>
            <div className='grid grid-cols-3'>
                <div className='flex items-center justify-center gap-2 flex-col text-[14px] leading-[17px]'>
                    <Image src="/images/icons/steering-wheel.svg" width={20} height={20} alt='transmission' />
                    {transmission === "a" ? "Automatic" : "Manual"}
                </div>
                <div className='uppercase gap-2 flex-col flex items-center justify-center text-[14px] leading-[17px]'>
                    <Image src="/images/icons/tire.svg" width={20} height={20} alt='tire' />
                    {drive}
                </div>
                <div className='flex items-center justify-center text-[14px] leading-[17px]'>{year}</div>
            </div>
        </div>
    )
}