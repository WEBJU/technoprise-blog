'use client';
// components/NavBar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from './Reusable/Search';

interface NavBarProps {
  search: (searchTerm: any) => void; // Update the type of the search prop
}

const NavBar: React.FC<NavBarProps> = ({ search }) => {
  return (
    <nav className="bg-[#404287] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" passHref>
          <img src="/logo.jpeg" alt="Logo" className="h-8" /> 
          </Link>
        </div>
        <div className="flex items-center">
          <Link href={`/blogs`} passHref>
            <button className=" text-white px-3 hover:underline">Blogs</button>
          </Link>
          {/* <input
            type="text"
            className="bg-gray-100 text-gray-600 mr-4 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
            placeholder="Search Blog..."
            value={searchTerm}
            onChange={handleSearchChange}
          /> */}
          <SearchBar onSearch={search} />
          <Link href={`/create`} passHref>
            <button className="border p-2 rounded text-white bg hover:underline">
              Create Post Blog
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
