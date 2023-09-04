'use client'
import Image from 'next/image';
import giphy from '/public/giphy.gif';
import { rubik_glitch } from '@/fonts/glitch_goblin';

import { useRouter, useSearchParams } from 'next/navigation';

import AddNewRequestButton from './AddNewRequestButton';
import Marquee from '../Marquee/Marquee';
import Link from 'next/link';
import { Artist } from '@/interfaces/Artists';
import { uiSetSearchText } from '@/reducers/uiSlice';
import { useAppDispatch } from '@/hooks';



export default function SearchBar({ artists }: { artists: Artist[] }) {
  const router = useRouter();

  const dispatch = useAppDispatch();


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch(uiSetSearchText(value))
    router.push('/main');
    router.refresh();
  };


  return (
    <div className=' cursor-default fixed top-0  w-full z-30 '>
      <Marquee />
      <div className='relative bg-[#efed84] pb-2  '>
        <div className='flex flex-col  place-content-stretch'>
          <Link href={'/main'} className='flex flex-col sm:flex-row mt-2 sm:mt-8 justify-center  items-center'>
            <Image
              width={70}
              height={70}
              src={giphy}
              alt='giphy'
            />
            <h1 className={`${rubik_glitch.className} text-xl sm:text-4xl text-center align-middle`}>BASSHOU.SE</h1>
          </Link>
          <div className=' cursor-default text-center text-xs sm:text-xl mt-2 sm:mt-4 '>
            <h2>The biggest database of Bass House Artists!</h2>
          </div>
          <div className='flex justify-center mt-2 sm:mt-4 '>
            <div className=" rounded-[1px] w-3/4 sm:w-1/2 shadow-sm">
              <input

                onChange={handleInputChange}
                id="searchArtist"
                name="searchArtist"
                type="text"
                autoComplete="true"
                placeholder='Search by Artist/Brand Name'
                required
                className={`  bg-white shadow
                            
                          focus:outline-2 hover:bg-slate-50 
                          duration-100 block w-full rounded-[1px]  py-1.5 ps-1.5 text-slate-950   
                          placeholder:text-gray-400 f text-xs  sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
          <div>
            <AddNewRequestButton artists={artists} />
          </div>

          <div className='flex flex-row justify-center mt-2 sm:mt-4  '>
            <p>Powered with ❤️  by </p> <p className='text-xs sm:text-sm text-red-600'> DJ.com</p>
          </div>
        </div>

      </div>

    </div>
  )
}
