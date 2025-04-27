import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BloggerFeature = () => {
  const bloggers = [
    {
      name: "Sarah Johnson",
      intro:
        "Sarah is a renowned mindfulness and healing blogger, known for her insightful articles on self-care and mental clarity.",
      reason: "Sarah's blog has helped thousands of people improve their emotional well-being through mindfulness .",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "David Kim",
      intro:
        "David Kim is a motivational speaker and blogger who focuses on personal growth, mindset, and goal-setting.",
      reason: "David's blog has inspired millions to take charge of their personal development and achieve their goals.",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Emily Williams",
      intro:
        "Emily is a mental health advocate who writes regularly about coping with stress and building resilience in everyday life.",
      reason: "Emily's honest and empathetic approach to mental health has earned her a loyal following .",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "John Smith",
      intro:
        "John is a passionate writer who focuses on productivity and success habits for young professionals.",
      reason: "John's strategies for success in work and life have made his blog one of the most read in the personal growth niche.",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Show 3 bloggers at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 bloggers on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 blogger on small screens
        },
      },
    ],
  };

  return (
    <section className="bg-slate-500 py-20 md:px-44 sm:px-0 ">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        ✍️ Featured Bloggers
      </h2>
      <p className="text-center text-gray-200 mb-12">
        Meet some of the most famous bloggers in the self-improvement and mindfulness space.
      </p>

      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {bloggers.map((blogger, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col items-center text-center">
                <img
                  src={blogger.image}
                  alt={blogger.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-200 shadow"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{blogger.name}</h3>
                <p className="text-gray-700 italic mb-4">{blogger.intro}</p>
                <p className="text-gray-600 mb-4">{blogger.reason}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BloggerFeature;
