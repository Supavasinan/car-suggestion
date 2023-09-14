import { CarProps } from '@/types';
import React from 'react'


export function CarCard({ car }: { car: CarProps }) {
    const { city_mpg, year, make, model, transmission, drive } = car;

    return (
        <div>
            <div></div>
            <div>a</div>
            <div>fwd</div>
            <div>2022</div>
            <div>trax fwd</div>
            <div>chevrolet</div>
        </div>
    )
}