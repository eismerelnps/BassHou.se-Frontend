import ArtistList from '@/components/ArtistList/ArtistList';

//get the endpoint of the api bd
const artists_url = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';


async function fetchArtists() {
    const res = await fetch(artists_url, { cache: 'no-store' });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
};

export default async function DashboardPage() {
    const artists = await fetchArtists();

    return (
        <div>
            <main className="my-5 ">
                <div className='hidden sm:inline-block  bg-[#efed84] fixed top-60 py-8  w-full h-20  z-0'></div>
            </main>
            <ArtistList artists={artists} />
        </div>
    )

}
