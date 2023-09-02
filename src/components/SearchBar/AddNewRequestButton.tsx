'use client'
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Artist } from '@/interfaces/Artists';
import { adminAddArtist, adminResetArtist } from '@/reducers/artistSlice';
import { uiAddRequest } from '@/reducers/uiSlice';
import React from 'react'

export default function AddNewRequestButton({ artists }: { artists: Artist[] }) {
  const dispatch = useAppDispatch();
  const artist = useAppSelector((state) => state.artist)

  const handleAddRequest = () => {
    dispatch(adminResetArtist());
    dispatch(adminAddArtist({ ...artist, ranking: artists.length + 1 }))
    dispatch(uiAddRequest(true))
  };


  return (
    <div className="flex justify-center w-full m-4">
      <div
        className="focus:outline-none focus:ring focus:ring-slate-950 hover:text-xl text-red-500  flex flex-col items-center justify-center   "
        onClick={handleAddRequest}
      >

        <div className="">
          <p
            className={`${'gilda_display.className'} text-sm text-center text-center `}
          >
            Missing Artist? Click here
          </p>
        </div>
      </div>
    </div>
  )
}
