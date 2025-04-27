import React from 'react'

function BlogOfTheDay() {
  return (
    <div><section className="py-10 bg-slate-500 text-gray-800">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold my-16 text-white ">🌟 Blog of the Day</h2>
  
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-1 rounded-xl">
        <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col md:flex-row items-center">
          {/* Blog Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS83tZ2vna6LDxQuEkva7lC07jAPBOzZOUEA&s"
            alt="Blog of the Day"
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
  
          {/* Blog Content */}
          <div className="mt-6 md:mt-0 md:ml-8 text-left">
            <h3 className="text-2xl font-bold mb-2">Mastering the Art of Blogging</h3>
            <p className="text-gray-600 mb-4">
              Discover key strategies and tips that can elevate your blogging game to the next level.
            </p>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default BlogOfTheDay