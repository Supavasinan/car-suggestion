'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode
    className?: string
}

export function Animate({ children, className, ...props }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}