import { Artist } from '@/interfaces/Artists';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Artist = {
  _id: 1,
  artistName: "",
  briefDescription: "",
  activeSince: 1000,
  biography: "",
  songs: [],
  profiles: [],
  images: [],
  ranking: 0,
  visible: true,
  youtubeVideo: "",
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    adminAddArtist: (state, action: PayloadAction<Artist>) => {
      return {
        ...action.payload,
      };
    },
    adminEditArtist: (state,  action: PayloadAction<Partial<Artist>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
   
    adminResetArtist: () => {
      return initialState;
    }
  },
});

export const {
  adminAddArtist,
  adminEditArtist,
  adminResetArtist
} = artistSlice.actions;

export default artistSlice.reducer;
