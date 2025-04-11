import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IBlogEntry } from './CreateBlog';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<IBlogEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      const storedEntriesRaw = localStorage.getItem('blogEntries');
      if (storedEntriesRaw) {
        const allEntries: IBlogEntry[] = JSON.parse(storedEntriesRaw);
        const foundPost = allEntries.find(post => post.id === id);

        if (foundPost) {
          setBlogPost(foundPost);
        } else {
          setError('Blog post not found.');
        }
      } else {
        setError('No blog posts found in storage.');
      }
    } catch (err) {
      console.error("Error fetching or parsing blog post:", err);
      setError('Failed to load blog post.');
    } finally {
      setLoading(false);
    }
  }, [id]); 

  if (loading) {
    return <div className="text-center py-10 text-white">Loading blog post...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>Error: {error}</p>
        <Link to="/" className="text-blue-400 hover:underline">Go back home</Link>
      </div>
    );
  }

  if (!blogPost) {
    return <div className="text-center py-10 text-white">Blog post not found.</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <img
          src={blogPost.imageUrl}
          alt={`Image for ${blogPost.title}`}
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
            {blogPost.title}
          </h1>
          <p className="text-gray-300 text-lg whitespace-pre-wrap">
            {blogPost.content}
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;