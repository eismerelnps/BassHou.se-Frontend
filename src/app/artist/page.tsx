
import React from 'react'
import ArtistScreen from '@/components/ArtistScreen/ArtistScreen'

//get the endpoint of the api bd
const artists_url = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';


export default async function ArtistPage() {
  const fetchMenu = () => {
    return fetch(artists_url, { cache: "no-store" }).then((res) => res.json());
  };
  const artists = await fetchMenu();

  return <ArtistScreen artists={artists} />

}
