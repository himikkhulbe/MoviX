import { Link } from "react-router-dom";

const Header = ({ data }) => {
  
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-start px-[5%] py-[3%]"
    >
      <h1 className="text-zinc-200 text-4xl font-black">
        {data.original_title || data.name || data.title || data.original_name}
      </h1>
      <p className="text-zinc-200 mt-5 w-[70%] text-lg font-light">
        {data.overview.slice(0, 200)}
        <Link to={`${data.media_type}/details/${data.id}`} className="text-blue-400 hover:text-blue-500 duration-100">...more</Link>
      </p>
      <p className="flex gap-10 text-zinc-200 mt-3 font-light">
        {data.release_date && <span><i className="text-yellow-400 ri-megaphone-fill mr-1"></i> {data.release_date}</span> }
        {data.media_type && <span><i className="text-yellow-400 ri-video-on-fill mr-2"></i>{data.media_type.toUpperCase()}</span>} 
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-3 rounded mt-5 bg-[#6556CD] hover:bg-[#5043a5] hover:text-white duration-200 text-zinc-200"><i className="mr-2 text-lg ri-play-large-fill"></i>Watch Trailer</Link>
    </div>
  );
};

export default Header;
