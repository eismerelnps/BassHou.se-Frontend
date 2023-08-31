import { uiFinishLoading, uiFinishUpLoadingImage, uiSetCloudImageMessage, uiSetError, uiStartLoading, uiStartUpLoadingImage } from "@/reducers/uiSlice";

import { Dispatch, AnyAction } from 'redux';

import { RootState, rootReducer } from "@/store/store";
import { fileUpload } from "@/helpers/fileUpload";
import { adminEditArtist } from "@/reducers/artistSlice";

const token = process.env.NEXT_PUBLIC_TOKEN || '';
const url = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';


rootReducer

type HttpHeaders = {
  "Content-Type": string;
  Accept: string;
  "Accept-Encoding": string;
  Authorization: string;
};

const headers: HttpHeaders = {
  "Content-Type": "application/json",
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  Authorization: token,
};




//To add a new product to the database
export const startAddingNewArtist = () => {
  return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    //const { token } = getState().auth;
    const artist = getState().artist;

    

    dispatch(uiStartLoading());
    fetch(url, {
      method: "POST",
      body: JSON.stringify(artist),
      headers
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(uiFinishLoading());
        dispatch(uiSetError(data.message));
        //router.refresh();
      })

      .catch((error) => {
        dispatch(uiFinishLoading());
        dispatch(
          uiSetError(
            "There was an error adding the artist. Please try again."
          )
        );
      });
  };
};



//To edit a artist on DB by its ID
export const startEditingArtist = () => {
  return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    //const { token } = getState().auth;
    const artist = getState().artist;

    const { _id } = artist;
    dispatch(uiStartLoading())

    fetch(`${url}/${_id}`, {
      method: "PUT",
      body: JSON.stringify(artist),
      headers
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(uiFinishLoading());
        dispatch(uiSetError(data.message));
        //router.refresh();
      })

      .catch((error) => {
        dispatch(uiFinishLoading());
        dispatch(
          uiSetError(
            "There was an error editing the artist. Please try again."
          )
        );
      });
  };
};


  //To delete a product from the database by its id
export const startDeletingArtist = () => {
  return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    //const { token } = getState().auth;
    const { _id } = getState().artist;

    

    dispatch(uiStartLoading());
    fetch(`${url}/${_id}`, {
      method: "DELETE",
      body: JSON.stringify({}),
      headers
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(uiFinishLoading());
        dispatch(uiSetError(data.message));
        //router.refresh();
      })
      .catch((error) => {
        dispatch(uiFinishLoading());
         dispatch(
           uiSetError(
             "Se ha producido un error al crear el producto. Por favor, inténtelo de nuevo."
           )
         );
      });
   };
};

//action to upload a image tu a cloud service
export const startUploadingPhoto = (file: File) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(uiStartUpLoadingImage());
    dispatch(uiSetCloudImageMessage("Uploading image..."));
    const fileUrl = await fileUpload(file);
    if (fileUrl) {
      dispatch(adminEditArtist({images: [fileUrl]}))
      dispatch(uiFinishUpLoadingImage());
      dispatch(uiSetCloudImageMessage("Image uploaded successfully"));
    }
  };
};
