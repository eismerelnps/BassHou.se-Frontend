'use client'
import { useForm } from '@/hooks/useForm';
import React from 'react'
//import { useDispatch } from 'react-redux';





export default function SearchBar() {
  //const dispatch = useDispatch();

   const [formValues, handdleInputChange] = useForm({
     searchText: "",
    // password: "",
   });

    const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    //dispatch( handledSearch(searchText) );
    //dispatch(startLoginWithUserAndPassword(username, password));
    
  };

 
  return (
    <div className='flex flex-auto justify-center'>
      <div className="mt-2 w-3/4 max-w-3xl ">
        <form onSubmit={handleSearch}>
        <input
                id="username"
                name="username"
                type="text"
                autoComplete="true"
                required
                className={`  bg-white
                outline  outline-1 outline-slate-300
                focus:outline-2 hover:bg-slate-50 
                duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
                placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
                onChange={handdleInputChange}
              />
        </form>
             
            </div>
    </div>
  )
}
