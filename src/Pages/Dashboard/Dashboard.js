import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile 2xl:container mx-auto">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <Outlet></Outlet>
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-[#17181B] text-base-content">
          <img src="https://i.ibb.co/f9rDDkM/me.jpg" alt="" />
          <li className="border-b py-1">
            <Link to="home">
              <i class="fa-solid fa-house"></i>home
            </Link>
          </li>
          <li className="border-b py-1">
            <Link to="about">
              <i class="fa-solid fa-user-tie"></i>About Me
            </Link>
          </li>
          <li className="border-b py-1">
            <Link to="resume">
              <i class="fa-solid fa-certificate"></i>Resume
            </Link>
          </li>
          <li className="border-b py-1">
            <Link to="portfolio">
              <i class="fa-solid fa-b py-1riefcase-medical"></i>Portfolio
            </Link>
          </li>
          <li className="border-b py-1">
            <Link to="blog">
              <i class="fa-solid fa-b py-1ook"></i>Blog
            </Link>
          </li>
          <li className="border-b py-1">
            <Link to="contact">
              <i class="fa-solid fa-address-card"></i>Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
