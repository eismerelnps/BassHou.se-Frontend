import { Artist } from '@/interfaces/Artists';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArtistState {
  _id: string;
  artistName: string;
  briefDescription: string;
  activeSince: number;
  biography: string;
  songs: string[]
  profiles: object[],
  images: string[]
  ranking: number
}

const initialState: Artist = {
  id: 1,
  artistName: "",
  briefDescription: "",
  activeSince: 1000,
  biography: "",
  songs: [],
  profiles: [],
  images: [],
  ranking: 0
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
    // editArtist: (state, action: PayloadAction<{ item: keyof ArtistState; value: any }>) => {
    //   const { item, value } = action.payload;
    //   state[item] = value;
    // },
    // deleteArtist: (state, action: PayloadAction<ArtistState>) => {
    //   return action.payload;
    // },
    // resetArtist: (state, action: PayloadAction<ArtistState>) => {
    //   return action.payload;
    // },
  },
});

export const {
  addArtist,
  editArtist,
  deleteArtist,
  resetArtist,
} = artistSlice.actions;

export default artistSlice.reducer;
