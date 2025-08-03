import { Link } from "react-router-dom";
import noimageavailable from "/noimageavailable.jpg";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap gap-10 mt-8 px-[3.9%]">
      {data.map((c, i) => {
        return (
          <Link
            to={`/${c.media_type || title}/details/${c.id}`}
            key={i}
            className="relative w-[15vw] hover:scale-105 duration-200"
          >
            <img
              className="shadow-[4px_9px_19px_1px_rgba(265,265,265,0.1)] hover:shadow-[6px_11px_15px_3px_rgba(265,265,265,0.3)] h-[40vh]  object-top rounded"
              src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path || c.profile_path
              }` : noimageavailable}
              alt=""
            />
            <h1 className="text-xl text-zinc-200 font-semibold mt-3 ">
              {c.title || c.original_title || c.name || c.original_name}
            </h1>
            {c.vote_average && (
              <div className="w-[5.9vh] h-[5.9vh] bg-[#6556CD] rounded-full flex justify-center items-center text-base font-semibold absolute bottom-[92%] right-[-13%] text-white">
                <i className="text-[#fae158] ri-star-s-fill mr-[2px]"></i>
                {c.vote_average.toFixed(1)}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
