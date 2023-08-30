import { startEditingArtist } from '@/actions/artist';
import { useAppDispatch, useAppSelector } from '@/hooks';
import React from 'react'

export default function EditArtists() {
  const { uploadingImage } = useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch();
  const handleEdit = (e: any) => {
    e.preventDefault();
    dispatch(startEditingArtist());
  }
  return (
    <button
      onClick={handleEdit}
      className={` disabled:opacity-40 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      disabled={uploadingImage}
    >
      Edit
    </button>
  )
}
