import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  loading: boolean;
  showFeedback: boolean;
  msgError: string;
  uploadingImage: boolean;
  cloudImageMessage: string;
  searchText: string;
}

const initialState: UiState = {
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
  uiSetSearchText
} = uiSlice.actions;

export default uiSlice.reducer;
