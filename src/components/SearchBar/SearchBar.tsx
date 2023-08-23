'use client'
import { useForm } from '@/hooks/useForm';
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
    <div className=' flex flex-auto justify-center sticky top-0 '>
      <div className='bg-blue-50 p-16 rounded-b-xl w-3/4 max-w-3xl'>
        <form onSubmit={handleSearch} className=''>
          <div className="mt-2 rounded-md shadow-sm">
            <input
              id="searchText"
              name="searchText"
              type="text"
              autoComplete="true"
              placeholder='Search artists'
              required
              className={`  bg-white
        outline  outline-1 outline-slate-300
        focus:outline-2 hover:bg-slate-50 
        duration-100 block w-full rounded-md  py-1.5 ps-1.5 text-slate-950 shadow  
        placeholder:text-gray-400 f   sm:text-sm sm:leading-6`}
              onChange={handdleInputChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                type="button"
                onClick={handleSearch}
                className="h-full rounded-md bg-transparent py-0 p-2 text-gray-500  sm:text-sm"
              >
                {/* <EyeSlashIcon
          className="block h-4 w-4 duration-200 text-slate-500 "
          aria-hidden="true"
        /> */}
              </button>
            </div>
          </div>
        </form>
      </div>



    </div>
  )
}
