import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vedio from "../assets/pix.mp4";

function Video() {
  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={vedio} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 bg-opacity-50 bg-black p-6 md:p-10 lg:p-16">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-center">
          Galaxy Travel
        </h1>
        <p className="text-white text-sm md:text-base lg:text-lg text-center mb-6 md:mb-8 lg:mb-10">
          Space travel, the ultimate frontier of human exploration, has
          captivated our imagination for decades. With advancements in
          technology, humans have ventured beyond our planet's atmosphere to
          explore the mysteries of the cosmos. From the pioneering days of the
          Apollo missions to the International Space Station's continuous
          presence in orbit, we've gained valuable insights into the challenges
          and wonders of space.
        </p>
        <div className="flex justify-center gap-3">
          <Link to="/Help">
            <motion.div
              whileHover="hover"
              className="hover:text-slate-700 bg-gray-500 text-white font-extrabold text-sm md:text-lg lg:text-xl py-2 px-4 rounded-lg transform hover:scale-110 transition duration-300"
            >
              Help
            </motion.div>
          </Link>
          <Link to="/launch">
            <motion.div
              whileHover="hover"
              className="hover:text-slate-700 bg-gray-500 text-white font-extrabold text-sm md:text-lg lg:text-xl py-2 px-4 rounded-lg transform hover:scale-110 transition duration-300"
            >
              Launch
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
