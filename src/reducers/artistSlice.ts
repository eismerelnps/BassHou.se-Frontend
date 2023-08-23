import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArtistState {
  _id: string;
  artistName: string;
  briefDescription: string;
  activeSince: Date;
  biography: string;
  songs: string[]
  profiles: object[],
  images: string[]
}

const initialState: ArtistState = {
  _id: "",
  artistName: "",
  briefDescription: "",
  activeSince: new Date(),
  biography: "",
  songs: [],
  profiles: [],
  images: []
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    addArtist: (state, action: PayloadAction<ArtistState>) => {
      return action.payload;
    },
    editArtist: (state, action: PayloadAction<{ item: keyof ArtistState; value: any }>) => {
      const { item, value } = action.payload;
      state[item] = value;
    },
    deleteArtist: (state, action: PayloadAction<ArtistState>) => {
      return action.payload;
    },
    resetArtist: (state, action: PayloadAction<ArtistState>) => {
      return action.payload;
    },
  },
});

export const {
  addArtist,
  editArtist,
  deleteArtist,
  resetArtist,
} = artistSlice.actions;

export default artistSlice.reducer;
