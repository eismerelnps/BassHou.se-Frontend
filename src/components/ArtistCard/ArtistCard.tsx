import Image from 'next/image'
import React from 'react'

import martin_garrix from '../../../public/martin_garrix.webp'

// Artists interface
import { Artist } from '@/interfaces/Artists'
interface ArtistCardProps {
  item: Artist;
}

export default async function ArtistCard({ item }: ArtistCardProps) {
  const { artistName, briefDescription, activeSince } = item
  const active = activeSince.getDate;
  return (
    <article className='
    flex-initial mt-4 px-8
    basis-full   
    sm:w-48 sm:basis-1/2 sm:mx-0 sm:px-4
    md:basis-1/3 
    lg:lg:basis-1/4 px-2 

    '>

      <section className='bg-sky-50 p-0  shadow shadow-sky-100/50 
    
    hover:shadow-lg hover:shadow-sky-200/50 rounded-xl'>
        <div className='flex flex-col '>
          <Image
            className='rounded-t-md self-center'
            src={martin_garrix}
            width={576}
            height={200}
            alt='martin'
          />
          <article className='flex flex-row self-start'>
            <p className='text-[8px] inline'>
              <b>Since:</b>
            </p>
            <p id="activeSinceText" className=' text-start text-sky-950 text-xs'>
              <i>{activeSince.getFullYear()}-{activeSince.getMonth() + 1}-{activeSince.getDate()}
              </i>
            </p>
          </article>
        </div>
        <section className='p-2 mt-0 text-start'>

          <article className='mt-0.5'>
            <h2 className='
          sm:text-3xl
          md:text-2xl
           mt-0.5 text-center text-stone-950 text-xl  '>
              {artistName}</h2>


            <p className=' mt-0.5 text-center text-stone-500 text-sm'>{briefDescription}</p>
          </article>


        </section>

      </section>



    </article>
  )
}
