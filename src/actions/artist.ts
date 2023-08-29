import { uiFinishLoading, uiFinishUpLoadingImage, uiSetCloudImageMessage, uiSetError, uiStartLoading, uiStartUpLoadingImage } from "@/reducers/uiSlice";

import { Dispatch, AnyAction } from 'redux';

import { RootState, rootReducer } from "@/store/store";
import { fileUpload } from "@/helpers/fileUpload";
import { adminEditArtist } from "@/reducers/artistSlice";

rootReducer
//get the endpoint of the api bd
const url = process.env.NEXT_PUBLIC_DB_API_ARTISTS;


//To add a new artist to DB
export const startAddingNewProduct = () => {
    return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
      //const { token } = getState().auth;
      const artits = getState().artist;
  
      dispatch(uiStartLoading());
      console.log(artits)
    //   fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(product),
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "*/*",
    //       "Accept-Encoding": "gzip, deflate, br",
    //       Authorization: token,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       dispatch(finishLoading());
    //       dispatch(setError(data.message));
    //       //router.refresh();
    //     })
  
    //     .catch((error) => {
    //       dispatch(finishLoading());
    //       dispatch(
    //         setError(
    //           "Se ha producido un error al crear el producto. Por favor, inténtelo de nuevo."
    //         )
    //       );
    //     });
    };
  };



  //To delete a product from the database by its id
export const startDeletingArtist = () => {
  return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    //const { token } = getState().auth;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWQxZmJkMmFkMGM0Y2M0MWVlZGZkYSIsInVzZXJuYW1lIjoiRWlzbWVyIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE2OTMyNzQ4MjEsImV4cCI6MTY5Mzg3OTYyMX0.JY6hEfMz6_tPYMWLWNjNNAUWjz2IvxNzpswUMnrqyGY'
    const { _id } = getState().artist;

    //console.log( _id );

    dispatch(uiStartLoading());
    fetch(`${url}/${_id}`, {
      method: "DELETE",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Authorization: token,
      },
      //{headers},
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

// //accion para editar un producto en el contexto
// export const editArtist = (item, value) => ({
//   type: "[admin] EditProduct",
//   payload: { item, value },
// });


//action to upload a image tu a cloud service
export const startUploadingPhoto = (file: File) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(uiStartUpLoadingImage());
    dispatch(uiSetCloudImageMessage("Uploading image..."));
    const fileUrl = await fileUpload(file);
    if (fileUrl) {
      //dispatch(adminEditArtist({item: 'image', fileUrl: fileUrl}))
      dispatch(uiFinishUpLoadingImage());
      dispatch(uiSetCloudImageMessage("Image uploaded successfully"));
    }
  };
};
