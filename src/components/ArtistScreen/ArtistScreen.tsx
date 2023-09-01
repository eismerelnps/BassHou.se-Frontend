'use client'
import Image from 'next/image';
import React from 'react'
//network images 
import facebook from '/public/facebook.png'
import music from '/public/music.png'
import myspace from '/public/myspace.png'
import soundcloud from '/public/soundcloud.png'
import twitter from '/public/twitter.png'
import website from '/public/website.png'
import youtube from '/public/youtube.png'


import { useSearchParams } from 'next/navigation';
import { getArtistsById } from '@/helpers/getArtistById';
import { Artist } from '@/interfaces/Artists';

const networkImages = [website, facebook, music, myspace, soundcloud, youtube, twitter]

export default function ArtistScreen({ artists }: { artists: Artist[] }) {
  const searchParams = useSearchParams();
  const searchID = searchParams.get("S");

  const artist = getArtistsById(artists, searchID);

  if (artist) {
    const { artistName, activeSince, briefDescription, biography, songs, profiles, images, ranking, youtubeVideo } = artist

    return (
      <section className='shadow relative top-72 mx-8 mt-2 md:mx-24 md:mt-4 px-4 py-8 '>
        <hr className='h-0.5 bg-neutral-300 ' />

        <div className='flex flex-col sm:flex-row mt-2'>
          <div className='sm:basis-3/5 '>
            <h2 className='sm:text-3xl md:text-4xl mt-0.5 text-start text-stone-950 text-xl ms-8 '>{artistName}</h2>
            <section className='flex  justify-start'>
              <article className=' mt-4  max-w-3xl'>
                <p className='  text-start text-stone-500 text-sm ms-8 me-20'>{biography}</p>
              </article>

            </section>
          </div>
          <div className='sm:basis-2/5 '>

            {
              images[0]
                ? (
                  <Image
                    className=' '
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
            <article className='border border-2 p-4'>
              <p>Networks</p>

              {
                profiles.map(({ name, image }, index) => (
                  <div key={name} className='flex flex-row mt-2 items-center'>

                    <div>
                      <Image
                        className='rounded-t-md '
                        src={networkImages[index]}
                        width={35}
                        height={35}
                        alt={name}
                      />
                    </div>
                    <div className='ms-1 '>
                      {name}
                    </div>
                    <div>

                    </div>
                  </div>
                ))
              }



            </article>

          </div>
        </div>

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
