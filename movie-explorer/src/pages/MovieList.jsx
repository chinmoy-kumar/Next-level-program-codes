import { useEffect, useState } from "react";
import { getMovies } from "../services/get-movies";
import { Dot, Search } from "lucide-react";
import SearchMovies from "../services/search-movies";
import MovieModal from "../compnents/MovieModal";

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieName, setMovieName] = useState("");
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  const submitHandeler = async (e) => {
    e.preventDefault();
    const value = movieName.trim() ;
    // console.log(value)
    if (!value)
    {
      setError("Movie not found!")
      return;
    }

    try {
      setLoading(true);
      const searchMovieList = await SearchMovies(value);
      // console.log(searchMovieList)
      setMovie(searchMovieList.map((item) => item.show));
      console.log(movie)
    } catch (error) {
      setError(error.message);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      try {
        const result = await getMovies();
        setMovie(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [movieName]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner w-10"></span>
        <span className="p-5 text-2xl font-bold">Loading</span>
      </div>
    );
  }

  return (
    <div>
      {/* Search Bar */}
      <form className="flex justify-center items-center text-center m-10 w-full" onSubmit={submitHandeler}>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search by Movie Title" value={movieName} onChange={(e) => {setMovieName(e.target.value)}} />
        </label>

        <div>
        <button className="flex btn" type="submit">
          <Search/>
        </button>
        </div>
      </form>

      {error && <p className="text-red-600 font-bold text-center mt-2">{error}</p>}

      {/* Movie grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {movie.map((m) => {
          return (
            <div className="card">
              <img src={m.image?.medium} />
              <div className="card-body space-y-3">
                <h2 className="card-title">{m.name}</h2>
                <div className="flex justify-around text-lg">
                  <span>⭐ {m.rating?.average}</span>
                  <Dot size={36} color="#fff" />
                  <span> 📅 {m.premiered}</span>
                </div>
                <div className="aura">
                  <button className="btn w-full  bg-blue-500 hover:scale-105 transition-all delay-75"
                    onClick={() => setSelectedMovie(m)}
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {selectedMovie && <MovieModal close = {() => setSelectedMovie(null)} m={selectedMovie}/>}
    </div>
  );
};

export default MovieList;
