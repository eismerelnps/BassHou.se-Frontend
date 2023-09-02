import ArtistScreen from '@/components/ArtistScreen/ArtistScreen';
import LoadingArtistScreen from '@/components/Loading/LoadingArtistScreen';
import SearchBar from '@/components/SearchBar/SearchBar'
import React from 'react'

//get the endpoint of the api bd
const artists_url = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';

const fetchMenu = () => {
  return fetch(artists_url, { cache: "no-store" }).then((res) => res.json());
};


export default async function layout({ children }: { children: React.ReactNode }) {
  const artists = await fetchMenu();

  return (
    <div>
      <SearchBar artists={artists} />
      <ArtistScreen artists={artists} />
      
    </div>
  )
}
