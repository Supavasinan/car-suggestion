'use client'
import React from 'react'
import Image from 'next/image'
import { calculateCarRent, generateCarImageUrl } from '@/lib/utils';
import { CarProps } from '@/types';
import { Button } from '@/components/ui/button';
import { CarDetails } from '@/components/CarDetails'
import { Info } from 'lucide-react';
import { motion } from 'framer-motion';

export function CarCard({ car, index }: { car: CarProps, index: number }) {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div

        >
            <motion.div

                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                viewport={{ once: true }}
                className='p-6 group'>
                <h1 className='font-righteous text-2xl capitalize'>{make} {model}</h1>
                <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                    <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                    <span>{carRent}</span>
                    <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
                </p>
                <div className='relative w-full h-40 my-3 object-contain'>
                    <Image src={generateCarImageUrl(car)} onLoadingComplete={(image) => image.classList.remove("opacity-0")} alt='car' fill={true} priority className='object-contain transition-opacity opacity-0 duration-200' />
                </div>
                <div className='grid grid-cols-3  group-hover:hidden'>
                    <div className='flex items-center justify-center gap-2 flex-col text-[14px] leading-[17px]'>
                        <Image src="/images/icons/steering-wheel.svg" width={20} height={20} alt='transmission' />
                        {transmission === "a" ? "Automatic" : "Manual"}
                    </div>
                    <div className='uppercase gap-2 flex-col flex items-center justify-center text-[14px] leading-[17px]'>
                        <Image src="/images/icons/tire.svg" width={20} height={20} alt='tire' />
                        {drive}
                    </div>
                    <div className='flex gap-2 flex-col items-center justify-center text-[14px] leading-[17px]'>
                        <Image src="/images/icons/calendar.png" width={20} height={20} alt='tire' />
                        {year}
                    </div>
                </div>
                <Button
                    className='font-righteous py-[10.5px]  hidden group-hover:flex gap-2 w-full'
                    variant={'outline'}
                    onClick={() => setIsOpen(true)}
                >
                    <span>View More</span>
                    <Info className='w-4 h-4' />
                </Button>

                <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
            </motion.div>
        </div>
    )
}