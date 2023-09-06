/**
 * Embeds a YouTube video URL if it's not already in embed format.
 * Created by Eismer Lobaina.
 * @param url The YouTube video URL to embed.
 * @returns The embedded YouTube video URL.
 */
export function embedYouTubeURL(url: string): string {
    // Regular expression to check if the URL is a YouTube link
    //const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|v\/)|youtu\.be\/)([a-zA-Z0-9_-]+)$/;
    //const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)$/;
    const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)(?:\?.*)?$/;


    // Try to match the URL with the regular expression
    const match = url.match(youtubeRegex);

    if (match) {
        // The URL is a YouTube link, return the embed URL
        const videoId = match[1];

        return `https://www.youtube.com/embed/${videoId}`;
    } else {
        // The URL is not a YouTube link, return the original URL

        return url;
    }
}
