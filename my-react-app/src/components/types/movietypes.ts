export interface IMovie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
  }
  
  // Можно расширять интерфейсы, например:
  export interface IMovieWithRating extends IMovie {
    Rating: string;
  }