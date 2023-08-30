import React from "react";
//import { francois_one } from "@/fonts/francois_one";

export default function Skeleton() {
  return (
    <div className="mt-16">
      <h1
        className={`animate-pulse text-2xl text-slate-950 text-center m-4 b`}
      >
        Loading please wait
      </h1>
      <div className="animate-pulse flex justify-center">
        <div className="basis-1/2  space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>

      <div className="my-2 mx-2 flex flex-wrap flex-col md:flex-row">
        <div className=" basis-1/2 my-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="animate-pulse flex justify-center">
        <div className="basis-1/2  space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}

        <div className=" basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="animate-pulse flex justify-center">
        <div className="basis-1/2  space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}
        <div className="basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="animate-pulse flex justify-center">
        <div className="basis-1/2  space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}
        <div className=" basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="animate-pulse flex justify-center">
        <div className="basis-1/2  space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}
        <div className=" basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="animate-pulse flex justify-center">
        <div className="basis-1/2  space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div> */}
        <div className="basis-1/2 my-2 mx-2 border border-blue-300 shadow rounded-md p-4 max-w-lg w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-sm bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
