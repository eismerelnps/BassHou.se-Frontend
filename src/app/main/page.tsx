
import React from 'react'
import ArtistList from '@/components/ArtistList/ArtistList'

 //get the endpoint of the api bd
  const url: string = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';



export default async function IndexPage() {
 
 const fetchMenu = () => {
  return fetch(url).then((res) => res.json());
   };

 const artists = await fetchMenu();


  return (
    <main className="my-5 ">
      <div className='bg-[#efed84] fixed top-72 my-5 w-full h-20  z-0'></div>
       <ArtistList  artists={artists } />
    </main>
  )
}