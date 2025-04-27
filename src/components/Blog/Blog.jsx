import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://dev.to/api/articles/${id}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="flex justify-center items-center h-screen ">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-500 text-gray-800 md:px-44 sm:px-0">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-orange-500 mb-4 inline-block">&larr; Back to Blogs</Link>

        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          {blog.cover_image && (
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded mb-6"
            />
          )}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.body_html }} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
