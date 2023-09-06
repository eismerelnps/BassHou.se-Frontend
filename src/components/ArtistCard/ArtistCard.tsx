//next imports
import Image from 'next/image'
// Artists interface
import { Artist } from '@/interfaces/Artists'

//network images
import facebook from '/public/facebook.png'
import twitter from '/public/twitter.png'
import website from '/public/website.png'

import no_image from '/public/no_image.jpg'

import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function ArtistCard({ item }: { item: Artist }) {

  const router = useRouter()

  const handleOpenArtist = () => {
    const { _id } = item
    router.push(`/artist/?S=${_id}`);

  }


  const { artistName, briefDescription, activeSince, images, visible, profiles } = item
  return (
    <article className={` ${!visible && 'hidden'} cursor-default  flex-initial  basis-full max-w-xs min-w-xs sm:basis-1/2 sm:mx-0 px-2  mt-2  pb-4 md:basis-1/3  lg:lg:basis-1/4 xl:basis-1/5   `}>

      <button onClick={handleOpenArtist} className='w-full h-full'>


        <section className='flex flex-col  h-full bg-white border-2 border-slate-950 shadow shadow-yellow-100/50 hover:shadow-lg hover:rounded hover:shadow-yellow-200/50  transition delay-100'>
          <article className='flex-initial  flex flex-col'>
            {
              images[0]
                ?
                (
                  <Image
                    className='self-center'
                    src={images[0]}
                    width={576}
                    height={250}
                    alt={artistName}
                  />
                )
                :
                (
                  <Image
                    className='self-center'
                    src={no_image}
                    width={155}
                    height={50}
                    alt={artistName}
                  />
                )
            }
          </article>
          <article className='my-2 flex-initial mt-0.5 overflow-x-auto'>
            <p className='sm:text-xl  mt-0.5 text-center text-stone-950  break-words  overflow-x-auto'>
              {artistName}</p>
          </article>
          <article className='flex-none px-2 mt-0 text-start'>

            <article className='my-2 text-sky-900 text-center'>
              <div className='flex flex-row justify-center items-center space-x-4'>
                <Link href={profiles[1].link} onClick={(e) => e.stopPropagation()} target="_blank" className='flex flex-col sm:flex-row  justify-center  items-center'>

                  <Image
                    className='rounded-t-md '
                    src={facebook}
                    width={25}
                    height={25}
                    alt={'facebook icon'}
                  />
                </Link>


                <Link href={profiles[5].link} onClick={(e) => e.stopPropagation()} target="_blank" className='flex flex-col sm:flex-row  justify-center  items-center'>
                  <Image
                    className='rounded-t-md '
                    src={twitter}
                    width={25}
                    height={25}
                    alt={'x icon'}
                  />
                </Link>
                <Link href={profiles[0].link} onClick={(e) => e.stopPropagation()} target="_blank" className='flex flex-col sm:flex-row  justify-center  items-center'>
                  <Image
                    className='rounded-t-md '
                    src={website}
                    width={25}
                    height={25}
                    alt={'website icon'}
                  />
                </Link>


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
            <article className='my-1 h-24 '>
              <p className='w-full my-0.5 text-justify inline-block  align-middle text-stone-500 text-sm'>{briefDescription}</p>
            </article>
          </article>
            <article className="flex justify-center   my-2">
              <div  className="bg-[#efed84] border border-slate-950 rounded-xl text-center px-12 py-1 hover:bg-[#f3f1a0]">
                More...
              </div>
            </article>
        </section>
      </button>
    </article>
  )
}
