//'use client'
import AdminPanel from "@/components/AdminPanel/AdminPanel";

//get the endpoint of the api bd
const artists_url = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';

export default async function DashboardPage() {
   const fetchMenu = () => {
    return fetch(artists_url, { cache: "no-store" }).then((res) => res.json());
   };
  const artists = await fetchMenu();

  return <AdminPanel artists={artists} />;
}
