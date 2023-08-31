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
    { name: 'Web Site', link: '', image: "/public/website.png" },
    { name: 'Facebook', link: '', image: "/public/facebook.png" },
    { name: 'Music', link: '', image: "/public/music.png" },
    { name: 'My Space', link: '', image: "/public/myspace.png" },
    { name: 'SoundCloud', link: '', image: "/public/soundcloud.png" },
    { name: 'YouTube', link: '', image: "/public/youtube.png" },
    { name: 'X', link: '', image: "/public/twitter.png" },
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
    adminEditArtist: (state, action: PayloadAction<Partial<Artist>>) => {
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
