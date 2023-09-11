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
    const { artistName, activeSince,  biography, songs, profiles, images, ranking, rankingVisible, youtubeVideo } = artist

    return (
      <section className='   mx-4  p-4 relative top-64 sm:top-60 sm:mt-8 shadow border-2 border-slate-300'>

        <article className='flex flex-col sm:flex-row my-2 sm:my-4'>
          <div className='basis-full sm:basis-1/2 text-center sm:text-start sm:border-e border-e-slate-300'>
            <div className='mx-4 flex sm:flex-row flex-col items-center space-x-1'>
              <div className={` ${rankingVisible ? 'block' : 'hidden'}`}>
                <h1 className='text-2xl lg:text-4xl text-stone-950  '>{ranking}</h1>
              </div>
              <div>
                <h2 className='text-md lg:text-xl   text-stone-950 break-all '>{artistName}</h2>
              </div>
              <div className='hidden sm:inline-block h-4 w-2 border-e border-e-slate-300'>

              </div>

              <article className='hidden sm:flex sm:flex-row justify-center  text-gray-500'>
                <p className='text-xs inline mx-0.5'>
                  Active Since:
                </p>
                <p id="activeSinceText" className='ms-0.5 pe-2 text-xs '>
                  {activeSince}
                </p>
              </article>
            </div>


            <div className='block sm:hidden my-2'>
              <Profile images={images} profiles={profiles} activeSince={activeSince} />
            </div>

            <div className='w-full block sm:hidden  my-2'>
              <Songs songs={songs} />
            </div>

            <div className='flex  justify-start'>
              <div className=' mt-4 sm:mt-2 '>
                <p className=' text-justify text-stone-500 text-sm mx-4 break-all'>{biography}</p>
              </div>
            </div>
          </div>

          <div className='basis-full sm:basis-1/2 flex flex-col sm:border-s border-s-slate-300'>
            <div className='hidden sm:inline-block '>
              <Profile images={images} profiles={profiles} activeSince={activeSince} />
            </div>
            <div className='hidden sm:inline-block'>
              <Songs songs={songs} />
            </div>
          </div>


        </article>

        <hr className='h-0.5 bg-neutral-300 ' />
        <section className='my-4'>
        <div className='bg-slate-200/25 mx-2 p-2 sm:p-4'>
                <p className='  text-xl sm:text-2xl '>Sounds Like:</p>
            </div>
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
