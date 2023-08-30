'use client'
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { adminResetArtist } from "@/reducers/artistSlice";

import Form from "./Form";
import { uiAddArtist, uiEditArtist } from "@/reducers/uiSlice";


export default function EditArtistForm() {
    const dispatch = useAppDispatch();
    const artist = useAppSelector((state) => state.artist);
   
    const { editArtist, addArtist } = useAppSelector((state) => state.ui);


    const handleCloseForm = () => {
        // dispatch(adminResetArtist());
        // dispatch(uiAddArtist(false));
        // dispatch(uiEditArtist(false));
    }

    return (

        <div className="mt-16">
            <Transition.Root show={editArtist || addArtist} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-30"
                    onClose={handleCloseForm}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-8">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon
                                                    className="h-6 w-6 text-red-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4  sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className={`text-lg leading-6 font-medium text-gray-900`}
                                                >
                                                    Edit Artist&apos;s Info
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                        <div className="space-y-12">
                                                            <div>
                                                                <p
                                                                    className={`${'quicksand.className'} mt-1 text-sm leading-6 text-gray-600`}>
                                                                    Please verify all fields before submitting any change
                                                                </p>
                                                            </div>

                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <Form />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>

    )
}