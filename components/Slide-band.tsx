import Image from 'next/image';
import React from 'react'

export async function SlideBand() {
  const res = await fetch("https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json", {
    method: "GET",

  });
  const data = await res.json()
  const rows = data.slice(0, 10);
  return (
    <div className='container'>
      <div className='flex justify-evenly py-6 '>
      {rows.map((item: any, index: any) => {
        return (
          <div className='flex flex-col justify-center items-center' key={item.name + index}>
            <Image src={item.image.optimized} alt={item.name} width={80} height={80} />
          </div>
        );
      })}
      </div>
      

    </div>
  )
}

