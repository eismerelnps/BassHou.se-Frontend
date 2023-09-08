'use client'
// Artist interface
import { Artist } from '@/interfaces/Artists'
//child components
import ArtistCard from '../ArtistCard/ArtistCard'
//helpers
import { getArtistByName } from '@/helpers/getArtistByName';
//hooks
import { useAppSelector } from '@/hooks';
import ArtisNotFound from '../FeedBack/ArtistNotFound';

export default function ArtistList({ artists }: { artists: Artist[] }) {
    const { searchText } = useAppSelector((state) => state.ui)
    const artistsArray: Artist[] = searchText ? getArtistByName(artists, searchText) : artists




    if (searchText) {
        if (artistsArray.length <= 0) {
            return <ArtisNotFound artists={artists} />
        }
    }
    return (
        <section className='relative top-60 sm:top-60 sm:my-12 bg-white flex flex-wrap flex-col mx-2 sm:mx-12 mb-8  sm:flex-row content-center sm:place-content-start 2xl:place-content-center shadow-xl rounded z-10'>
            {artistsArray.map((artist: Artist) => (
                <ArtistCard key={artist._id} item={artist} />
            ))}
        </section>
    )
}
