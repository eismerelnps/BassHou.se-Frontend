'use client'
import { useAppDispatch } from '@/hooks';
import { uiSetSearchText } from '@/reducers/uiSlice';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const router = useRouter();

  const dispatch = useAppDispatch();


   
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(uiSetSearchText(value))
        router.push('/main');
        router.refresh();
      };
  return (
    <div className='flex justify-center my-2  '>
    <div className=" rounded-[1px] w-3/4 sm:w-1/3 shadow-sm">
      <input

        onChange={handleInputChange}
        id="searchArtist"
        name="searchArtist"
        type="text"
        autoComplete="true"
        placeholder='Search by Artist/Brand Name'
        required
        className={`  bg-white shadow  rounded-3xl
                  focus:outline-2 hover:bg-slate-50 
                  duration-100 block w-full   py-1.5 ps-1.5 text-slate-950   
                  placeholder:text-gray-400 f text-xs  sm:text-sm sm:leading-6`}
      />
    </div>
  </div>
  )
}
