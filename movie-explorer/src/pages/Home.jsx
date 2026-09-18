const Home = () => {
  return (
    <div className="flex-1 flex">
      {/* hero area */}
      <div className=" flex flex-1 flex-col justify-center items-center bg-linear-to-t from-sky-500 to-indigo-500">
        <div className="flex flex-col justify-center items-center space-y-20 glass p-10 rounded-2xl">
          <h1 className="text-6xl font-bold">Discover Movies</h1>
          <p className="text-2xl text-center">
            Explore and discover your favorite movies <br /> from around the
            world.{" "}
          </p>
          <button
            className="btn  bg-blue-800 w-[50%] border-none text-2xl p-9 hover:scale-105 transition-all delay-75"
            onClick={() => {}}
          >
            Explore now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
