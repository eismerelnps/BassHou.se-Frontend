import { Artist } from '@/interfaces/Artists';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Artist = {
  _id: 1,
  artistName: "",
  briefDescription: "",
  activeSince: 2023,
  biography: "",
  songs: [],
  profiles: [
    {name: 'Web Site', link: ''},
    {name: 'Facebook', link: ''}, 
    {name: 'Music', link: ''}, 
    {name: 'My Space', link: ''},
    {name: 'SoundCloud', link: ''},
    {name: 'YouTube', link: ''}, 
    {name: 'X', link: ''},   
  ],
  images: [],
  ranking: 100,
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
