import React from 'react';
import { FaBars, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl gap-4">
        <FaBars className="text-white cursor-pointer" onClick={() => setSidebarToggle(!sidebarToggle)} />
        <span className="text-white font-semibold">Andrew's Transactions</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input type="text" className="w-full px-4 py-1 pl-10 rounded shadow outline-none" placeholder="Search..." />
        </div>
        <div className="text-white">
          <FaBell className="w-6 h-6" />
        </div>
        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-1" />
            <div className="hidden group-focus:block text-black absolute bg-white rounded-lg shadow-md top-full right-0 z-10">
              <ul>
                <li className="px-4 py-2  hover:bg-gray-200">
                  <a href="#">Profile</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#">Settings</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="#">Log Out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
