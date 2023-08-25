'use client'
import { useAppDispatch } from "@/hooks";
import { Artist } from "@/interfaces/Artists";
import { addArtist } from "@/reducers/artistSlice";
import { useRouter } from "next/navigation";

export default function OpenArtist({ item }: {
  children: React.ReactNode;
  item: Artist
}) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const handdleOpenArtist = () => {
    dispatch(addArtist(item))
    router.push('./artist')
  }
  return (
    <div className="flex justify-center   my-2">
      <button onClick={handdleOpenArtist} className="border border-slate-950 rounded-2xl text-center px-12 py-1 bg-yellow-200 ">
        More...
      </button>
    </div>


  )
}
