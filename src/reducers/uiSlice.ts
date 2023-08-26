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
  uiSetError,
  uiRemoveError,
  uiStartLoading,
  uiFinishLoading,
  uiStartUpLoadingImage,
  uiFinishUpLoadingImage,
  uiSetCloudImageMessage,
  uiRemoveCloudImageMessage,
  uiSetSearchText,
  adminEditArtist,
  adminAddArtist,
  adminDeleteArtist,
} = uiSlice.actions;

export default uiSlice.reducer;
