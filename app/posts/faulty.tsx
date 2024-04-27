// pages/posts/[slug].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { findPostBySlug, BlogPost } from '../../utils/blogData';
import Link from 'next/link';
import { postcss } from 'tailwindcss';

const Posts: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post: BlogPost | undefined = slug
    ? findPostBySlug(slug as string)
    : undefined;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="mb-4">{post.content}</div>
      <Link href="/">
        <a className="text-blue-600">Back to Homepage</a>
      </Link>
    </div>
  );
};

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`

export default postcss;
