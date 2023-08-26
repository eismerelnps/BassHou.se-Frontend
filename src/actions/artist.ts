import { uiStartLoading } from "@/reducers/uiSlice";

//get the endpoint of the api bd
const url = process.env.NEXT_PUBLIC_DB_API_ARTISTS;


//To add a new artist to DB
export const startAddingNewProduct = () => {
    return async (dispatch, getState) => {
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
