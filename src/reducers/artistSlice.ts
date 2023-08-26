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
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    addArtist: (state, action: PayloadAction<Artist>) => {
      return {
        ...action.payload,
      };
    },
    //  editArtist: (state, action: PayloadAction<{ item: keyof Artist; value: any }>) => {
    //    const { item, value } = action.payload;
    //    state[item] = value;
    //  },
    deleteArtist: (state, action: PayloadAction<Artist>) => {
      return action.payload;
    },
    resetArtist: (state, action: PayloadAction<Artist>) => {
      return action.payload;
    },
  },
});

export const {
  addArtist,
 // editArtist,
  deleteArtist,
  resetArtist,
} = artistSlice.actions;

export default artistSlice.reducer;
