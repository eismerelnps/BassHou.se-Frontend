import { login } from "@/reducers/authSlice";
import { uiFinishLoading, uiSetError, uiStartLoading } from "@/reducers/uiSlice";
import { types } from "@/types/types";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

//get the endpoint of the api bd
const url: string = process.env.NEXT_PUBLIC_DB_API_USERS_LOGIN || ""; // Valor predeterminado en caso de que sea undefined
 
export const startLoginWithUserAndPassword = (username: string, password: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, Action>) => {
      dispatch(uiStartLoading());
  
      try {
        const bodyData = new FormData();
        bodyData.append("username", username);
        bodyData.append("password", password);
  
        const headerData = new FormData();
        headerData.append("Content-Type", "application/json");
        headerData.append("Accept-Encoding", "gzip, deflate, br");
  

        const requestOptions: RequestInit = {
          method: "POST",
          body: bodyData,
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip, deflate, br"
          }
        };
        
        const response = await fetch(url, requestOptions);
  
        if (!response.ok) {
          throw new Error("Error en la solicitud de red");
        }
        const data = await response.json();
        dispatch(uiFinishLoading());
        if (data.user) {
          dispatch(login({user: data.user, token: data.token}));
        } else {
          dispatch(uiSetError(data.message));
        }
      } catch (error) {
        dispatch(uiFinishLoading());
        dispatch(uiSetError("Ha producido un error al iniciar sesión."));
      }
  
      // fetch(url, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     username: username,
      //     password: password,
      //   }),
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "*/*",
      //     "Accept-Encoding": "gzip, deflate, br",
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     dispatch(finishLoading());
      //     if (data.user) {
      //       return dispatch(login(data.user, data.token));
      //     }
      //     dispatch(setError(data.message));
      //   })
      //   .catch((error) => {
      //     dispatch(finishLoading());
      //     dispatch(setError("Se ha producido un error al iniciar sesión."));
      //   });
    };
  };