import { types } from "@/types/types";



interface UiState {
    loading: boolean;
    showFeedback: boolean;
    msgError: string;
    uploadingImage: boolean;
    cloudImageMessage: string;
}
interface Action {
    type: string;
    payload: any;
}


const initialState: UiState = {
    loading: false,
    showFeedback: false,
    msgError: "",
    uploadingImage: false,
    cloudImageMessage: "",
};

export const uiReducer = (state: UiState = initialState, action: Action) => {
    switch (action.type) {
  
    // add/remove feedback text to app
    case types.uiSetError:
        return {
          ...state,
          msgError: action.payload,
          showFeedback: true,
        };
      case types.uiRemoveError:
        return {
          ...state,
          msgError: null,
          showFeedback: false,
        };
  
  
    // show/hide the backdrop component when app starts uploading an artist to DB
    case types.uiStartLoading:
        return {
          ...state,
          loading: true,
        };
      case types.uiFinishLoading:
        return {
          ...state,
          loading: false,
        };
  
  
    // enable/disable feedback when there is an artist's imaga uploadig to Cloud
    case types.uiStartUpLoadingImage:
        return {
          ...state,
          uploadingImage: true,
        };
      case types.uiFinishUpLoadingImage:
        return {
          ...state,
          uploadingImage: false,
        };
  
  
    // add/remove feedback text when there is an artist's imaga uploadig to Cloud
    case types.uiSetCloudImageMessage:
        return {
          ...state,
          cloudImageMessage: action.payload,
        };
      case types.uiRemoveCloudImageMessage:
        return {
          ...state,
          cloudImageMessage: null,
        };
      default:
        return state;
    }
  };