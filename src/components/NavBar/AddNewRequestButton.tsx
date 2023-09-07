
import { useAppDispatch } from '@/hooks';
import {  adminResetArtist } from '@/reducers/artistSlice';
import { uiAddRequest } from '@/reducers/uiSlice';
import React from 'react'


export default async function AddNewRequestButton() {
  const dispatch = useAppDispatch();

  const handleAddRequest = () => {
    dispatch(adminResetArtist());
    dispatch(adminResetArtist());
    dispatch(uiAddRequest(true));
  };


  return (

    <div
      className="focus:outline-none focus:ring focus:ring-slate-950 hover:text-xl text-red-500  flex flex-col items-center justify-center   "
      onClick={handleAddRequest}
    >
      <div className="">
        <p
          className={`${'gilda_display.className'} text-sm text-center `}
        >
          Missing Artist? Click here
        </p>
      </div>
    </div>

  )
}
