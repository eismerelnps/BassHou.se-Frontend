
import { Artist } from '@/interfaces/Artists'
import React from 'react'
import EditDeleteButton from './EditDeleteButton'

export default function AdminPanel({ artists }: { artists: Artist[] }) {
    return (
        <section className='

        bg-white 
        flex flex-wrap flex-col  place-content-start
        px-0.5 mb-8 sm:flex-row 
        shadow-xl z-10'>
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

                <tbody className="  px-4">
                    {artists.map((artist) => (
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
            </table>
        </section>

    )
}
