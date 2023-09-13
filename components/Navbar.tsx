"use client"
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import { SocialList } from '@/components/SocialList'
import { motion } from "framer-motion"
import { ModeToggle } from './ui/mode-toggle'
export function Navbar() {
    return (
        <div className='supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur'>
            <div className='py-6  container  flex items-center justify-between'>
                <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), "md:block hidden text-xl rounded-sm font-righteous")}>
                    <motion.div animate={{ x: 0 }} initial={{ x: -400 }}>
                        CarLess
                    </motion.div>
                </Link>
                <p className='font-righteous'>Hi! There, Welcome to our website! </p>
                {/* <SocialList /> */}
                <ModeToggle/>
            </div>
        </div>
    )
}

