import Image from 'next/image'
import React from 'react'
import { GetSuggestionButton } from './GetSuggestionButton'

export function HeroPage() {
    return (
        <section className='container h-screen'>
            <div className='md:py-20 py-10 flex-col flex md:flex-row justify-between items-start'>
                <div className='md:text-5xl text-2xl font-righteous flex flex-col gap-4'>

                    <p>Do you have  problem</p>

                    <p>To Find the</p>

                    <p>Car?</p>
                    <GetSuggestionButton />
                </div>
                {/* <CarModal/> */}
                <Image src="/images/car.png" alt='car' width={1000} height={1000} />
            </div>
        </section>
    )
}

