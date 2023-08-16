import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full p-8 bg-slate-800	 rounded-sm ">
      <div className="max-w-xl m-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="h-full flex flex-col p-4">
          <div className="flex items-center mb-4">
            <div className="flex justify-center align-middle gap-3 text-white text-sm">
              <FaSearchLocation size={20} style={{ color: "white" }} />
              <p className="icon-text">123 Acne ST.</p>
            </div>
          </div>
          <div className="flex items-center  mb-4">
            <div className="flex justify-center align-middle gap-3 text-white text-sm">
              <FaPhone size={20} style={{ color: "white" }} />
              <p className="icon-text">1-23323-423-2332</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex justify-center align-middle gap-3 text-white text-sm">
              <FaMailBulk size={20} style={{ color: "white" }} />
              <p>jac21@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col p-4 m-auto">
          <h4 className="mb-2 text-white">About the company</h4>
          <p className="text-white">ndnfdjfdfjdjfndf</p>
          <div className="flex justify-center align-middle  mt-4">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
