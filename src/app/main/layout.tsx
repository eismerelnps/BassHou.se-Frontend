import ArtistList from '@/components/ArtistList/ArtistList';
import LoadingArtistCard from '@/components/Loading/LoadingArtistCard';
import SearchBar from '@/components/SearchBar/SearchBar'
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
      <SearchBar artists={artists} />
      <main className="my-5 ">
      <div className='bg-[#efed84] fixed top-60 sm:top-72 my-5 w-full h-24  z-0'></div>
      <ArtistList artists={artists} />
     
    </main>
    </div>
  )
}
