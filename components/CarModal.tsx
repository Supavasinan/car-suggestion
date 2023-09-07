'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '@/components/CanvansLoading'
import { FerrariModel } from "@/public/canvas/Ferrari/main"
export function CarModal() {

    return (
        <div className='w-[55rem] h-[30rem]'>
            <Canvas >
                <axesHelper args={[5]} />
                <OrbitControls enableZoom={false} autoRotate        autoRotateSpeed={5} />
                <directionalLight position={[2, -5, -2]} intensity={10} color={'#ffffff'} />
                <directionalLight position={[-2, 9, 2]} intensity={10} color={'#ffffff'} />
                <Suspense fallback={<CanvasLoader />}>
                    <FerrariModel scale={1.5} position={[0, -0.5, -2]} rotation={[0, 0, 0]} />
                </Suspense>
            </Canvas>
        </div>
    )
}
