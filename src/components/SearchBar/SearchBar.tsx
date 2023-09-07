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
    <div className='flex justify-center my-2 sm:mt-4  '>
    <div className="w-1/2 sm:w-96">
      <input

        onChange={handleInputChange}
        id="searchArtist"
        name="searchArtist"
        type="text"
        autoComplete="true"
        placeholder='Search by Artist/Brand Name'
        required
        className={` shadow-sm  bg-white   rounded-3xl
                  focus:outline-2 hover:bg-slate-50 
                  duration-100 block w-full  py-1.5 px-2 text-slate-950   
                  placeholder:text-gray-400 text-xs   sm:text-sm sm:leading-6`}
      />
    </div>
  </div>
  )
}
