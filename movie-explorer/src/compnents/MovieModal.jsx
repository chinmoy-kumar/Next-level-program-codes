import { Dot, X } from "lucide-react";

const MovieModal = ({ m, close }) => {
  console.log(m);
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 p-4">
        <div className="card bg-base-100 w-xl shadow-xl">
          <div className="flex justify-end p-2">
            <button
              className="btn btn-ghost btn-sm"
              type="button"
              onClick={close}
            >
              <X />
            </button>
          </div>
          <div className="card-body space-y-3">
            <div className="m-auto">
              <img src={m.image?.original} className="w-md h-[350px]" />
            </div>
            <h2 className="card-title">Title: {m.name}</h2>
            <div className="flex justify-around w-full text-lg">
              <span>⭐ {m.rating?.average}</span>
              <Dot size={36} color="#fff" />
              <span> 📅 {m.premiered}</span>
              <Dot size={36} color="#fff" />
              <span> 🌐 {m.language}</span>
            </div>
            <div>
              <p>Overview: </p>
              <p>{m.summary}</p>
            </div>
            <div>
              <button className="btn btn-info w-full" onClick={close}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
