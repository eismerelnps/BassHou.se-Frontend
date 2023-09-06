'use client'
import React from 'react'


import { useSearchParams } from 'next/navigation';
import { getArtistsById } from '@/helpers/getArtistById';
import { Artist } from '@/interfaces/Artists';
import Profile from './Profile';
import Songs from './Songs';

export default function ArtistScreen({ artists }: { artists: Artist[] }) {
  const searchParams = useSearchParams();
  const searchID = searchParams.get("S");

  const artist = getArtistsById(artists, searchID);

  if (artist) {
    const { artistName, activeSince, briefDescription, biography, songs, profiles, images, ranking, youtubeVideo } = artist

    return (
      <section className='   mx-4  p-4 relative top-80 sm:mt-8 shadow border-2 border-slate-300'>

        <article className='flex flex-col sm:flex-row my-2 sm:my-4'>
          <div className='basis-full sm:basis-1/2 text-center sm:text-start'>
            <h2 className='text-xl md:text-2xl  my-2 text-stone-950  sm:mx-8 '>{artistName}</h2>

            <div className='block sm:hidden my-2'>
              <Profile images={images} profiles={profiles} />
            </div>

            <div className='w-full block sm:hidden  my-2'>
              <Songs songs={songs} />
            </div>

            <div className='flex  justify-start'>
              <div className=' mt-4 sm:mt-2 '>
                <p className=' text-justify text-stone-500 text-sm mx-4 '>{biography}</p>
              </div>
            </div>
          </div>

          <div className='basis-full sm:basis-1/2 flex flex-col'>
            <div className='hidden sm:inline-block '>
              <Profile images={images} profiles={profiles} />
            </div>
            <div className='hidden sm:inline-block'>
              <Songs songs={songs} />
            </div>
          </div>


        </article>

        <hr className='h-0.5 bg-neutral-300 ' />
        <section className='my-4'>
          <h2 className='text-center text-2xl'>Sounds Like:</h2>
          <div className='flex justify-center'>
            <iframe width="768" height="480" src={youtubeVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
        </section>
      </section>
    )
  } else {
    return true;
  }




}
