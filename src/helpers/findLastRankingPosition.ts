import { Artist } from "@/interfaces/Artists";

export function findLastRankingPosition(artists: Artist[]): number {
  console.log(artists.length)
    let lastPosition = artists.length + 1;
    return lastPosition;
  }
  
  