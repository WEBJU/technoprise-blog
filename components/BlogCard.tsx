import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../utils/blogData';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FunctionComponent<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link href={`/posts/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-40 object-cover mb-4 rounded-lg"
        />
      </Link>
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-xl text-gray-800 font-semibold mb-2">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600">{post.date}</p>
    </div>
  );
};

export default BlogCard;
