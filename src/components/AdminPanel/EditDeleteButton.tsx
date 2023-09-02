'use client'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Artist } from '@/interfaces/Artists';
import { adminAddArtist } from '@/reducers/artistSlice';
import { uiSeeRequests, uiAddArtist, uiDeleteArtist, uiEditArtist, uiEditRequests } from '@/reducers/uiSlice';

export default function EditDeleteButton({ artist }: { artist: Artist }) {
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
    dispatch(adminAddArtist(artist));
    dispatch(uiSeeRequests(true));
    dispatch(uiEditRequests(true))
  }
  const handleDenyRequest = () => {
    dispatch(adminAddArtist(artist));
    dispatch(uiDeleteArtist(true));
  }
  

  return (
    <td className='text-blue-600 hover:text-blue-400'>
      {
        seeRequests
          ?
          (
           <> <button onClick={handleOpenEditRequest} className='mx-1 text-sm'>Accept</button><button onClick={handleDenyRequest} className='mx-1 text-red-500 text-sm'>Deny</button></>
          )
          :
          (
            <><button onClick={handleOpenEdit} className='mx-1 text-sm'>Edit</button><button onClick={handleOpenDelete} className='mx-1 text-red-500 text-sm'>Delete</button></>
          )
      }
    </td>
  )

}
