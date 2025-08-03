import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removetv } from "../store/actions/tvActions";
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

const Tvdetails = () => {
  document.title = "MoviX | Show Details";
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.tv);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.12),rgba(0,0,0,0.7),rgba(0,0,0,0.4)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundColor: "#1F1E24",
      }}
      className={`w-screen min-h-[116vh] relative px-[10vh]`}
    >
      {/* Part 1 Navigation */}
      <nav className="h-[10vh] flex justify-between items-center gap-5 mt-5">
              <div>
              <Link
                onClick={() => navigate(-1)}
                className="font-medium -ml-16 mr-7 hover:text-[#6556CD] text-zinc-200 text-4xl ri-arrow-left-circle-line"
                ></Link>
              <Link to="/" className="text-3xl text-[#6556CD] font-bold">
                <i className="text-[#6556CD] text-4xl ri-movie-ai-fill mr-2"></i>
                <span>MoviX</span>
              </Link>
                </div>
                <div className="flex gap-10">
              <a target="_blank" href={info.detail.homepage}>
                <img src={website} className="w-11 hover:scale-110 duration-150" />
              </a>
              <a
                target="_blank"
                href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                >
                <img src={wikipedia} className="w-10 hover:scale-110 duration-150" />
              </a>
              <a
                target="_blank"
                href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
                >
                <img src={imdb} className="w-11 hover:scale-110 duration-150" />
              </a>
                </div>
            </nav>

      {/* Part 2 Poster & Details */}
      <div className="w-full flex gap-2 mt-5">
        <img
          className="shadow-[4px_9px_19px_1px_rgba(265,265,265,0.1)] h-[50vh]  object-top rounded"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-10 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-4xl text-white font-black items-end">
              {info.detail.title ||
                info.detail.original_title ||
                info.detail.name ||
                info.detail.original_name}
              <span className="text-zinc-100 font-semibold text-xl ml-2 mb-[2px]">
                ({info.detail.first_air_date.split("-")[0]})
              </span>
            </h1>
            <h3 className="text-xl text-zinc-300 mt-1">
              {info.detail.tagline}
            </h3>

            <div className="flex text-white items-center gap-5 font-normal text-lg">
              <div className="flex items-center text-xl font-bold text-white">
                <i className="text-[#fadc2d] ri-star-s-fill mr-[2px] text-3xl"></i>
                {info.detail.vote_average.toFixed(1)}
              </div>
              <span>{info.detail.first_air_date}</span>
              {info.detail.genres.map((g) => g.name).join(", ")}
              <span>{info.detail.number_of_seasons}{info.detail.number_of_seasons > 1 ? " Seasons" : " Season"} </span>
              <span>{info.detail.number_of_episodes} Episodes</span>
            </div>
            <h2 className="text-2xl font-semibold mt-3 mb-1">Overview</h2>
            <p className="font-light">{info.detail.overview}</p>
            <h2 className="text-2xl font-semibold mt-3 mb-1">Credits</h2>
            <p className="font-light">{info.credits.join(", ")}</p>
          </div>

          <div className="mb-3">
            <Link
              to={`${pathname}/trailer`}
              className="p-3 rounded bg-[#6556CD] hover:bg-[#5043a5] hover:text-white duration-200 text-zinc-200"
            >
              <i className="mr-2 text-lg ri-play-large-fill"></i>Watch Trailer
            </Link>
          </div>
        </div>
      </div>

      <hr className="mt-5 border-zinc-400" />

      {/* Part 3 Available on platforms */}
      <div className="mt-5 flex items-start gap-[20vh]">
        <div className="w-[80%] flex flex-col gap-5 mt-12">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex items-center gap-5 text-white">
              <h3 className="text-nowrap">OTT Platforms : </h3>
              {info.watchproviders.flatrate.slice(0, 2).map((w, i) => {
                return (
                  <img
                    key={i}
                    title={w.provider_name}
                    className="w-[4vh] h-[4vh] rounded-md object-cover"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  />
                );
              })}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex items-center gap-5 text-white">
              <h3 className="text-nowrap">Rent : </h3>
              {info.watchproviders.rent.slice(0, 2).map((w, i) => {
                return (
                  <img
                    key={i}
                    title={w.provider_name}
                    className="w-[4vh] h-[4vh] rounded-md object-cover"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  />
                );
              })}
            </div>
          )}

          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex items-center gap-5 text-white">
              <h3 className="text-nowrap">Buy : </h3>
              {info.watchproviders.buy.slice(0, 2).map((w, i) => {
                return (
                  <img
                    key={i}
                    title={w.provider_name}
                    className="w-[4vh] h-[4vh] rounded-md object-cover"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Part 4 Recommendations & similar stuff */}
        {info.recommendations.length > 0 ? (
          <div
            className={`overflow-x-auto flex flex-col ${
              !info.watchproviders?.flatrate && "ml-14"
            } items-start pl-5  ${!info.watchproviders && "ml-[calc(-33vh)]"}`}
          >
            {info.recommendations.length > 0 && (
              <h2
                className={`text-2xl text-white ${
                  info.watchproviders?.flatrate?.length > 1 && "-ml-3"
                } font-semibold mb-1`}
              >
                Recommendations
              </h2>
            )}
            {info.recommendations.length > 0 && (
              <HorizontalCards data={info.recommendations} />
            )}
            <Outlet />
          </div>
        ) : (
          <h1 className="text-3xl mr-[35%] text-white font-semibold text-nowrap text-center mt-10">
            No Recommendations Available
          </h1>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvdetails;
