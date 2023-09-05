import ArtistList from '@/components/ArtistList/ArtistList';
import React from 'react'

//get the endpoint of the api bd
const url: string = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';


const fetchMenu = () => {
  return fetch(url, { cache: "no-store" }).then((res) => res.json());
};


export default async function layout({ children }: { children: React.ReactNode }) {
  const artists = await fetchMenu();


  return (
    <div>
      <main className="my-5 ">
        <div className='hidden sm:inline-block  bg-[#efed84] fixed sm:top-72 my-5 w-full h-24  z-0'></div>
        <ArtistList artists={artists} />
        {children}
      </main>
    </div>
  )
}
