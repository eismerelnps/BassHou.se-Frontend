'use client'
// Artist interface
import { Artist } from '@/interfaces/Artists'
//child components
import ArtistCard from '../ArtistCard/ArtistCard'
//helpers
import { getArtistByName } from '@/helpers/getArtistByName';
//hooks
import { useAppSelector } from '@/hooks';

export default function ArtistList({ artists }: { artists: Artist[] }) {
    const { searchText } = useAppSelector((state) => state.ui)
    const artistsArray: Artist[] = searchText ? getArtistByName(artists, searchText) : artists

    return (
        <section className='relative top-72 bg-white flex flex-wrap flex-col mx-8 sm:mx-12 mb-8  sm:flex-row  place-content-start shadow-xl z-10'>
            {artistsArray.map((artist: Artist) => (
                <ArtistCard key={artist._id} item={artist} />
            ))}
        </section>
    )
}
