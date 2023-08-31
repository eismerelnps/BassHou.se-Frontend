import { Artist } from "@/interfaces/Artists";

export const getArtistsById = ( artists: Artist[], _id: any ) => {
    return artists.find( (artists) => artists._id === _id);
}