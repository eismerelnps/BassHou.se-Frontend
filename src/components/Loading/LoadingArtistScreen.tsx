import React from 'react'

export default function LoadingArtistScreen() {
    return (
        <div className=" animate-pulse relative top-72   mx-8 mt-2  md:mx-24 md:mt-4 px-4 py-8">
            <hr className='h-0.5 bg-neutral-300 ' />
            <div className=" flex flex-col sm:flex-row mt-2 ">
                <div className='sm:basis-3/5 '>
                    <article className='flex flex-col my-4'>
                        <div className=" rounded-sm bg-slate-700 ms-8 h-4 w-1/4"></div>
                    </article>

                    <div className='flex flex-col space-y-2 my-4 me-24'>
                        <div className="h-1.5 mx-2 mt-1 bg-slate-700 rounded"></div>
                        <div className="h-1.5 mx-2 mt-1 bg-slate-700 rounded"></div>
                        <div className="h-1.5 mx-2 mt-1 bg-slate-700 rounded"></div>
                        <div className="h-1.5 mx-2 mt-1 bg-slate-700 rounded"></div>
                        <div className="h-1.5 mx-2 mt-1 bg-slate-700 rounded"></div>
                        <div className="h-1.5 mx-2 mt-1 bg-slate-700 rounded"></div>
                        <div className="h-1.5 mx-2 mt-1 bg-slate-700 rounded"></div>
                        <div className="h-1.5 mx-2 mt-1 bg-slate-700 rounded"></div>
                        <div className="h-1.5 mx-2 mt-1 bg-slate-700 rounded"></div>
                    </div>
                </div>
                <section className='basis-2/5'>
                    <article className='flex flex-col'>
                        <div className=" rounded-sm bg-slate-700 h-40  w-full"></div>
                    </article>
                    <article className='border border-2 p-4'>
                        <div className='flex flex-col  mt-2 space-y-4'>
                            <div className='flex row items-center space-x-2 '>
                                <div className=" h-8 w-8  bg-slate-700 rounded-full"></div>
                                <div className=" h-2  w-16 bg-slate-700 rounded"></div>
                                <div className=" h-1  w-8 bg-slate-700 rounded"></div>
                            </div>
                            <div className='flex row items-center space-x-2 '>
                                <div className=" h-8 w-8  bg-slate-700 rounded-full"></div>
                                <div className=" h-2  w-16 bg-slate-700 rounded"></div>
                                <div className=" h-1  w-8 bg-slate-700 rounded"></div>
                            </div>
                            <div className='flex row items-center space-x-2 '>
                                <div className=" h-8 w-8  bg-slate-700 rounded-full"></div>
                                <div className=" h-2  w-16 bg-slate-700 rounded"></div>
                                <div className=" h-1  w-8 bg-slate-700 rounded"></div>
                            </div>
                            <div className='flex row items-center space-x-2 '>
                                <div className=" h-8 w-8  bg-slate-700 rounded-full"></div>
                                <div className=" h-2  w-16 bg-slate-700 rounded"></div>
                                <div className=" h-1  w-8 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
            <hr className='h-0.5 bg-neutral-300 ' />
            <section className='my-4'>
                <article className='flex justify-center my-4'>
                    <div className=" rounded-sm bg-slate-700 ms-8 h-4 w-1/4"></div>
                </article>

                <article className='flex flex-col mx-24'>
                    <div className=" rounded-sm bg-slate-700 h-52  w-full"></div>
                </article>

            </section>
        </div>
    )
}
