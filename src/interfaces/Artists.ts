
export interface Artist {
    _id: number;
    artistName: string;
    activeSince: number;
    biography: string;
    songs: string[];
    profiles: { name: string; link: string, image: string }[];
    images: string[];
    ranking: number;
    rankingVisible: boolean,
    visible: boolean;
    youtubeVideo: string;
}