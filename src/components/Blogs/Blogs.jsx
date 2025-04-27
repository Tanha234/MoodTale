import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles");
        const data = await response.json();
        setArticles(data);

        const allTags = new Set();
        data.forEach((article) => {
          article.tag_list.forEach((tag) => allTags.add(tag));
        });
        setTags([...allTags]);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedTags((prev) => [...prev, value]);
    } else {
      setSelectedTags((prev) => prev.filter((tag) => tag !== value));
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredArticles = articles.filter((article) => {
    const articleTags = article.tag_list.map((tag) => tag.toLowerCase());
    const matchesTags = selectedTags.length
      ? selectedTags.every((tag) => articleTags.includes(tag.toLowerCase()))
      : true;

    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (article.description && article.description.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesTags && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-500 text-gray-800 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-orange-500"></div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search blogs..."
              className="border rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-slate-500 text-white px-4 py-2 rounded-full hover:bg-slate-500">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-1 container mx-auto mt-8 px-4 gap-6">
        {/* Sidebar */}
        <aside className="w-1/4 hidden lg:block space-y-6 overflow-auto max-h-screen">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="space-y-2 text-gray-600">
              {tags.map((tag) => (
                <div key={tag} className="flex items-center">
                  <input
                    type="checkbox"
                    id={tag}
                    value={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={handleTagChange}
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor={tag} className="ml-2 capitalize">{tag}</label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                <img
                  src={post.cover_image || "https://via.placeholder.com/400x200"}
                  alt={post.title}
                  className="rounded-lg mb-4 object-cover h-40 w-full"
                />
                <h4 className="text-xl font-bold mb-2">{post.title}</h4>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <button
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="mt-auto bg-slate-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 text-center"
                >
                  Read More
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No articles found matching your filters.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Blogs;
