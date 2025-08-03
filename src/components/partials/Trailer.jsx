import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute top-0 left-0 z-[100] bg-[rgba(0,0,0,0.8)] w-screen h-screen flex justify-center items-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-[3%] right-[1%] font-medium mr-8 hover:text-[#6556CD] text-zinc-200 text-4xl ri-close-fill"
      ></Link>
      {ytvideo ? <ReactPlayer
        playing
        controls
        src={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        width="85%"
        height="80%"
      /> : <Notfound />}
      
    </div>
  ) 
};

export default Trailer;
