
export interface Artist {
    _id: number;
    artistName: string;
    activeSince: number;
    briefDescription: string;
    biography: string;
    songs: string[];
    profiles: { name: string; link: string }[];
    images: string[];
    ranking: number;
    visible: boolean;
    youtubeVideo: string;
}