'use client'
import React from 'react'
import { Variants, motion, AnimatePresence } from 'framer-motion'

type Props = {
    children: React.ReactNode
    className?: string
    variants?: Variants
}

const transitionVariants = {
    initial: {
        opacity: 0,
        y: 75
    },
    animate: {
        opacity: 1,
        y: 0
    }

}
export function Animate({ children, className, variants = transitionVariants }: Props) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}


export function AnimatePresenceContext({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AnimatePresence>
                {children}
            </AnimatePresence>
        </div>
    )
}