'use client'
import { useAppDispatch } from "@/hooks";
import { Artist } from "@/interfaces/Artists";
import { adminAddArtist } from "@/reducers/artistSlice";
import { useRouter } from "next/navigation";

export default function OpenArtist({item }: {item: Artist}) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const handdleOpenArtist = () => {
    dispatch(adminAddArtist(item))
    router.push('./artist')
  }
  return (
    <div className="flex justify-center   my-2">
      <button onClick={handdleOpenArtist} className="bg-[#efed84] border border-slate-950 rounded-2xl text-center px-12 py-1 ">
        More...
      </button>
    </div>


  )
}
