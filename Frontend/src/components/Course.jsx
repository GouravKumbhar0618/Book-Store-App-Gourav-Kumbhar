import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>

          <p className="mt-6 text-center max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
            Discover a world where{" "}
            <span className="font-medium text-black">
              knowledge meets imagination
            </span>
            . Our BookStore App is your one-stop destination for expertly
            curated books and enriching courses — whether you're a curious
            learner, an enthusiastic reader, or a passionate explorer of new
            skills.
          </p>

          <ul className="mt-4 list-disc text-left text-gray-700 max-w-2xl mx-auto pl-5 space-y-1">
            <li>
              ✨ Access both free and paid content tailored for learners of all
              ages.
            </li>
            <li>
              ✨ Enjoy a seamless, engaging, and user-friendly browsing
              experience.
            </li>
          </ul>

          <p className="mt-6 text-center max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
            Every page you turn here opens doors to new possibilities. So dive
            in, learn, grow, and be inspired — because your next great read or
            course is just a click away!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
