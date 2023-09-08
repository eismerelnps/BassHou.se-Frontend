
//to check youtube url
export function isValidYoutubeUrl(url: string): boolean {
  const regex = /^https:\/\/(www\.)?youtube\.com\/embed\/[\w-]+(\?si=[\w-]+)?|^https:\/\/youtu\.be\/[\w-]+(\?si=[\w-]+)?$/;  
  return regex.test(url);
}
//to check urls
export function isValidURL(url: string): boolean {
  const regex = /^(https?:\/\/)?(www\.)?[A-Za-z0-9_-]+\.[A-Za-z0-9-]+(\/[\w-./?%&=]*)?$/;
  return regex.test(url);

}
//to check facebook url
export function isValidFacebookUrl(url: string) {
  const regex = /^(https?:\/\/)?(www\.)?facebook\.com\/[\w-]+(\/[\w-]+)*\/?$/;
  return regex.test(url);
}
//to check SoundCloud url
export function isValidMySpacedUrl(url: string) {
  const regex = /^(https?:\/\/)?(www\.)?myspace\.com\/[\w-]+(\/[\w-]+)*\/?$/;
  return regex.test(url);
}
//to check SoundCloud url
export function isValidSoundCloudUrl(url: string) {
  const regex = /^(https?:\/\/)?(www\.)?soundcloud\.com\/[\w-]+(\/[\w-]+)*\/?$/;
  return regex.test(url);
}
//to check youtube profile url
export function isValidYoutubeProfile(url: string): boolean {
  const regex = /^(https?:\/\/)?(www\.)?youtube\.com\/[\w@-]+$/;  return regex.test(url);
}
//to check X url
export function isValidXUrl(url: string) {
  const regex = /^(https?:\/\/)?(www\.)?twitter\.com\/[\w-]+(\/[\w-]+)*\/?$/;
  console.log(regex.test(url))
  return regex.test(url);
}