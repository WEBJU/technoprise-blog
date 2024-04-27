'use client';

import NavBar from '@/components/NavBar';
import { findPostBySlug } from '../../../utils/blogData';
import Link from 'next/link';
import React from 'react';
import Footer from '@/components/Footer';

const Post = ({ params }: { params: { slug: string } }) => {
  const post = findPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <NavBar /> {/* Rendering the NavBar component */}

      <div className="container mx-auto mt-16">
        <Link href="/" className="text-gray-900 text-bold flex items-center">
          <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 15L5.5 10l4.5-5v10z" clip-rule="evenodd" />
          </svg>
          Back to Blog Posts
        </Link>

        <h1 className="text-3xl font-bold mb-2 text-center mt-6">{post.title}</h1>
        <p className="text-gray-600 mb-4 text-center">{post.date} 5 min read</p>
        <img
          src={`/${post.image}`}
          alt={post.title}
          className="w-full h-64 object-cover mb-4"
        />

        <p className="text-gray-600 mb-4">{post.date}</p>
        <div className="mb-4 leading-10">{post.content}</div>

      </div>
      <Footer />
    </div>
  );
};

export default Post;
