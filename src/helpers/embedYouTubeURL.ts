/**
 * Embeds a YouTube video URL if it's not already in embed format.
 * Created by Eismer Lobaina.
 * @param url The YouTube video URL to embed.
 * @returns The embedded YouTube video URL.
 */
export function embedYouTubeURL(url: string): string {
    // Regular expression to check if the URL is a YouTube link
    const regex = /^https:\/\/youtu\.be\/([\w-]+)(\?si=[\w-]+)?$/;
  
    const match = url.match(regex);
  
    if (match) {
      const videoId = match[1];
      const queryString = match[2] ? match[2] : '';
      return `https://www.youtube.com/embed/${videoId}${queryString}`;
    } else if (url.startsWith('https://www.youtube.com/embed/')) {
      return url; // La URL ya está embebida, simplemente la devolvemos
    }
  
    return url; // La URL no es válida o no es de YouTube
  }
  