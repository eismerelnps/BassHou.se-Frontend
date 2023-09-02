import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  editArtist: boolean;
  addArtist: boolean;
  addRequest: boolean;
  deleteArtist: boolean;

  loading: boolean;
  showFeedback: boolean;
  msgError: string;
  uploadingImage: boolean;
  cloudImageMessage: string;

  seeRequests: boolean;
  editRequest: boolean;

  searchText: string;
  searchTextAdmin: string;

}

const initialState: UiState = {
  editArtist: false,
  addArtist: false,
  deleteArtist: false,

  seeRequests: false,
  addRequest: false,
  editRequest: false,

  loading: false,
  showFeedback: false,
  msgError: "",
  uploadingImage: false,
  cloudImageMessage: "",

  searchText: '',
  searchTextAdmin: '',

};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    //adds or removes the modal panel to the app
    uiSetError: (state, action: PayloadAction<string>) => {//(receives as parameters the message)
      state.msgError = action.payload;
      state.showFeedback = true;
    },
    uiRemoveError: (state) => {//removes the modal panel from the app
      state.msgError = "";
      state.showFeedback = false;
    },

    // adds or removes the backdrop to avoid user do any action during fetching
    uiStartLoading: (state) => {
      state.loading = true;
    },
    uiFinishLoading: (state) => {
      state.loading = false;
    },

    //adds or removes the feedback to app when a artist's image us uploading to cloud
    uiStartUpLoadingImage: (state) => {
      state.uploadingImage = true;
    },
    uiFinishUpLoadingImage: (state) => {
      state.uploadingImage = false;
    },
    //adds or removes the feedback to app when a artist's image is uploaded to cloud
    uiSetCloudImageMessage: (state, action: PayloadAction<string>) => {
      state.cloudImageMessage = action.payload;
    },
    uiRemoveCloudImageMessage: (state) => {
      state.cloudImageMessage = "";
    },

    //enables or disable the modal with filled form for editing and artist info and update it to db
    uiEditArtist: (state, action: PayloadAction<boolean>) => {
      state.editArtist = action.payload;
    },
    //enables or disable the modal with a empty form for adding a new artist to db
    uiAddArtist: (state, action: PayloadAction<boolean>) => {
      state.addArtist = action.payload;
    },
    //handle a modal to confirm that the artist will be removed from the db
    uiDeleteArtist: (state, action: PayloadAction<boolean>) => {
      state.deleteArtist = action.payload;
    },

    //enables or disable the modal with a empty form for adding a new artist request to administration
    uiAddRequest: (state, action: PayloadAction<boolean>) => {
      state.addRequest = action.payload;
    },
    //enambles the form to edit a request
    uiEditRequests: (state, action: PayloadAction<boolean>) => {
      state.editRequest = action.payload;
    },
    //edits the seeRequests property on context to display the requests or the artists on admin panel
    uiSeeRequests: (state, action: PayloadAction<boolean>) => {
      state.seeRequests = action.payload;
    },

    //Edits searchtext property on context to  handle the search on the main page
    uiSetSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    //Edits the searchText property on context to handle the search on the admin page
    uiSetSearchTextAdmin: (state, action: PayloadAction<string>) => {
      state.searchTextAdmin = action.payload;
    },
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

  //edits the seeRequests properti on context to display the requests or the artists on admin panel
  uiSeeRequests,

  //enables or disable the modal with filled form for editing and artist info and update it to db
  uiEditArtist,
  //enables or disable the modal with a empty form for adding a new artist to db
  uiAddArtist,
  //enables or disable the modal with a empty form for adding a new artist request to administration
  uiAddRequest,
  //enambles the form to edit a request
  uiEditRequests,
  //handle a modal to confirm that the artist will be removed from the db
  uiDeleteArtist,

  uiSetSearchText,
  uiSetSearchTextAdmin,
} = uiSlice.actions;

export default uiSlice.reducer;
