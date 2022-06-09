import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#FFFFF] h-full flex justify-center items-center flex-col">
      <div className="w-full px-5 sm:px-0 sm:w-[600px] h-full flex justify-center flex-col">
        <h2 className="text-lg text-[#fff] mb-2">
          I am a Frontend Web Developer.{" "}
        </h2>
        <h1 className="text-[#fff] text-4xl sm:text-6xl font-bold mb-4">
          Akash Rahman
        </h1>
        <p className="text-[#9E9E9E] mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          natus, est cupiditate sequi minima hic, facere enim odit, perspiciatis
          esse minus voluptatum reiciendis fuga inventore optio adipisci sed?
          Corporis, cum!
        </p>
        <div>
          <button className="btn btn-outline btn-info border-4 rounded-none mr-5 mb-5">
            <a href="./../../file/Minhazur__Rahman__Akash__Resume.pdf" download>
              Download Resume
            </a>
          </button>
          <Link to="/contact">
            <button className="btn btn-outline btn-info border-4 rounded-none">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
