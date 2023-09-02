'use client'
import { Artist } from '@/interfaces/Artists'
import React from 'react'
import EditDeleteButton from './EditDeleteButton'
import AddNewArtistButton from './AddNewArtistButton'
import SwitchRender from './SwitchRender'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useRouter } from 'next/navigation'
import { uiSetSearchTextAdmin } from '@/reducers/uiSlice'
import { getArtistByName } from '@/helpers/getArtistByName'

export default function AdminPanel({ artists, requests }: { artists: Artist[], requests: Artist[] }) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { searchTextAdmin } = useAppSelector((state) => state.ui)


    const artistsArray: Artist[] = searchTextAdmin ? getArtistByName(artists, searchTextAdmin) : artists
    const { seeRequests } = useAppSelector((state) => state.ui);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(uiSetSearchTextAdmin(value))
        router.refresh()

    };

    return (
        <section className='

        bg-white 
        flex flex-wrap flex-col  place-content-start
        px-0.5 mb-8 sm:flex-row 
        shadow-xl z-10'>
            <div className='flex justify-center mt-2 sm:mt-4 '>
                <div className=" rounded-[1px] w-3/4 sm:w-1/2 shadow-sm">
                    <input
                        //value={'searchText'}
                        onChange={handleInputChange}
                        id="searchArtist"
                        name="searchArtist"
                        type="text"
                        autoComplete="true"
                        placeholder='Search by Artist/Brand Name'
                        required
                        className={`  bg-white shadow-md
                          outline  outline-2 outline-slate-950
                          focus:outline-2 hover:bg-slate-50 
                          duration-100 block w-full rounded-[1px]  py-1.5 ps-1.5 text-slate-950 shadow  
                          placeholder:text-gray-400 f text-xs  sm:text-sm sm:leading-6`}
                    />
                </div>
            </div>

            <AddNewArtistButton artists={artists} />
            <SwitchRender />
            <table className="table-auto w-full border-separate border-spacing-y-6">
                <thead className="
                bg-gray-50 border-b-2 w-full
                
                ">
                    <tr className='py-4'>
                        <th className='text-start'>
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
                            <tbody className={`  px-4`}>
                                {requests.map((request) => (
                                    <>
                                        <tr key={request._id} className='  text-center h-4 hover:bg-neutral-100 hover:shadow-2xl'>
                                            <td className='text-start text-neutral-950  '>{request.artistName}</td>
                                            {request.visible ? <td className='text-emerald-400 '>Visible</td> : <td className='text-red-400'>Hidden</td>}
                                            <td className='text-neutral-500'>{request.ranking}</td>
                                            <EditDeleteButton artist={request} />

                                        </tr>

                                    </>

                                ))}
                            </tbody>
                        )
                        :
                        (
                            <tbody className={`  px-4`}>
                                {artistsArray.map((artist) => (
                                    <>
                                        <tr key={artist._id} className='  text-center h-4 hover:bg-neutral-100 hover:shadow-2xl'>
                                            <td className='text-start text-neutral-950  '>{artist.artistName}</td>
                                            {artist.visible ? <td className='text-emerald-400 '>Visible</td> : <td className='text-red-400'>Hidden</td>}
                                            <td className='text-neutral-500'>{artist.ranking}</td>
                                            <EditDeleteButton artist={artist} />
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
