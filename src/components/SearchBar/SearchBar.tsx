'use client'
import Image from 'next/image';
import giphy from '/public/giphy.gif';
import { rubik_glitch } from '@/fonts/glitch_goblin';

import { useRouter, useSearchParams } from 'next/navigation';

import './searchBar.css'
import AddNewRequestButton from './AddNewRequestButton';



export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchText = searchParams.get("search") || '';

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    router.push(`/main/?search=${value}`);

  };


  return (
    <div className='fixed top-0  w-full z-30 '>

<div className='w-full h-12 bg-white flex items-center overflow-hidden'>
<div className='marquee-container'>
  <div className='marquee-content'>
    House Music Forever! ¡Música house para siempre! Musique house pour toujours ! 永遠的浩室音樂！موسيقى البيت إلى الأبد! House glazba zauvijek! Huismusiek vir altyd! Muzyka house na zawsze!  Muzică House pentru totdeauna! Хаусмузыка навсегда! Doma Muziko Eterne! Âm nhạc gia đình mãi mãi! Musique house pour toujours!
  </div>
  <div className='marquee-content'>
    House Music Forever! ¡Música house para siempre! Musique house pour toujours ! 永遠的浩室音樂！موسيقى البيت إلى الأبد! House glazba zauvijek! Huismusiek vir altyd! Muzyka house na zawsze!  Muzică House pentru totdeauna! Хаусмузыка навсегда! Doma Muziko Eterne! Âm nhạc gia đình mãi mãi! Musique house pour toujours!
  </div>
</div>
  
</div>

      <div className='relative bg-[#efed84] pb-2  '>

        <div className='flex flex-col  place-content-stretch'>
          <div className='flex flex-col sm:flex-row mt-8 justify-center  items-center'>
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
                value={searchText}
                onChange={handleInputChange}
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
              />
            </div>
          </div>
          <div>
            <AddNewRequestButton />
          </div>

          <div className='flex flex-row justify-center mt-4  '>
            <p>Powered with ❤️  by</p> <p className='text-red-600'>DJ.com</p>
          </div>
        </div>

      </div>

    </div>
  )
}
