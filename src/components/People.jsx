import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Topnav from "../components/partials/Topnav";
import Dropdown from "../components/partials/Dropdown";
import Cards from "../components/partials/Cards";

const People = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "MoviX | People";

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prev) => [...prev, ...data.results]);
        setPage(data.page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) {
      getPeople();
    } else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
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
          People
        </h1>
        <Topnav />
      </div>

      <InfiniteScroll
        loader={
          <h1 className="text-zinc-500 text-lg text-center font-semibold">
            Loading...
          </h1>
        }
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        scrollableTarget="scrollableDiv"
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
