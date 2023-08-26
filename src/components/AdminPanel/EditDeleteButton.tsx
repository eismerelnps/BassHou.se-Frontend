'use client'
import { useAppDispatch } from '@/hooks'
import { Artist } from '@/interfaces/Artists';
import { addArtist } from '@/reducers/artistSlice';
import { adminDeleteArtist, adminEditArtist } from '@/reducers/uiSlice';

export default function EditDeleteButton({ artist }: { artist: Artist }) {
  const dispatch = useAppDispatch();

  const handleOpenEdit = () => {
    dispatch(addArtist(artist));
    dispatch(adminEditArtist(true));
  }
  const handleOpenDelete = () => {
    dispatch(addArtist(artist));
    dispatch(adminDeleteArtist(true));
  }

  return (
    <td className='text-blue-600 hover:text-blue-400'><button onClick={handleOpenEdit} className='mx-1 text-sm'>Edit</button><button onClick={handleOpenDelete} className='mx-1 text-red-500 text-sm'>Delete</button></td>

  )
}
