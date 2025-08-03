import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "../components/partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);
  const [duration, setDuration] = useState("day");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "MoviX | Trending " + category.toUpperCase();

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
      console.log(data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div id="scrollableDiv" className=" px-[3%] py-[1%] w-full h-screen overflow-hidden overflow-y-auto">
      <div className="flex items-center">
        <h1 className="text-3xl text-zinc-200 font-semibold flex items-end gap-2">
          <i
            onClick={() => navigate(-1)}
            className="font-medium mr-5 hover:text-[#6556CD] ri-arrow-left-circle-line"
          ></i>
          Trending
          <span className="text-zinc-400 text-base font-thin pb-1">
            {" "}
            ({category.toUpperCase()})
          </span>
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["tv", "movie", "all"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-5"></div>
        <Dropdown
          title="Duration"
          options={["week" , "day"]}
          func={(e) => setDuration(e.target.value)}
        />
      </div>

      <InfiniteScroll
        loader={
          <h1 className="text-zinc-500 text-lg text-center font-semibold">
            Loading...
          </h1>
        }
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        scrollableTarget="scrollableDiv"
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
