import AdminPanel from "@/components/AdminPanel/AdminPanel";
//get the endpoint of the api bd
const artists_url = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';
const requests_url = process.env.NEXT_PUBLIC_DB_API_REQUESTS || '';


async function fetchArtists() {
  const res = await fetch(artists_url, { cache: 'no-store'});

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
};
async function fetchRequests() {
  const res = await fetch(requests_url, { cache: 'no-store'});
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
};


export default async function DashboardPage() {
  const artists = await fetchArtists();
  const requests = await fetchRequests();



  return <AdminPanel artists={artists} requests={requests} />;

}
