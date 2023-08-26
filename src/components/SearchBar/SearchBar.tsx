'use client'
import { useForm } from '@/hooks/useForm';
import Image from 'next/image';
import giphy from '/public/giphy.gif';
import { rubik_glitch } from '@/fonts/glitch_goblin';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';





export default function SearchBar() {
  const router = useRouter()
  const [handdleInputChange] = useForm({
    searchArtist: "",
  });

  return (
    <div className='fixed top-0  w-full z-30 '>

   <div className='w-full h-12 bg-white' ></div>
    <div className='relative bg-[#efed84] py-4  '>

      <div className='flex flex-col  place-content-stretch'>
        <div className='flex flex-row mt-8 justify-center  items-center'>
          <Image
            width={100}
            height={100}
            src={giphy}
            alt='giphy'
          />
          <h1 className={`${rubik_glitch.className} text-4xl text-center align-middle`}>BASSHOU.SE</h1>
        </div>
        <div className='flex justify-center mt-4 '>
          <h2>The biggest database of Bass House Artists!</h2>
        </div>
        <div className='flex justify-center mt-4 '>
          <div className=" mt-2 rounded-[1px] w-1/2  shadow-sm">
            <input
              id="searchArtist"
              name="searchArtist"
              type="text"
              autoComplete="true"
              placeholder='Search by Artist/Brand Name'
              required
              className={`  bg-white shadow-md
                          outline  outline-2 outline-slate-950
                          focus:outline-2 hover:bg-slate-50 
                          duration-100 block w-full rounded-[1px]  py-1.5 ps-1.5 text-slate-950 shadow  
                          placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
              onChange={handdleInputChange}
            />
          </div>
        </div>

        <div className='flex flex-row justify-center mt-4  '>
          <p>Powered with ❤️  by</p> <p className='text-red-600'>DJ.com</p>
        </div>
      </div>
      
    </div>
    
    </div>
  )
}
