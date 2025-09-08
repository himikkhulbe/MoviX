import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-7">
        <Link to="/" className="text-3xl text-white font-bold">
          <i className="text-[#6556CD] text-4xl ri-movie-ai-fill mr-3"></i>
          <span>MoviX</span>
        </Link>
        <nav className="flex flex-col text-lg text-zinc-400 gap-3">
          <h1 className="text-lg font-semibold text-white mt-10 mb-2">
            New Feeds
          </h1>
          <Link to="/trending" className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-500 ">
            <i className="mr-2 ri-fire-fill"></i>
            Trending
          </Link>
          <Link to="/popular" className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-500 ">
            <i className="mr-2 ri-bard-fill"></i>
            Popular
          </Link>
          <Link to="/movies" className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-500 ">
            <i className="mr-2 ri-movie-2-fill"></i>
            Movies
          </Link>
          <Link to="/tvshows" className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-500 ">
            <i className="mr-2 ri-tv-fill"></i>
            Shows
          </Link>
          <Link to="/people" className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-500 ">
            <i className="mr-2 ri-team-fill"></i>
            People
          </Link>
        </nav>
        <hr className="border-none h-[1px] bg-zinc-400 mt-5" />
        <nav className="flex flex-col text-lg text-zinc-400 gap-3">
          <h1 className="text-lg font-semibold text-white mt-10 mb-2">
            Website Info
          </h1>
          <Link to="/about" className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-500 ">
            <i className="mr-2 ri-information-fill"></i>
            About MoviX
          </Link>
          <Link to="/contactus" className="hover:bg-[#6556CD] p-4 hover:text-white rounded-lg duration-500 ">
            <i className="mr-2 ri-phone-fill"></i>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
