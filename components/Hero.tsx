import React from 'react'
import Image from 'next/image'
import { SuggestionButton } from '@/components/SuggestionButton'
import { Animate } from '@/context/Animate'


export function Hero() {
    return (
        <section className='container'>
            <div className='md:py-20 py-10 flex-col md:flex-row flex gap-5'>
                <div className='flex-1 space-y-4'>
                    <Animate>
                        <h1 className='2xl:text-[70px] text-[30px]  md:text-[60px] font-normal font-righteous'>Find, book, rent a car—quick and super easy!</h1>
                    </Animate>
                    <Animate variants={{
                        initial: {
                            opacity: 0,
                            y: 75
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        }
                    }}>
                        <SuggestionButton />
                    </Animate>
                </div>
                <div className='flex-[1.3] flex items-center justify-center'>
                    <Animate>
                        <Image src="/images/car.png" alt='car' width={700} height={700} />
                    </Animate>
                </div>

            </div>
        </section>
    )
}

