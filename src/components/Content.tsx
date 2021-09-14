import { ContentProps } from "../@types";

import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

export function Content({selectedGenre, movies}: ContentProps) {
  return (
    <div className="container">
        <Header title={selectedGenre.title} />

        <main>
          <div className="movies-list">
            {movies.map((movie) => (
              <MovieCard 
                key ={movie.imdbID} 
                title={movie.Title} 
                poster={movie.Poster}
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} 
              />
            ))}
          </div>
        </main>
      </div>
  );
}