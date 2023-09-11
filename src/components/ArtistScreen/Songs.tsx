import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Songs({ songs }: { songs: string[] }) {
    return (
        <>
        <div className='bg-slate-200/25  p-2 sm:p-4'>
                <p className='  text-xl sm:text-2xl '>Songs:</p>
            </div>
         <div className='border-2 p-4 m-2 '>
           
            <article className='flex flex-col space-y-3 my-2 '>
                {songs.map((song: string) => (
                    <>
                        <div key={song} className='flex flex-row'>
                            <Link href={`http://basshouse.vercel.app/main?S=${song}`}  target="_blank" >
                                <svg
                                    className='hover:scale-110'
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem"
                                    viewBox="0 0 384 512">
                                    <path
                                        fill="#dc2626"
                                        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                                    />
                                </svg>
                            </Link>
                            <div className='mx-4'>
                                <h2 className=' '>{song}</h2>
                            </div>
                        </div>
                    
                    <div className='flex flex-row'>
                    <div className='basis-1/12'>
                        <hr className=' bg-slate-500 ' />
                    </div>
                    <div className='basis-9/12'>
                        <hr className=' bg-slate-500 mx-2' />
                    </div>
                </div>
                </>
                ))}
            </article>
        </div>
        </>
       
    )
}
