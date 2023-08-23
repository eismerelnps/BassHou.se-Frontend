import { types } from "../types/types";

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
interface Action {
    type: string;
    payload: any;
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


export const productReducer = (state: ArtistState = initialState, action: Action) => {
    switch (action.type) {
        case types.addArtist:
            return {
                ...action.payload,
            };
        case types.editArtist:
            return {
                ...state,
                [action.payload.item]: action.payload.value,
            };
        case types.deleteArtist:
            return {
                ...action.payload,
            };
        case types.resetArtist:
            return {
                ...action.payload,
            };

        default:
            return state;
    }
};
