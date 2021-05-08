// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectURI = "https://spotify-clone-72386.web.app/";

const clientId = "7b494da15b4141b1a4ce3622364a652b";

const scopes = [
  "user-read-playback-position",
  "user-read-email",
  "user-library-modify",
  "playlist-modify-public",
  "ugc-image-upload",
  "user-follow-modify",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "playlist-modify-private",
  "user-follow-read",
  "user-read-playback-state",
  "user-read-currently-playing",
  "playlist-read-private",
  "playlist-read-collaborative",
];

export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginURL = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
