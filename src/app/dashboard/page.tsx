import React from "react";
import AdminPanel from "@/components/AdminPanel/AdminPanel";

export default async function DashboardPage() {
  //get the endpoint of the api bd
  const artists_url = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';
  const requests_url = process.env.NEXT_PUBLIC_DB_API_REQUESTS || '';

   const fetchArtists = () => {
    return fetch(artists_url, { cache: "no-store" }).then((res) => res.json());
   };
   const fetchRequests = () => {
    return fetch(requests_url, { cache: "no-store" }).then((res) => res.json());
   };
  const artists = await fetchArtists();
  const requests  = await fetchRequests();

  return <AdminPanel artists={artists} requests={requests}/>;
}
