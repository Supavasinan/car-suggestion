import { CarCardProps, CarProps } from '@/types';
import React from 'react'

type Props = {
    car: CarProps
}

export function CarCard({ car }: Props) {
    const { city_mpg, year, make, model, transmission, drive } = car;

    return (
        <div>{city_mpg}</div>
    )
}