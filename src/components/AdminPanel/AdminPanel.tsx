'use client'
import { Artist } from '@/interfaces/Artists'
import React from 'react'
import EditDeleteButton from './EditDeleteButton'
import AddNewArtistButton from './AddNewArtistButton'
import SwitchRender from './SwitchRender'
import { useAppSelector } from '@/hooks'
import { getArtistByName } from '@/helpers/getArtistByName'
import SearchBar from './SearchBar'

export default function AdminPanel({ artists, requests }: { artists: Artist[], requests: Artist[] }) {

    const { searchTextAdmin, seeRequests } = useAppSelector((state) => state.ui)

    const artistsArray: Artist[] = searchTextAdmin ? getArtistByName(artists, searchTextAdmin) : artists



    return (
        <section className='bg-white flex flex-wrap flex-col place-content-start px-0.5 mb-8 sm:flex-row shadow-xl z-10'>


            <div className='flex flex-row items-center justify-center w-full'>
                <div className='basis-2/6'><SwitchRender /></div>
                <div className='basis-2/6'> <AddNewArtistButton artists={artists} /></div>
                <div className='basis-3/4'><SearchBar /></div>
            </div>
            

            
            <table className="table-auto w-full ">
                <thead className="
                bg-gray-50 border-b-2 w-full
                
                ">
                    <tr className='cursor-default'>
                        <th className='text-start py-0.5'>
                            Name
                        </th>
                        <th className=''>
                            Status
                        </th>
                        <th className=''>
                            Ranking
                        </th>
                        <th className=''>
                            Edit
                        </th>
                    </tr>
                </thead>
                {
                    seeRequests
                        ?
                        (
                            <tbody className={`  `}>
                                {requests.map((request) => (
                                    <>
                                        <tr key={request._id} className='cursor-default text-center transition ease-in-out delay-150 hover:bg-gray-50  hover:translate-1 hover:scale-y-105  duration-300'>
                                            <td className='text-start  text-neutral-950  '>{request.artistName}</td>
                                            {request.visible ? <td className='text-emerald-400 '>Visible</td> : <td className='text-red-400'>Hidden</td>}
                                            <td className='text-neutral-500'>{request.ranking}</td>
                                            <EditDeleteButton artist={request} artists={artists} />

                                        </tr>

                                    </>

                                ))}
                            </tbody>
                        )
                        :
                        (
                            <tbody className={` `}>
                                {artistsArray.map((artist) => (
                                    <>
                                        <tr key={artist._id} className=' cursor-default text-center transition ease-in-out delay-150 hover:bg-gray-50  hover:translate-1 hover:scale-y-105  duration-300'>
                                            <td className='py-1 text-start text-neutral-950 p-0.5 hover:h-6'>{artist.artistName}</td>
                                            {artist.visible ? <td className='text-emerald-400 '>Visible</td> : <td className='text-red-400'>Hidden</td>}
                                            <td className='text-neutral-500'>{artist.ranking}</td>
                                            <EditDeleteButton artist={artist} artists={artists} />
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        )
                }
            </table>
        </section>

    )
}
