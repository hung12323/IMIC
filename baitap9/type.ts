export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  avatar: Avatar;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

export interface Avatar {
  gravatar: Gravatar;
  tmdb: Tmdb;
}

export interface Gravatar {
  hash: string;
}

export interface Tmdb {
  avatar_path: any;
}
export interface AppState {
  movie: MovieDetails | null;
  isLoading: boolean;
  error: string | null;
}
