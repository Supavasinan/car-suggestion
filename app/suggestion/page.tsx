import React from 'react'
import { CreateSuggestionForm } from '@/components/createSuggestionForm'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Information',
  description: 'Fill your information',
}
export default function page() {
  return (
    <section className='container grid grid-cols-1 md:grid-cols-2 py-[30px] md:py-[80px] gap-10'>
      <CreateSuggestionForm />
      <Image src="/images/exploring.png" alt='exploring' width={500} height={500} />
    </section>
  )
}
