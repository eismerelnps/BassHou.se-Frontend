import { startAddingNewArtist } from '@/actions/artist';
import { startAddingNewRequest } from '@/actions/requests';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { uiRemoveError, uiSetError } from '@/reducers/uiSlice';
import React from 'react'

export default function AddRequest() {
  const dispatch = useAppDispatch();
  const { artistName, activeSince, briefDescription, biography, ranking} = useAppSelector((state) => state.artist);
  const { uploadingImage } = useAppSelector((state) => state.ui);

  const handleAdd = (e: any) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startAddingNewRequest());
    }
  };
  const isFormValid = () => {
    if (artistName.trim().length === 0 || artistName.trim().length < 3 ) {
      dispatch(uiSetError("Enter a valid artist name"));
      return false;
    }else if (ranking === null || ranking < 1) {
      dispatch(
        uiSetError("Enter a valid ranking greater than 1")
      );
      return false;
    } 
    else if (artistName.trim().length > 20)  {
      dispatch(uiSetError("Enter a shorter name"));
      return false;
    } 
    else if (activeSince < 1950 || activeSince > 2023) {
      dispatch(uiSetError("Active since must be between 1950 and 2023"));
      return false;
    } else if (briefDescription.length < 20 || briefDescription.length > 120 ) {
      dispatch(uiSetError("Enter a brief description between 20 and 120 characters"));
      return false;
    } else if (biography.length < 200 || biography.length > 10000) {
      dispatch(uiSetError("Please type a biography between 200 and 10000 characters "));
      return false;
    } 
    dispatch(uiRemoveError());
    return true;
  };
  return (
    <button
      onClick={handleAdd}
      className={` disabled:opacity-40 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
      disabled={uploadingImage}
    >
      Submit Request
    </button>
  )
}
