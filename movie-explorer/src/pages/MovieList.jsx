import { useEffect, useState } from "react";
import { getMovies } from "../services/get-movies";
import { Dot } from "lucide-react";

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner w-10"></span>
        <span className="p-5 text-2xl font-bold">Loading</span>
      </div>
    );
  }

  return (
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
                <button className="btn w-full  bg-blue-500 hover:scale-105 transition-all delay-75">
                  See Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
