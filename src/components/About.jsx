import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full p-[6vh] flex gap-5 text-white">
      <i
        onClick={() => navigate(-1)}
        title="Go back"
        className="font-medium mr-5 text-4xl hover:text-[#6556CD] ri-arrow-left-circle-line cursor-pointer"
      ></i>
      <div>
        <h1 className="text-3xl font-bold">About MoviX</h1>
        <hr className="border-zinc-500 mt-5" />
        <div className="mt-5 text-xl font-light">
          <p className="text-lg leading-relaxed text-gray-300 mb-10">
            <span className="text-white font-semibold">MoviX</span> is a modern
            web platform built to help users explore, discover, and stay
            informed about movies and television shows with ease. Whether you're
            searching for the next big hit, a trending series, or a critically
            acclaimed classic, MoviX delivers a streamlined experience that puts
            the world of entertainment at your fingertips.
            <br />
            <br />
            Designed with simplicity and functionality in mind, MoviX offers a
            clean and intuitive interface that makes browsing effortless. It
            brings together everything a viewer needs—from basic overviews to
            deep insights—without the distractions of cluttered layouts or
            unnecessary complexity.
            <br />
            <br />
            MoviX is not just a browsing tool—it's a complete discovery
            experience that makes finding and choosing content enjoyable, fast,
            and informative.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">
            Key Features
          </h2>
          <ul className="space-y-4 text-gray-300 list-disc pl-6">
            <li>
              <span className="text-white font-medium">Smart Search:</span>{" "}
              Quickly search for movies and TV shows by title, genre, or release
              year.
            </li>
            <li>
              <span className="text-white font-medium">
                Streaming Availability:
              </span>{" "}
              Instantly check where content is available to watch online.
            </li>
            <li>
              <span className="text-white font-medium">
                Integrated Trailers:
              </span>{" "}
              Watch official trailers directly within the app for a quick
              preview.
            </li>
            <li>
              <span className="text-white font-medium">
                Personalized Recommendations:
              </span>{" "}
              Discover related movies and shows based on your browsing.
            </li>
            <li>
              <span className="text-white font-medium">
                Comprehensive Details:
              </span>{" "}
              Access full information including cast, synopsis, runtime,
              ratings, and more.
            </li>
            <li>
              <span className="text-white font-medium">
                User-Friendly Interface:
              </span>{" "}
              Built for clarity and speed, so you can find what you’re looking
              for without distractions.
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-300 mt-7">
            <span className="text-white font-semibold">MoviX</span> is crafted for movie lovers, binge-watchers, and anyone who
            wants a better way to explore what's out there. It simplifies the
            decision-making process and makes discovering new favorites easier
            than ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
