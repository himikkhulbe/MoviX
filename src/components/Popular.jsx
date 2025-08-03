import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Topnav from "../components/partials/Topnav";
import Dropdown from "../components/partials/Dropdown";
import Cards from "../components/partials/Cards";

const Popular = () => {

  const navigate = useNavigate();
  const [popular, setPopular] = useState([]);
  const [category, setCategory] = useState("movie");
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "MoviX | Popular " + category.toUpperCase();

  const getPopular = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );
      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setPage(data.page + 1);
      } else {
        sethasMore(false);
      }
      console.log(data);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div id="scrollableDiv" className=" px-[3%] py-[1%] w-full h-screen overflow-hidden overflow-y-auto">
      <div className="flex items-center">
        <h1 className="text-3xl text-zinc-200 font-semibold flex items-end gap-2">
          <i
            onClick={() => navigate(-1)}
            className="font-medium mr-5 hover:text-[#6556CD] ri-arrow-left-circle-line"
          ></i>
          Popular
          <span className="text-zinc-400 text-base font-thin pb-1">
            {" "}
            ({category.toUpperCase()})
          </span>
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["tv", "movie"]}
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
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        scrollableTarget="scrollableDiv"
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
