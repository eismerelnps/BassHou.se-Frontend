import AdminPanel from '@/components/AdminPanel/AdminPanel';
import { artists } from '@/data/artist';

//get the endpoint of the api bd
const url = process.env.NEXT_PUBLIC_DB_API_ARTISTS;

export default async function DashboardPage() {
  
  // const fetchMenu = () => {
  //   return fetch(url, { cache: "no-store" }).then((res) => res.json());
  // };

 // const artists = await fetchMenu();
 const artistsArray = artists

  return (
    <main className="my-5 ">
      <div className='bg-[#efed84] fixed top-72 my-5 w-full h-20  z-0'></div>
      <AdminPanel artists={artistsArray} />
    </main>
  )
 
}
