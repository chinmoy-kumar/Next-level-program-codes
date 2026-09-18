import { ArrowRight } from "lucide-react";
import { Outlet, useNavigate } from "react-router";

function MainLayout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/MovieList')
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* navbar */}
      <div className="navbar flex justify-between bg-base-100 shadow-lg shadow-gray-700">
        <div className="flex">
          <span>
            <img src="./src/assets/logo.png" alt="logo" className="w-10" />
          </span>
          <a className="text-xl font-bold flex items-center p-4">Movie Vault</a>
        </div>
        <div className="flex-none">
          <button className="btn w-[150px] bg-blue-500 hover:scale-105 transition-all delay-75" onClick={handleClick}>
            Movies <ArrowRight />
          </button>
        </div>
      </div>
      {/* body */}
      <div className="flex-1 flex justify-center">
        <Outlet />
      </div>
      {/* footer */}
      <div className="h-[50px] shadow-2xl shadow-gray-300">
        <div className="flex justify-around items-center h-full">
            <span className="text-xl">Movie Vault</span>
            <span className="">© 2026 MovieExplorer</span>
            <div className="flex space-x-5">
                <span><img src="./src/assets/fb-icon.png" alt="facebook icon" className="w-[30px] cursor-pointer"/></span>
                <span><img src="./src/assets/insta-icon.png" alt="instagram icon" className="w-[30px] cursor-pointer"/></span>
                <span><img src="./src/assets/gmail-icon.png" alt="instagram icon" className="w-[30px] cursor-pointer"/></span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
