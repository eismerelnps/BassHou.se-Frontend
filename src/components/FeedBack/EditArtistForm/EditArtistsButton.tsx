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
      className={` disabled:opacity-40 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
      disabled={uploadingImage}
    >
      Edit
    </button>
  )
}
