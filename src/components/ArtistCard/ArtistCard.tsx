import Image from 'next/image'
import React from 'react'

import martin_garrix from '../../../public/martin_garrix.webp'

// Artists interface
import { Artist } from '@/interfaces/Artists'
interface ArtistCardProps {
  item: Artist;
}

export default async function ArtistCard({ item }: ArtistCardProps) {
  const { artistName, briefDescription, activeSince, images } = item
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
          {
            images[0]
              ?
              (
                <Image
                  className='rounded-t-md self-center'
                  src={images[0]}
                  width={576}
                  height={200}
                  alt='martin'
                />
              )
              :
              (
                <svg
                  className="mx-auto h-28 w-28  text-neutral-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              )
          }

          <article className='flex flex-row self-start'>
            <p className='text-[8px] inline'>
              <b>Since:</b>
            </p>
            <p id="activeSinceText" className=' text-start text-sky-950 text-xs'>
              <i>{activeSince}
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
