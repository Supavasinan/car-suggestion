'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '@/lib/utils'
import { ChevronLast } from 'lucide-react'



export function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathname = updateSearchParams("limit", `${newLimit}`)
        router.push(newPathname)
    }
    return (
        <div className='w-full flex items-center justify-center mt-2'>
            {!isNext && (
                <Button
                    variant={'default'}
                    onClick={handleNavigation}
                    className='font-righteous space-x-2'>
                    <span>Show More</span>
                    <ChevronLast className='w-4 h-4 stroke-background' />
                </Button>
            )}
        </div>
    )
}