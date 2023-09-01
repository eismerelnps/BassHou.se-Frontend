'use client'
import { Artist } from "@/interfaces/Artists";
import { useRouter } from "next/navigation";

export default function OpenArtist({item }: {item: Artist}) {
  const router = useRouter()
  
  const handdleOpenArtist = () => {
    const  { _id  } = item
    router.push(`/artist/?S=${_id}`);

  }
  return (
    <div className="flex justify-center   my-2">
      <button onClick={handdleOpenArtist} className="bg-[#efed84] border border-slate-950 rounded-2xl text-center px-12 py-1 hover:bg-[#f3f1a0]">
        More...
      </button>
    </div>


  )
}
