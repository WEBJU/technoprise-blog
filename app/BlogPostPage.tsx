// pages/posts/[slug].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { BlogPost } from '../utils/blogData';

interface BlogPostPageProps {
  post: BlogPost;
}


const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }: BlogPostPageProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <div className="container mx-auto mt-8">
      <button onClick={handleGoBack} className="text-blue-600 mb-4">&larr; Go Back</button>
      <div>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600">{post.date}</p>
        <img src={post.image} alt={post.title} className="w-full h-auto mt-4 mb-4" />
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPostPage;
