import { startUploadingPhoto } from '@/actions/artist';
import { adminEditArtist, adminResetArtist } from '@/reducers/artistSlice';
import { uiEditArtist } from '@/reducers/uiSlice';
import React, { useState } from 'react'
import { UpLoadingImage } from '../UpLoadingImage';
import Image from 'next/image';



import { useAppDispatch, useAppSelector } from '@/hooks';

import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useForm } from '@/hooks/useForm';
import { embedYouTubeURL } from '@/helpers/embedYouTubeURL';

export default function Form() {
    const dispatch = useAppDispatch();
    const artist = useAppSelector((state) => state.artist);
    const { cloudImageMessage, uploadingImage,  addArtist, addRequest } = useAppSelector((state) => state.ui);

    // hook use
    const [formValues, handleInputChange] = useForm(artist);

    const {
        artistName,
        activeSince,
        biography,
        images,
        ranking,
        visible,
        youtubeVideo,
    } = formValues;


    const [songs, setSongs] = useState(formValues.songs);
    const [profiles, setProfiles] = useState(formValues.profiles);



    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const file: File | undefined = e.target.files?.[0];
        if (file) {
            //call the function that is responsible for uploading the image
            dispatch(startUploadingPhoto(file));
        }

    };


    const handleCloseForm = () => {
        dispatch(uiEditArtist(false));
        dispatch(adminResetArtist())
    }





    const handleAddSong = (e: any) => {
        e.preventDefault();
        setSongs([...songs, '']);
    }

    const handleSongChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newSongs = [...songs];
        newSongs[index] = event.target.value;
        setSongs(newSongs);

        // Here we remove the element if the input is empty
        if (event.target.value === '') {
            newSongs.splice(index, 1);
        }
        //get actual artist from context and updates the songs field
        const updatedArtist = {
            ...artist,
            songs: newSongs,
        };

        dispatch(adminEditArtist(updatedArtist));
    };

    const handleProfiletChange = (index: number, event: React.ChangeEvent<HTMLInputElement>, profileName: string) => {
        const newProfiles = [...profiles];
        newProfiles[index] = { name: profileName, link: event.target.value };
        setProfiles(newProfiles);

        const updatedArtist = {
            ...artist,
            profiles: newProfiles,
        };

        dispatch(adminEditArtist(updatedArtist));
    }

    return (
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">

                    <div className="mt-10 ">
                        <div className="col-span-full">
                            <label
                                htmlFor="photocontainer"
                                className={` ${'quicksand.className'} block text-sm font-medium leading-6 text-gray-700`}
                            >
                                Photo
                            </label>
                            <div id='photocontainer' className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 ">
                                <div className="">
                                    <div className="flex justify-center">
                                        {uploadingImage ? (
                                            <UpLoadingImage />
                                        ) : (
                                            <div className="">
                                                {images[0] ? (
                                                    <>
                                                        <div className="flex justify-center">
                                                            <Image
                                                                className="rounded-lg text-center"
                                                                width={500}
                                                                height={150}
                                                                src={artist.images[0]}
                                                                alt={"alt"}
                                                            />
                                                        </div>

                                                        <div className="mt-4 flex flex-col  leading-6 text-gray-600 px-6 ">
                                                            <label
                                                                htmlFor="image"
                                                                className=" text-center relative cursor-pointer rounded-md bg-white  text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:text-red-500"
                                                            >
                                                                <span className=" text-center font-semibold">
                                                                    Change photo
                                                                </span>

                                                                <input
                                                                    id="image"
                                                                    name="image"
                                                                    type="file"
                                                                    onChange={handleFileChange}
                                                                    className="sr-only "
                                                                />

                                                            </label>
                                                            <span className="ms-2 text-xs text-center leading-5 text-gray-600">
                                                                PNG, JPG to 1MB
                                                            </span>
                                                        </div>

                                                    </>
                                                ) : (
                                                    <div>
                                                        <svg
                                                            className="mx-auto h-20 w-20 text-neutral-300 animate-pulse"
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
                                                        <div className="mt-4 flex flex-col  leading-6 text-gray-600 px-6 ">
                                                            <label
                                                                htmlFor="image"
                                                                className=" text-center relative cursor-pointer rounded-md bg-white  text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:text-red-500"
                                                            >
                                                                <span className=" text-center font-semibold">
                                                                    Select photo
                                                                </span>

                                                                <input
                                                                    id="image"
                                                                    name="image"
                                                                    type="file"
                                                                    onChange={handleFileChange}
                                                                    className="sr-only "
                                                                />

                                                            </label>
                                                            <span className="ms-2 text-xs text-center leading-5 text-gray-600">
                                                                PNG, JPG to 1MB
                                                            </span>
                                                        </div>

                                                    </div>
                                                )}
                                                <h2 className=" mt-4 text-center text-xs leading-5 text-gray-600">
                                                    {cloudImageMessage}
                                                </h2>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="mt-4">
                            <label
                                htmlFor="name"
                                className={` ${'quicksand.className'} block text-sm font-medium leading-6 text-gray-700`}
                            >
                                Artist&apos;s name*
                            </label>

                            <div className="">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{name} </span> */}
                                    <input
                                        value={artistName}
                                        type="text"
                                        name="artistName"
                                        id="artistName"
                                        autoComplete="off"
                                        className={`${'quicksand.className'}  bg-white outline  outline-1 outline-slate-300 focus:outline-2 hover:bg-slate-50 duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                                        placeholder="Name"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`mt-4 ${addRequest && 'hidden'}`}>
                            <label
                                htmlFor="name"
                                className={` ${'quicksand.className'} block text-sm font-medium leading-6 text-gray-700`}
                            >
                                Last Ranking
                            </label>
                            <div className="">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{name} </span> */}
                                    <input
                                        value={ranking}
                                        type="number"
                                        name="ranking"
                                        id="ranking"
                                        autoComplete="off"
                                        className={`${(addRequest || addArtist) && 'pointer-events-none'}   bg-white outline  outline-1 outline-slate-300 focus:outline-2 hover:bg-slate-50 duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                                        placeholder="Ranking"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="mt-4">
                            <label
                                htmlFor="category"
                                className={` ${'quicksand.className'} block text-sm font-medium leading-6 text-gray-700`}
                            >
                                Youtube Video
                            </label>
                            <div className="">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        value={youtubeVideo}
                                        type="text"
                                        name="youtubeVideo"
                                        id="youtubeVideo"
                                        autoComplete="off"
                                        className={`${'quicksand.className'}  bg-white outline  outline-1 outline-slate-300 focus:outline-2 hover:bg-slate-50  duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow   placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                                        placeholder="Youtube video URL"
                                        onChange={(e) => {
                                            //const inputUrl = e.target.value;
                                            //const embeddedUrl = embedYouTubeURL(inputUrl); // 
                                            handleInputChange({ target: { name: 'youtubeVideo', value: e.target.value } }); //
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="price"
                                className={` ${'quicksand.className'} block text-sm font-medium leading-6 text-gray-700`}
                            >
                                Active Since
                            </label>
                            <div className="">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        value={activeSince}
                                        type="number"
                                        name="activeSince"
                                        id="activeSince"
                                        autoComplete='true'
                                        className={`${'quicksand.className'}  bg-white outline  outline-1 outline-slate-300  focus:outline-2 hover:bg-slate-50  duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow    placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                                        placeholder="Artist's debut year"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>





                        <div className="my-4">
                            <label
                                htmlFor="inOffer"
                                className={` ${'quicksand.className'} block text-sm font-medium leading-6 text-gray-700`}
                            >
                                Visible
                            </label>
                            <div className=" rounded-lg border border-dashed border-gray-900/25 py-2 px-3 ">
                                <fieldset>
                                    <div className="">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex items-center">
                                                <input
                                                    id="visinle"
                                                    name="visible"
                                                    type="checkbox"
                                                    checked={visible}
                                                    onChange={handleInputChange}
                                                    className={`${'quicksand.className'}  bg-white  outline  outline-1 outline-slate-300   focus:outline-2 hover:bg-slate-50   duration-100 block w-full rounded-md   text-slate-950 shadow  placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                {visible ? (
                                                    <p className="text-gray-500 text-sm">
                                                        Artist is visible
                                                    </p>
                                                ) : (
                                                    <p className="text-gray-500 text-sm">
                                                        Artists is not visible
                                                    </p>
                                                )}

                                            </div>
                                        </div>

                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label
                                htmlFor="description"
                                className={` ${'quicksand.className'} block text-sm font-medium leading-6 text-gray-900`}
                            >
                                Social Networks
                            </label>
                            <div className='rounded-lg border border-dashed border-gray-900/25 py-2 px-3'>
                                {profiles.map(({ name, link }: { name: string, link: string }, i: number) => (
                                    <div key={i} className="mt-4 ">
                                        <label
                                            htmlFor="price"
                                            className={` ${'quicksand.className'} ms-2 block text-sm font-medium leading-6 text-gray-900`}
                                        >
                                            {name}
                                        </label>
                                        <div className="">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    value={link}
                                                    type="text"
                                                    name="profiles"
                                                    id="profiles"
                                                    autoComplete='true'
                                                    className={`${'quicksand.className'}  bg-white outline  outline-1 outline-slate-300  focus:outline-2 hover:bg-slate-50  duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow    placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                                                    placeholder="URL here"
                                                    onChange={(e) => handleProfiletChange(i, e, name)}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                ))
                                }
                            </div>
                        </div>


                        <div className='mt-4'>
                            <label
                                htmlFor="description"
                                className={` ${'quicksand.className'} block text-sm font-medium leading-6 text-gray-900`}
                            >
                                Songs
                            </label>
                            <div className='rounded-lg border border-dashed border-gray-900/25 py-2 px-3'>
                                {songs.map((song: string, i: number) => (
                                    <div key={i} className="mt-4">
                                        <label
                                            htmlFor="price"
                                            className={` ${'quicksand.className'} block ms-2 text-sm font-medium leading-6 text-gray-900`}
                                        >
                                            Song ({i + 1})
                                        </label>
                                        <div className="">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    value={song}
                                                    type="text"
                                                    name="songs"
                                                    id="songs"
                                                    autoComplete='true'
                                                    className={`${'quicksand.className'}  bg-white outline  outline-1 outline-slate-300  focus:outline-2 hover:bg-slate-50  duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow    placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                                                    placeholder="Song name here"
                                                    onChange={(e) => handleSongChange(i, e)}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                ))
                                }
                                <button onClick={handleAddSong} className='flex w-full justify-center p-1 my-4 rounded-md shadow-sm ring-1 ring-inset ring-red-500 hover:ring-2 hover:ring-inset hover:ring-red-400 sm:max-w-md'>
                                    <PlusCircleIcon
                                        className="h-8 w-8 text-red-500"
                                        aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="description"
                                    className={` ${'quicksand.className'} block text-sm font-medium leading-6 text-gray-700`}
                                >
                                    Biography
                                </label>
                                <div className="">
                                    <textarea
                                        onChange={handleInputChange}
                                        placeholder="Biography"
                                        id="biography"
                                        name="biography"
                                        rows={9}
                                        className={`${'quicksand.className'}  bg-white outline  outline-1 outline-slate-300 focus:outline-2 hover:bg-slate-50 duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                                        defaultValue={biography}
                                    />
                                </div>


                            </div>
                        </div>




                    </div>
                </div>
            </div>


        </form>
    )
}
