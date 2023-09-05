"use client";
import Image from "next/image";
import Link from "next/link";

import sad404 from '../../../public/sad404.svg'

export default function Error404() {
  return (
    <main className="h-screen bg-[#efed84] grid  place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center ">
        <div className="flex justify-center">
          <Image className="" width={150} height={150} src={sad404} alt="404" />
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            404
          </h1>

        <p className="mt-6 text-base leading-7 text-gray-500">
          Oops, it doesn&apos;t seem to exist or we had an error loading.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            Go To Home
          </Link>
          {/* <a
            href="https://api.whatsapp.com/send?phone=5356062474
"
            target="_blank"
            className="text-sm font-semibold text-gray-900"
          >
            Contáctenos <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </div>
    </main>
  );
}
