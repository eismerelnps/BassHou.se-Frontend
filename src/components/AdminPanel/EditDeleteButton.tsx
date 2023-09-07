'use client'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Artist } from '@/interfaces/Artists';
import { adminAddArtist } from '@/reducers/artistSlice';
import { uiSeeRequests, uiAddArtist, uiDeleteArtist, uiEditArtist, uiEditRequests } from '@/reducers/uiSlice';

export default function EditDeleteButton({ artist, artists }: { artist: Artist, artists: Artist[] }) {
  const dispatch = useAppDispatch();
  const { seeRequests } = useAppSelector((state) => state.ui);

  const handleOpenEdit = () => {
    dispatch(adminAddArtist(artist));
    dispatch(uiEditArtist(true));
  }
  const handleOpenDelete = () => {
    dispatch(adminAddArtist(artist));
    dispatch(uiDeleteArtist(true));
  }
  const handleOpenEditRequest = () => {
    dispatch(adminAddArtist({...artist, ranking: artists.length + 1}));
    dispatch(uiSeeRequests(true));
    dispatch(uiEditRequests(true))
  }
  const handleDenyRequest = () => {
    dispatch(adminAddArtist(artist));
    dispatch(uiDeleteArtist(true));
  }
  

  return (
    <td className=''>
      {
        seeRequests
          ?
          (
           <> <button onClick={handleOpenEditRequest} className='mx-1 text-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>Accept</button><button onClick={handleDenyRequest} className='mx-1 text-red-500 text-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>Deny</button></>
          )
          :
          (
            <><button onClick={handleOpenEdit} className='mx-1 text-blue-600 hover:text-blue-400 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>Edit</button><button onClick={handleOpenDelete} className='mx-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-red-500'>Delete</button></>
          )
      }
    </td>
  )

}
