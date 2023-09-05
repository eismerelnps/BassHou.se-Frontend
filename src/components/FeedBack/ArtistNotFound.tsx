"use client";
import Image from "next/image";
import Link from "next/link";

import cactus from '../../../public/cactus.jpg'
import { useAppDispatch, useAppSelector } from "@/hooks";
import { adminAddArtist, adminResetArtist } from "@/reducers/artistSlice";
import { uiAddRequest } from "@/reducers/uiSlice";
import { Artist } from "@/interfaces/Artists";

export default function ArtisNotFound({ artists }: { artists: Artist[] }) {
    const dispatch = useAppDispatch();
    const artist = useAppSelector((state) => state.artist)

    const { searchText } = useAppSelector((state) => state.ui);

    const handleAddRequest = () => {
        dispatch(adminResetArtist());
        dispatch(adminAddArtist({ ...artist, ranking: artists.length + 1 }))
        dispatch(uiAddRequest(true))
      };

    return (
        <main className="fixed top-60 sm:top-72 mt-8 h-screen bg-slate-50 grid  py-12 px-6 lg:px-8 w-full">
            <div className="text-center ">
                <div className="flex justify-center">
                    <Image className="" width={150} height={150} src={cactus} alt="404" />
                </div>

                <h1 className="mt-4 text-2xl  font-bold tracking-tight text-slate-950 sm:text-3xl">
                    No results for &quot;<p className="inline-block text-[#efed84]">{searchText}</p>&quot;
                </h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button
                    onClick={handleAddRequest}
                        className="rounded-md bg-[#efed84] px-3.5 py-2.5 text-sm font-semibold text-slaye-950 shadow-sm border border-slate-950 hover:bg-yellow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                    >
                        Add Missing Artist
                    </button>
                </div>
            </div>
        </main>
    );
}
