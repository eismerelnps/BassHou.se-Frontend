import { startAddingNewRequest } from '@/actions/requests';
import { embedYouTubeURL } from '@/helpers/embedYouTubeURL';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { adminEditArtist } from '@/reducers/artistSlice';
import { uiRemoveError, uiSetError } from '@/reducers/uiSlice';
import { isValidFacebookUrl, isValidMySpacedUrl, isValidSoundCloudUrl, isValidURL, isValidXUrl, isValidYoutubeUrl } from '@/helpers/urlValidators'

export default function AddRequest() {
  const dispatch = useAppDispatch();
  const { artistName, activeSince, biography, ranking, youtubeVideo, profiles } = useAppSelector((state) => state.artist);
  const { uploadingImage } = useAppSelector((state) => state.ui);

  const handleAdd = (e: any) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(adminEditArtist({ youtubeVideo: embedYouTubeURL(youtubeVideo) }));
      dispatch(uiSetError("Perfect"));

      //dispatch(startAddingNewRequest());
    }
  };

  

  const isFormValid = () => {
    if (artistName.trim().length === 0 || artistName.trim().length < 3) {
      dispatch(uiSetError("Enter a valid artist name"));
      return false;
    } else if (artistName.trim().length > 20) {
      dispatch(uiSetError("Enter a shorter name"));
      return false;
    } else if (!youtubeVideo) {
      dispatch(uiSetError("Enter a Youtube Video URL"));
      return false;
    } else if (!isValidYoutubeUrl(youtubeVideo)) {
      dispatch(uiSetError('Please enter a valid Youtube Video URL'));
      return false;
    } else if (activeSince < 1950 || activeSince > 2023) {
      dispatch(uiSetError("Active since must be between 1950 and 2023"));
      return false;
    }





    else if (profiles[0].link) {
      if (!isValidURL(profiles[0].link)) {
        dispatch(uiSetError('Please enter a valid website url'));
        return false;
      }
    }
    else if (profiles[1].link) {
      if (!isValidFacebookUrl(profiles[1].link)) {
        dispatch(uiSetError('Please enter a valid Facebook url'));
        return false;
      }
    }
    else if (profiles[3].link) {
      if (!isValidMySpacedUrl(profiles[3].link)) {
        dispatch(uiSetError('Please enter a valid MySpace url'));
        return false;
      }
    }
    else if (profiles[4].link) {
      if (!isValidSoundCloudUrl(profiles[4].link)) {
        dispatch(uiSetError('Please enter a valid SoundCloud url'));
        return false;
      }
    } else if (profiles[5].link) {
      if (!isValidYoutubeUrl(profiles[5].link)) {
        dispatch(uiSetError('Please enter a valid Youtube url'));
        return false;
      }
    }
    else if (profiles[6].link) {
      if (!isValidXUrl(profiles[6].link)) {
        dispatch(uiSetError('Please enter a valid X url'));
        return false;
      }
    }
    else if (biography.length < 200 || biography.length > 10000) {
      dispatch(uiSetError("Please type a biography between 200 and 10000 characters "));
      return false;
    }

    dispatch(uiRemoveError());
    return true;
  };
  return (
    <button
      onClick={handleAdd}
      className={` disabled:opacity-40 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto`}
      disabled={uploadingImage}
    >
      Submit Request
    </button>
  )
}
