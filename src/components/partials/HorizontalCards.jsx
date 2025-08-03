import React from "react";
import Dropdown from "../partials/Dropdown";
import { Link } from "react-router-dom";
import noimage from "/noimage.png"
import noimageavailable from "/noimageavailable.jpg"

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full flex overflow-x-auto p-3">
      {data.length > 0 ? data.map((d, i) => {
        return (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[28vh]  bg-[#27272d] mr-5 rounded overflow-hidden mb-3 hover:scale-105 duration-200"
          >
            <img
              className="w-full object-cover max-h-[15vh]"
              src={d.backdrop_path ? `https://image.tmdb.org/t/p/original/${
                d.backdrop_path
              }`: noimage}
            />
            <div className="p-3 text-white max-h-[18vh] overflow-y-auto">
              <h1 className="text-xl font-bold mb-1">
                {(d.title || d.original_title || d.name || d.original_name).slice(0,45)}
              </h1>
              <p className="text-sm font-light">
                {d.overview.slice(0, 100)}...
                <span className="text-zinc-400 hover:text-zinc-500 duration-100">
                  more
                </span>
              </p>
            </div>
          </Link>
        );
      }): <h1 className="text-3xl text-white font-black text-center mt-5">Nothing to Show</h1>}
    </div>
  );
};

export default HorizontalCards;
