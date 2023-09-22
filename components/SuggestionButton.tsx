'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { ChevronLeftCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function SuggestionButton() {
  return (
    <div className='flex items-center justify-start gap-3'>
      <Link href="#Suggestion" className={cn(buttonVariants({ variant: "default" }))}>Get Suggestion</Link>
      <motion.div
        animate={{ scale: [0, 1, 0.5, 1] }}
        transition={{ times: [0, 0.1, 0.9, 1], repeat: Infinity, duration: 1 }}
      >
        <ChevronLeftCircle className='w-6 h-6' />
      </motion.div>
    </div>
  )
}
