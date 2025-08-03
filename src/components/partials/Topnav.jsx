import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.png"

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-[95%] h-[8vh] relative z-[9] flex justify-start items-center ml-[11%]">
      <i className="text-2xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[60%] mx-5 p-2 text-base outline-none border-none bg-[#25242a] rounded-lg text-white"
        type="text"
        placeholder="Search for movies, tv shows, people..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-3xl text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="w-[60%] max-h-[50vh] absolute bg-[#3c3079] bg-opacity-95 top-[80%] rounded overflow-auto ml-[46px]">
        {searches.map((s, i) => {
          return (
            <Link
            to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="p-3 w-full text-zinc-300 hover:text-black hover:bg-zinc-400 duration-300 font-medium flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img className="w-[20vh] h-[12vh] object-cover mr-5 rounded shadow-lg" src= {s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage} alt="" />
              <span>{s.title || s.original_title || s.name || s.original_name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Topnav;
