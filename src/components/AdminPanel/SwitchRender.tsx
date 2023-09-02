'use client'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { uiSeeRequests } from '@/reducers/uiSlice'
import React from 'react'

export default function SwitchRender() {
    const dispatch = useAppDispatch()
    const { seeRequests } = useAppSelector((state) => state.ui);


    const handleSeeArtists = () => {
        dispatch(uiSeeRequests(false))
    }
    const handleSeeRequests = () => {
        dispatch(uiSeeRequests(true))
    }
    return (
        <div className='flex flex-row justify-center w-full'>
            <div className=''>
            <button onClick={handleSeeArtists} className={`${seeRequests ? '' : 'bg-red-100'} border-y border-s border-red-500 p-1 rounded-s-xl`}>Artists</button>
            <button onClick={handleSeeRequests} className={`${seeRequests ? 'bg-red-100' : ''} border-y border-e p-1 border-red-500 rounded-e-xl`}>Requests</button>
            </div>
          
        </div>
    )
}
