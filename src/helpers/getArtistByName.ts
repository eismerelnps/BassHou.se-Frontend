// Artists interface
import { Artist } from '@/interfaces/Artists'



export const getArtistByName = (artists: Artist[], name = "") => {
  if (name === "") {
    return [];
  }
  name = name.toLowerCase();

  return artists.filter((artist) =>
    artist.artistName.toLowerCase().trim().includes(name)
  );

  console.log()
};
