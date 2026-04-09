import React from "react";
import bannerImg from '../../../assets/hero_img.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-2xl mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-5">
          <h1 className="text-6xl font-bold space-y-3">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className={"btn bg-green-600 text-white font-bold"}>
            Listed Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
