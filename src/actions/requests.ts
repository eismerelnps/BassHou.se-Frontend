import { uiFinishLoading, uiSetError, uiStartLoading } from "@/reducers/uiSlice";

import { Dispatch, AnyAction } from 'redux';

import { AppDispatch, RootState } from "@/store/store";

const token = process.env.NEXT_PUBLIC_TOKEN || '';
const urlRequests = process.env.NEXT_PUBLIC_DB_API_REQUESTS || '';
const urlArtits = process.env.NEXT_PUBLIC_DB_API_ARTISTS || '';



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
type DispatchFunc = () => AppDispatch



//To add a new request to the database
export const startAddingNewRequest = () => {
  return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    //const { token } = getState().auth;

    const artist = getState().artist;



    dispatch(uiStartLoading());
    fetch(urlRequests, {
      method: "POST",
      body: JSON.stringify(artist),
      headers
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        dispatch(uiFinishLoading());
        dispatch(uiSetError(data.message));
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


// in administration to accep a request
export const startAcceptingRequestAndDelete = () => {
  return async (dispatch: any, getState: () => RootState) => {
    //const { token } = getState().auth;
    const artist = getState().artist;



    dispatch(uiStartLoading());
    fetch(urlArtits, {
      method: "POST",
      body: JSON.stringify(artist),
      headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        dispatch(uiFinishLoading());
        dispatch(uiSetError(data.message));
        dispatch(startDeletingRequest());

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
}



//To delete a request from the database by its id
export const startDeletingRequest = () => {

  return async (
    dispatch: Dispatch<AnyAction>,
    getState: () => RootState): Promise<any> => {
    //const { token } = getState().auth;
    const { _id } = getState().artist;

   
    dispatch(uiStartLoading());
    fetch(`${urlRequests}/${_id}`, {
      method: "DELETE",
      body: JSON.stringify({}),
      headers
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        dispatch(uiFinishLoading());
        dispatch(uiSetError(data.message));
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