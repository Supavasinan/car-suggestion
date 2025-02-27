import { Fragment } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type CarDetailsProps = {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

export function CarDetails({ isOpen, closeModal, car }: CarDetailsProps) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-100' onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-background/70' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center backdrop-blur-sm justify-center p-4 text-center '>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-out duration-300'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='relative w-full max-w-lg max-h-[60vh] overflow-y-scroll border c-scroll transform rounded-md  bg-background p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                    <div className='w-full flex items-center justify-end'>
                                        <Button variant={'ghost'} onClick={closeModal}>
                                            <X className='w-4 h-4' />
                                        </Button>
                                    </div>

                                    <div className='flex-1 flex flex-col gap-3'>
                                        <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                            <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
                                        </div>

                                        <div className='flex gap-3'>
                                            {[29, 33, 13].map((item, index) => (
                                                <div key={`angle-${index}`} className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                    <Image src={generateCarImageUrl(car, item.toString())} onLoadingComplete={(image)=> image.classList.remove("opacity-0")} alt='car model' fill priority className='object-contain transition-opacity opacity-0 duration-200' />
                                                </div>
                                            ))}
                                        
                                        </div>
                                    </div>

                                    <div className='flex-1 flex flex-col gap-2 '>
                                        <h2 className='font-righteous text-xl capitalize'>
                                            {car.make} {car.model}
                                        </h2>

                                        <div className='mt-3 flex flex-wrap gap-4 '>
                                            {Object.entries(car).map(([key, value]) => (
                                                <div className='flex justify-between gap-5 w-full text-right' key={key} >
                                                    <h4 className='text-grey capitalize'>
                                                        {key.split("_").join(" ")}
                                                    </h4>
                                                    <p className='text-black-100 font-righteous'>
                                                        {value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}