import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadpeople, removepeople } from "../store/actions/peopleActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import imdb from "/imdb.png";
import wikipedia from "/wikipedia.png";
import website from "/website.png";
import HorizontalCards from "../components/partials/HorizontalCards";
import facebook from "/facebook.png";
import instagram from "/instagram.png";
import x from "/x.svg";


const Peopledetails = () => {
  document.title = "MoviX | People Details";
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.people);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(asyncLoadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);

  return info ? (
    <div className="px-[10vh] w-full min-h-[120vh] bg-[#1F1E24]">
      {/* Part 1 Navigation */}
      <nav className="h-[10vh] flex items-center gap-5 mt-5">
        <Link
                onClick={() => navigate(-1)}
                className="font-medium -ml-16 mr-2 hover:text-[#6556CD] text-zinc-200 text-4xl ri-arrow-left-circle-line"
                ></Link>
              <Link to="/" className="text-3xl text-[#6556CD] font-bold">
                <i className="text-[#6556CD] text-4xl ri-movie-ai-fill mr-2"></i>
                <span>MoviX</span>
              </Link>
      </nav>

      <div className="w-full flex gap-10 mt-4">
        {/* Part 2 Left poster & details */}
        <div className="w-[20%] ">
          <img
            className="shadow-[4px_9px_19px_1px_rgba(265,265,265,0.1)] h-[47vh]  object-top rounded"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />

          <hr className="mt-5 border-zinc-400" />

          {/* Social Media Links */}
          <div className="mt-5 flex justify-between items-center">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <img
                src={wikipedia}
                className="w-11 hover:scale-110 duration-150"
              />
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <img
                src={instagram}
                className="w-11 hover:scale-110 duration-150"
              />
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <img
                src={facebook}
                className="w-10 hover:scale-110 duration-150"
              />
            </a>
            <a
              target="_blank"
              href={`https://x.com/${info.externalid.twitter_id}`}
            >
              <img src={x} className="w-11 hover:scale-110 duration-150" />
            </a>
          </div>

          {/* Personal Information */}
          <h2 className="text-zinc-200 text-2xl my-5 font-semibold text-center">
            Personal Information
          </h2>

          <div className="flex flex-col gap-3">
            <div className="flex  justify-between ">
              <h3 className="text-zinc-200 text-lg font-medium">
                Known for :{" "}
              </h3>
              <p className="text-zinc-400 text-lg font-normal">
                {info.detail.known_for_department}
              </p>
            </div>
            <div className="flex  justify-between ">
              <h3 className="text-zinc-200 text-lg font-medium">Gender : </h3>
              <p className="text-zinc-400 text-lg font-normal">
                {info.detail.gender === 2 ? "Male" : "Female"}
              </p>
            </div>
            <div className="flex  justify-between ">
              <h3 className="text-zinc-200 text-lg font-medium">Birthday : </h3>
              <p className="text-zinc-400 text-lg font-normal">
                {info.detail.birthday}
              </p>
            </div>
            <div className="flex  justify-between ">
              <h3 className="text-zinc-200 text-lg font-medium">Deathday : </h3>
              <p className="text-zinc-400 text-lg font-normal">
                {info.detail.deathday ? info.detail.deathday : "Alive"}
              </p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-zinc-200 text-lg font-medium text-nowrap">
                Birth Place :{" "}
              </h3>
              <p className="text-zinc-400 text-lg font-normal text-right">
                {info.detail.place_of_birth}
              </p>
            </div>
          </div>
        </div>

        {/*Part 2 Right Details & Information  */}
        <div className="w-[80%] overflow-y-auto">
          <h1 className="text-white text-4xl font-black">
            {info.detail.name}
          </h1>
          <h2 className="text-zinc-200 text-2xl mt-5 font-semibold">
            Biography
          </h2>
          <p className="text-zinc-400 font-light mt-2 text-lg">{info.detail.biography.slice(0,1688)}</p>
          <h2 className="text-zinc-200 text-2xl mt-5 font-semibold">
            Known For
          </h2>
          <div className="mt-2">
          <HorizontalCards data={info.combinedCredits.cast} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Peopledetails;
