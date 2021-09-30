export interface Movie {
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    poster_path: string;
    video: boolean;
    vote_average: number;
    title: string;
    vote_count: number;
    overview: string;
    release_date: string;
    id: number;
    adult: boolean;
    popularity: number;
    media_type: string;
  }

  export interface Movies {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
