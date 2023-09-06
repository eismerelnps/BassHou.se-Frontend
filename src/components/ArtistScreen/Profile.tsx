import Image from 'next/image'
import React from 'react'

//network images 
import facebook from '/public/facebook.png'
import music from '/public/music.png'
import myspace from '/public/myspace.png'
import soundcloud from '/public/soundcloud.png'
import twitter from '/public/twitter.png'
import website from '/public/website.png'
import youtube from '/public/youtube.png'
import { ProfileInterFace } from '@/interfaces/Profile'




export default function Profile({ images, profiles }: { images: string[], profiles: ProfileInterFace[] }) {

    const networkImages = [website, facebook, music, myspace, soundcloud, youtube, twitter]


    return (
        <div className=''>
            {
                images[0]
                    ? (
                        <Image
                            className=' '
                            src={images[0]}
                            width={768}
                            height={300}
                            alt='martin'
                        />
                    )
                    :
                    (
                        <svg
                            className="mx-auto h-28 w-28  text-neutral-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    )
            }
            <article className=' border-2 p-4 my-2'>
                <p className='my-2'>Networks</p>
                {
                    profiles.map((profile: ProfileInterFace, index: number) => (
                        <>
                            <div key={profile.name} className='flex flex-row space-y-3 my-2 items-center'>
                                <div className='basis-1/12'>
                                    <Image
                                        className='rounded-t-md '
                                        src={networkImages[index]}
                                        width={35}
                                        height={35}
                                        alt={profile.name}
                                    />

                                </div>
                                <div className='basis-11/12 mx-2 text-start'>
                                    <h2 className='ms-1 '>{profile.name}</h2>

                                </div>

                                <div>

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
                    ))
                }
            </article>
        </div>
    )
}
