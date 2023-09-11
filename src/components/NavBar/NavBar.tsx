'use client'
import Image from 'next/image';
import giphy from '/public/giphy.gif';
import { rubik_glitch } from '@/fonts/glitch_goblin';

import AddNewRequestButton from './AddNewRequestButton';
import Marquee from '../Marquee/Marquee';
import Link from 'next/link';
import { Artist } from '@/interfaces/Artists';
import SearchBar from '../SearchBar/SearchBar';


export default function NavBar() {
  return (
    <div className=' cursor-default fixed top-0  w-full z-30 '>
      <Marquee />
      <div className='relative bg-[#efed84]  '>
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
          <SearchBar />
          <div className=' cursor-default  w-full   '>
            <h2 className='text-center text-base'>The biggest database of Bass House Artists!</h2>
          </div>
          
          <div className=" cursor-pointer flex justify-center w-full my-2 ">
            <AddNewRequestButton />
          </div>
          {/* <div className='flex flex-row place-content-center items-center mx-4 my-1 text-center  '>
            <p className='mx-0.5 text-xs sm-text-sm'>Powered with ❤️ by </p> <p className='mx-0.5 text-xs sm:text-sm text-red-600'> DJ.com</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
