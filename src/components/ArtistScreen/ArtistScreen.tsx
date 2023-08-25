'use client'
import { useAppSelector } from '@/hooks';
import Image from 'next/image';
import React from 'react'

export default function ArtistScreen() {
  const artist = useAppSelector(state => state.artist);
  const { artistName, activeSince, briefDescription, biography, songs, profiles, images, ranking } = artist
  return (
    <section className=' 
    mx-8 mt-2
    md:mx-24 md:mt-4 '>
      <article className='text-center'>
        <h1 className='text-2xl md:text-6xl'>{ranking}</h1>
      </article>
      <div className='
      flex flex-col justify-center
      mt-2
      md:mt-8 max-w-3xl '>
        {
          images[0]
            ? (
              <Image
                className='rounded-t-md '
                src={images[0]}
                width={768}
                height={300}
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
md:text-4xl
mt-0.5 text-center text-stone-950 text-xl  '>
            {artistName}</h2>

            <div className='flex flex-row p-4'>
  <div className='basis-1/12 pe-0.5 border-e-2'>
    <p className='text-xs'>songs:</p>
  </div>
  <div className='basis-11/12 overflow-x-scroll'>
    <div className='flex flex-row mx-8 whitespace-nowrap'> {/* Agregamos la clase 'whitespace-nowrap' aquí */}
      {
        songs.map((song: string) => (
          <div key={song} className='mx-4'>
            <p className='text-sky-600'>{song}</p>
          </div>
        ))
      }
    </div>
  </div>
</div>




          <p className=' mt-4 px-32 text-center text-stone-500 text-sm'>{briefDescription}</p>
        </article>


      </section>
      <section className='flex  justify-center'>
        <article className=' mt-4 px-32  max-w-3xl'>
          <p className='  text-center text-stone-500 text-sm'>{biography}</p>
        </article>

      </section>
    </section>
  )
}
