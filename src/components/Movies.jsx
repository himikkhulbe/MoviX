import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Topnav from "../components/partials/Topnav";
import Dropdown from "../components/partials/Dropdown";
import Cards from "../components/partials/Cards";

const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "MoviX | Movies " + category.toUpperCase();

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovies((prev) => [...prev, ...data.results]);
        setPage(data.page + 1);
      } else {
        sethasMore(false);
      }
      
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const refreshHandler = () => {
    if (movies.length === 0) {
      getMovies();
    } else {
      setPage(1);
      setMovies([]);
      getMovies();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movies.length > 0 ? (
    <div
      id="scrollableDiv"
      className=" px-[3%] py-[1%] w-full h-screen overflow-hidden overflow-y-auto"
    >
      <div className="flex items-center">
        <h1 className="text-3xl text-zinc-200 font-semibold flex items-end gap-2">
          <i
            onClick={() => navigate(-1)}
            className="font-medium mr-5 hover:text-[#6556CD] ri-arrow-left-circle-line"
          ></i>
          Movies
          <span className="text-zinc-400 text-base font-thin pb-1">
            ({category.toUpperCase()})
          </span>
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["top_rated", "popular", "upcoming", "now_playing"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-5"></div>
      </div>

      <InfiniteScroll
        loader={
          <h1 className="text-zinc-500 text-lg text-center font-semibold">
            Loading...
          </h1>
        }
        dataLength={movies.length}
        next={getMovies}
        hasMore={hasMore}
        scrollableTarget="scrollableDiv"
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
