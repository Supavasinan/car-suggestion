import React from 'react'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { Animate } from '@/context/Animate'
const className = "w-11 h-11 md:w-14 md:h-14 dark:fill-white"

const List = [
  {
    icon: <Icons.nextJs className={className} />,
    name: "Next Js",
    href: "https://nextjs.org/"
  },
  {
    icon: <Icons.tailwind className={className} />,
    name: "TailwindCss",
    href: "https://tailwindcss.com/"
  },
  {
    icon: <Icons.ts className={className} />,
    name: "Type Script",
    href: "https://www.typescriptlang.org/"
  },
  {
    icon: <Icons.rapid className='w-11 h-11 md:w-14 md:h-14' />,
    name: "Rapid API",
    href: "https://rapidapi.com/"
  },
]

export function SocialList() {
  return (
    <div className='container'>
      <div className="grid grid-cols-2 gap-10 md:gap-0 md:grid-cols-4 py-6 md:py-20">
        {List.map((item, index) => (
          <Animate
            key={index}

          >
            <Link href={item.href} target='_blank' className='flex  flex-col items-center gap-2 justify-center'>
              {item.icon}
              <h1 className='text-muted-foreground'>{item.name}</h1>
            </Link>
          </Animate>

        ))}

      </div>
    </div>
  )
}