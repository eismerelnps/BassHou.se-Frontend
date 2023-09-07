import ArtistScreen from '@/components/ArtistScreen/ArtistScreen';


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

export default async function page() {
  const artists = await fetchArtists();
  return <ArtistScreen artists={artists} />
}
