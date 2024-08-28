export interface IMovie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
  }
  

  export interface IMovieWithRating extends IMovie {
    Rating: string;
  }