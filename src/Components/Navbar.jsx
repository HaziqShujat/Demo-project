import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import Pricing from "./Pricing";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import ContactUs from "./Contactus";
import Training from "./Training";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <div className="w-full bg-slate-700">
        <div className="max-w-full md:max-w-6xl mx-auto flex justify-between align-middle p-4 rounded-sm">
          <Link to="/">
            <h1 className="text-2xl font-bold text-cyan-100">GLX TRAVEL</h1>
          </Link>

          <div className="hidden md:flex justify-between align-middle gap-3 text-cyan-100">
            <NavLink
              to="/"
              activeClassName="text-red-700"
              className="hover:text-red-700 text-lg font-semibold transition duration-300"
            >
              Home
            </NavLink>

            <NavLink
              to="/Pricing"
              activeClassName="text-red-700"
              className="hover:text-red-700 text-lg font-semibold transition duration-300"
            >
              Pricing
            </NavLink>

            <NavLink
              to="/Training"
              activeClassName="text-red-700"
              className="hover:text-red-700 text-lg font-semibold transition duration-300"
            >
              Training
            </NavLink>

            <NavLink
              to="/contact"
              activeClassName="text-red-700"
              className="hover:text-red-700 text-lg font-semibold transition duration-300"
            >
              Contact
            </NavLink>
          </div>

          <div
            className="flex justify-center align-middle md:hidden"
            onClick={handleMobileMenuToggle}
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-cyan-100 cursor-pointer" size={20} />
            ) : (
              <FaBars className="text-cyan-100 cursor-pointer" size={20} />
            )}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <ul className="bg-slate-700 py-2 px-4">
              <li>
                <NavLink
                  to="/"
                  activeClassName="text-red-700"
                  className="block text-white hover:text-red-700 text-lg py-2"
                  onClick={handleMobileMenuToggle}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Pricing"
                  activeClassName="text-red-700"
                  className="block text-white hover:text-red-700 text-lg py-2"
                  onClick={handleMobileMenuToggle}
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Training"
                  activeClassName="text-red-700"
                  className="block text-white hover:text-red-700 text-lg py-2"
                  onClick={handleMobileMenuToggle}
                >
                  Training
                </NavLink>
              </li>

              <NavLink
                to="/contact"
                activeClassName="text-red-700"
                className="block text-white hover:text-red-700 text-lg py-2"
                onClick={handleMobileMenuToggle}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        )}
      </div>
      <Routes>
        <Route />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Training" element={<Training />} />
      </Routes>
    </div>
  );
}

export default Navbar;
