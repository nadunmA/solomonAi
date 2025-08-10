import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import newsImg from "../assets/newsImg.webp";
import pNews from "../assets/pNews.webp";
import Dayanamic from "../assets/dyanamic.png";
import copilott from "../assets/copilot.png";
import newp from "../assets/addp.png";
import random from "../assets/random.png";
import tNew from "../assets/tryNew.png";

const News = () => {
  const SixthPromptPage = useNavigate();

  const newsItems = [
    {
      id: 2106,
      image: tNew,
      title: "new prompts added",
      date: "2025-08-11",
      description: "Try new prompts now",
    },
    {
      id: 2105,
      image: random,
      title: "Try Random prompts",
      date: "2025-07-25",
      description: "Now Try Random prompts",
    },
    {
      id: 2104,
      image: newp,
      title: "Adding new prompts",
      date: "2025-07-25",
      description: "explore new prompts",
    },
    {
      id: 2103,
      image: copilott,
      title: "Click Copilot Image",
      date: "2025-07-20",
      description: "Click Copilot and generate images easily",
    },
    {
      id: 2102,
      image: Dayanamic,
      title: "Quick navigation!",
      date: "2025-07-20",
      description: "Quick navigate new prompts",
    },
    {
      id: 2101,
      image: pNews,
      title: "Images now load faster.",
      date: "2025-07-17",
      description: "Increased performance and faster image loading.",
    },
    {
      id: 2000,
      image: newsImg,
      title: "New AI Prompt Collection Released!",
      date: "2025-07-13",
      description:
        "We just added 100+ new prompt templates to our AI prompt site. Check them out now!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-800 text-white p-6 pt-38">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {newsItems.map((news) => (
          <div
            key={news.id}
            className="backdrop-blur-xl bg-white/5 p-6 rounded-2xl shadow-lg"
          >
            <img
              src={news.image}
              alt={news.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">{news.title}</h2>
            <p className="text-gray-400 text-sm mb-2">{news.date}</p>
            <p className="mb-4">{news.description}</p>
            <button
              className="bg-gradient-to-r from-purple-700 to-blue-600 text-white px-4 py-2 rounded-full"
              onClick={() => SixthPromptPage("/sixthpromptpage")}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <Link to="/">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
          {/* Back Button */}
          <button
            className="bg-blue-600 hover:bg-black text-white font-bold py-2 px-6 rounded-full w-[150px] transition duration-600"
            onClick={() => PromptPage("/prompt")}
          >
            ← Back
          </button>
        </div>
      </Link>
    </div>
  );
};

export default News;
