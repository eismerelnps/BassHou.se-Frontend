//next imports
import Image from 'next/image'
// Artists interface
import { Artist } from '@/interfaces/Artists'
//Child componets
import OpenArtist from './OpenArtist';

//network images
import facebook from '/public/facebook.png'
import twitter from '/public/twitter.png'
import website from '/public/website.png'


export default function ArtistCard({ item }: { item: Artist }) {
  const { artistName, briefDescription, activeSince, images, visible } = item
  return (
    <article className={` ${!visible && 'hidden'} cursor-default bg-white flex-initial  mt-2 basis-full   pb-4 sm:w-48 sm:basis-1/2 sm:mx-0 sm:px-4 md:basis-1/3  lg:lg:basis-1/4` }>
      <section className=' flex flex-col justify-between h-full border-2 border-slate-950 shadow shadow-yellow-100/50 hover:shadow-lg hover:rounded hover:shadow-yellow-200/50  hover:scale-105 transition delay-100'>
        <article className='flex flex-col'>
          {
            images[0]
              ?
              (
                <Image
                  className='max-h-40 self-center'
                  src={images[0]}
                  width={576}
                  height={250}
                  alt={artistName}
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
        </article>
        <article className=' px-2 mt-0 text-start'>
          <article className='mt-0.5 overflow-x-auto'>
            <p className='sm:text-3xl md:text-2xl mt-0.5 text-center text-stone-950 text-xl break-words truncate overflow-x-auto'>
              {artistName}</p>
          </article>
          <article className='text-sky-900 text-center my-1'>
            <p className='text-[8px]'>Oficial Social Profiles</p>
            <div className='flex flex-row justify-center space-x-4 my-2'>
            <Image
                        className='rounded-t-md '
                        src={facebook}
                        width={25}
                        height={25}
                        alt={'facebook icon'}
                      />
                      <Image
                        className='rounded-t-md '
                        src={twitter}
                        width={25}
                        height={25}
                        alt={'x icon'}
                      />
                      <Image
                        className='rounded-t-md '
                        src={website}
                        width={25}
                        height={25}
                        alt={'website icon'}
                      />
              </div>
          </article>
          <article className='flex flex-row justify-center my-4 text-gray-500'>
            <p className='text-sm inline mx-0.5'>
              Active Since:
            </p>
            <p id="activeSinceText" className='mx-0.5  text-sm'>
              {activeSince}
            </p>
          </article>
          <article className='my-1 '>
            <p className=' my-0.5 text-justify text-stone-500 text-sm'>{briefDescription}</p>
          </article>
        </article>
        <article className=''>
          <OpenArtist item={item} />
        </article>
      </section>
    </article>
  )}
