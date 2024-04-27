// pages/create-post.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { BlogPost } from '../utils/blogData';

const CreatePost: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState
        <{ title: string; date: string; image: string; content: string; slug: string }>({
            title: '',
            date: '',
            image: '',
            content: '',
            slug: '',
        });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Save the blog post data (formData) to the blogData.ts file or database
        // Example: blogData.push(formData);
        // Redirect to the homepage after successful submission
        router.push('/');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Create a New Blog Post</h1>
            <form onSubmit={handleSubmit} className="max-w-lg">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-semibold mb-1">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-semibold mb-1">Date</label>
                    <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-semibold mb-1">Image URL</label>
                    <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-semibold mb-1">Content</label>
                    <textarea id="content" name="content" value={formData.content} onChange={handleChange} rows={6} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="slug" className="block text-sm font-semibold mb-1">Slug</label>
                    <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save Changes</button>
            </form>
        </div>
    );
};

export default CreatePost;