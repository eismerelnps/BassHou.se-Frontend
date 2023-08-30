import ArtistList from '@/components/ArtistList/ArtistList'

export default async function Home() {
  //get the endpoint of the api bd
  const url: string = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';


 const fetchMenu = () => {
  return fetch(url, { cache: "no-store" }).then((res) => res.json());
   };

 const artists = await fetchMenu();


  return (
    <main className="my-5 ">
      <div className='bg-red-500 fixed top-72 my-5 w-full h-20  z-0'></div>
       <ArtistList  artists={artists } />
    </main>
  )
}