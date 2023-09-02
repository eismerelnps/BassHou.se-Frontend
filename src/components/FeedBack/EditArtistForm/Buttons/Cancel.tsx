import { useAppDispatch } from '@/hooks';
import { adminResetArtist } from '@/reducers/artistSlice';
import { uiAddArtist, uiEditArtist, uiEditRequests, uiAddRequest } from '@/reducers/uiSlice';
import React from 'react'

export default function Cancel() {
    const dispatch = useAppDispatch();
    const handdleCancel = () => {
        dispatch(uiEditArtist(false));
        dispatch(uiAddArtist(false));
        dispatch(uiAddRequest(false));
        dispatch(uiEditRequests(false));
        dispatch(adminResetArtist());
    };
    return (
        <button onClick={handdleCancel} type="button" className="text-sm font-semibold leading-6 text-gray-900"> Cancelar </button>
    )
}
