"use client";
import Link from "next/link";

export default function Error404() {
  return (
    <main className="relative top-72 grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#efed84] ">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        An error has occurred
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
        Oops, it doesn&apos;t seem to exist or we had an error loading.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#efed84] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            Refresh Page
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
