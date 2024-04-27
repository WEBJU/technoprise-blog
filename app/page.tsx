'use client';

// pages/index.tsx
import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import NavBar from '../components/NavBar'; // Import the NavBar component
import blogData, { BlogPost } from '../utils/blogData';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  const blogPosts: BlogPost[] = blogData;
  const [searchResults, setSearchResults] = useState<string[]>([]); // Add this line

  const handleSearch = (searchTerm: string) => {
    // Filter blog posts by title based on the search term
    const filteredPosts = blogData.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); // Add this line to map the filtered posts to extract the slug values
    setSearchResults(filteredPosts);
  };

  return (
    <div>
      <NavBar search={handleSearch} />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">The Accessibility Blog</h1>
        <p className="text-xl mb-4">The voice of the excluded</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(searchResults.length > 0 ? searchResults : blogData).map((post) => (
            <BlogCard key={post?.slug} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
