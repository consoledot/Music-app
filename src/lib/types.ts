export interface Charts {
  tracks: { data: Track[] };
  albums: { data: Album[] };
  playlists: { data: Playlist[] };
  podcasts: { data: Podcast[] };
}

export interface Track {
  id: number;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  preview: string;
  position: number;
  artist: Artist;
  album: Album;
}

export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  record_type: string;
  position: number;
  explicit_lyrics: boolean;
  artist: Artist;
}

export interface Playlist {
  id: number;
  title: string;
  public: boolean;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  position: number;
  user: User;
  tracks: { data: Track[] };
  nb_tracks: number;
  duration: number;
}

export interface User {
  id: number;
  name: string;
}

export interface Podcast {
  id: number;
  title: string;
  description: string;
  available: boolean;
  fans: number;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  position: number;
}
