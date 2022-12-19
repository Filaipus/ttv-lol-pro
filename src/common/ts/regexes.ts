export const TWITCH_URL_REGEX =
  /^https?:\/\/(?:www\.)?twitch\.tv\/(?:videos\/)?([A-Z0-9][A-Z0-9_]*)/i;
export const TWITCH_API_URL_REGEX = /\/(hls|vod)\/(.+)\.m3u8(?:\?(.*))?$/i;
export const TTV_LOL_API_URL_REGEX = /\/(?:playlist|vod)\/(.+)\.m3u8/i;
export const MANIFEST_PROXY_COUNTRY_REGEX = /USER-COUNTRY="([A-Z]+)"/i;
