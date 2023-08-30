import Image from 'next/image'
import React from 'react'

export function Banner() {
    return (
        <section className='container '>
            <div className='md:py-20 py-10 flex-col flex md:flex-row justify-between items-start'>
                <div className='md:text-5xl text-2xl font-righteous flex flex-col gap-4'>

                    <p> Have Problem?</p>
                
                    <p>To Find the</p>
                  
                    <p> Car?</p>
                </div>
                <Image src="/images/car.png" alt='car' width={1000} height={1000} />
            </div>
        </section>
    )
}

