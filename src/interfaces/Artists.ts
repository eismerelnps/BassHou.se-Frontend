
export interface Artist {
    id: number;
    artistName: string;
    activeSince: Date;
    briefDescription: string;
    biography: string;
    songs: string[];
    profiles: { name: string; link: string }[];
    images: string[];
}