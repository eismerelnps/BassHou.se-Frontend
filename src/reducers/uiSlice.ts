import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  editArtist: boolean;
  addArtist: boolean;
  deleteArtist: boolean;

  loading: boolean;
  showFeedback: boolean;
  msgError: string;
  uploadingImage: boolean;
  cloudImageMessage: string;
  searchText: string;

}

const initialState: UiState = {
  editArtist: false,
  addArtist: false,
  deleteArtist: false,

  loading: false,
  showFeedback: false,
  msgError: "",
  uploadingImage: false,
  cloudImageMessage: "",
  searchText: ""
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    uiSetError: (state, action: PayloadAction<string>) => {
      state.msgError = action.payload;
      state.showFeedback = true;
    },
    uiRemoveError: (state) => {
      state.msgError = "";
      state.showFeedback = false;
    },
    uiStartLoading: (state) => {
      state.loading = true;
    },
    uiFinishLoading: (state) => {
      state.loading = false;
    },
    uiStartUpLoadingImage: (state) => {
      state.uploadingImage = true;
    },
    uiFinishUpLoadingImage: (state) => {
      state.uploadingImage = false;
    },
    uiSetCloudImageMessage: (state, action: PayloadAction<string>) => {
      state.cloudImageMessage = action.payload;
    },
    uiRemoveCloudImageMessage: (state) => {
      state.cloudImageMessage = "";
    },
    uiSetSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    adminEditArtist: (state, action: PayloadAction<boolean>) => {
      state.editArtist = action.payload;
    },
    adminAddArtist: (state, action: PayloadAction<boolean>) => {
      state.addArtist = action.payload;
    },
    adminDeleteArtist: (state, action: PayloadAction<boolean>) => {
      state.deleteArtist = action.payload;
    }
  },
});

export const {
  //adds or removes the modal panel to the app 
  uiSetError,//(receives as parameters the message)
  uiRemoveError,//removes the modal panel from the app

  // adds or removes the backdrop to avoid user do any action during fetching
  uiStartLoading,
  uiFinishLoading,

  //adds or removes the feedback to app when a artist's image us uploading to cloud
  uiStartUpLoadingImage,
  uiFinishUpLoadingImage,

  //adds or removes the feedback to app when a artist's image is uploaded to cloud
  uiSetCloudImageMessage,
  uiRemoveCloudImageMessage,

  //edits the search field on context to handle a app search
  uiSetSearchText,

  //enables or disable the modal with filled form for editing and artist info and update it to db
  adminEditArtist,
  //enables or disable the modal with a empty form for adding a new artist to db
  adminAddArtist,
  //handle a modal to confirm that the artist will be removed from the db
  adminDeleteArtist,
} = uiSlice.actions;

export default uiSlice.reducer;
