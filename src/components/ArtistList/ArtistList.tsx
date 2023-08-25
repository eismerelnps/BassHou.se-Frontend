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
    const searchText = useAppSelector(state => state.ui.searchText);


    const artistsArray: Artist[] = searchText ? getArtistByName(artists, searchText) : artists

    return (
        <section className='bg-white flex flex-wrap flex-col m-12 sm:flex-row  place-content-start shadow-xl'>
            
            {artistsArray.map((artist: Artist) => (
                <ArtistCard key={artist.id} item={artist} />
            ))}
        </section>
    )
}
