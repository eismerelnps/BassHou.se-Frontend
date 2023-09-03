import { useAppDispatch } from '@/hooks';
import { uiSetSearchTextAdmin } from '@/reducers/uiSlice';
import { useRouter } from 'next/navigation'


export default function SearchBar() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(uiSetSearchTextAdmin(value))
        router.refresh()
    };

  return (
    <div className='flex justify-center mt-2 sm:mt-4 w-full'>
    <div className=" rounded-[1px] sm:w-1/2 shadow-sm">
        <input
            onChange={handleInputChange}
            id="searchArtist"
            name="searchArtist"
            type="text"
            autoComplete="true"
            placeholder='Search by Artist/Brand Name'
            required
            className={`  bg-white shadow
              outline  outline-2 outline-slate-950
              focus:outline-2 hover:bg-slate-50 
              duration-100 block w-full rounded-[1px]  py-1.5 ps-1.5 text-slate-950   
              placeholder:text-gray-400 text-xs  sm:text-sm sm:leading-6`}
        />
    </div>
</div>
  )
}
