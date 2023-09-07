/**
 * Embeds a YouTube video URL if it's not already in embed format.
 * Created by Eismer Lobaina.
 * @param url The YouTube video URL to embed.
 * @returns The embedded YouTube video URL.
 */
export function embedYouTubeURL(url: string): string | null {
    // Regular expression to check if the URL is a YouTube link
    //const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|v\/)|youtu\.be\/)([a-zA-Z0-9_-]+)$/;
    //const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)$/;
    const regex = /^https:\/\/youtu\.be\/([\w-]+)(\?si=[\w-]+)?$/;
  
    const match = url.match(regex);
    
    if (match) {
      const videoId = match[1];
      const queryString = match[2] ? match[2] : '';
      return `https://www.youtube.com/embed/${videoId}${queryString}`;
    }
    
    return null;
  }
  
