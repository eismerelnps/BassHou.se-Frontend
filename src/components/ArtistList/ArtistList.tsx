'use client'
import React from 'react'

// Artists interface
import { Artist } from '@/interfaces/Artists'

import ArtistCard from '../ArtistCard/ArtistCard'
import { useAppSelector } from '@/hooks';
import { artists } from '@/data/artist';
import { getArtistByName } from '@/helpers/getArtistByName';


export default function ArtistList() {
    //const dispatch = useAppDispatch()
    const  searchText  = useAppSelector(state => state.ui.searchText);

    
    const artistsArray: Artist[] = searchText ? getArtistByName(artists, searchText) : artists
   



    return (
        <section className='flex flex-wrap flex-col sm:flex-row m-12 lg:mx-24 place-content-start '>
            {artistsArray.map((artist: Artist) => (
                <ArtistCard key={artist.id} item={artist} />
            ))}
        </section>
    )
}
