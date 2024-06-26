'use client'
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Artist } from '@/interfaces/Artists';
import { adminAddArtist, adminResetArtist } from '@/reducers/artistSlice';
import { uiAddArtist } from '@/reducers/uiSlice';
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function AddNewArtistButton({ artists }: { artists: Artist[] }) {
  const dispatch = useAppDispatch();
  const artist = useAppSelector((state) => state.artist)


  const handleAddProduct = () => {
    dispatch(adminResetArtist());
    dispatch(adminAddArtist({ ...artist, ranking: artists.length + 1 }))
    dispatch(uiAddArtist(true))
  };


  return (
    <div className="flex justify-center ">
      <div
        className="focus:outline-none focus:ring focus:ring-slate-950  text-red-500  flex flex-col items-center justify-center m-2 p-2  "
        onClick={handleAddProduct}
      >
        <div className="">
          <PlusCircleIcon
            id="plusCircleIcon"
            className="block h-6 w-6 sm:h-8 sm:w-8  "
            aria-hidden="true"
          />
        </div>
        <div className=" sm:block">
          <p
            className={`${'gilda_display.className'} text-xs text-center `}
          >
            New
          </p>
        </div>
      </div>
    </div>
  )
}
