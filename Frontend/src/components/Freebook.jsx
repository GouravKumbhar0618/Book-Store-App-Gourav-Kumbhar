import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // 🔥 enable autoplay
    autoplaySpeed: 1000, // 3 seconds delay between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Empower your future with 100% free access to expertly designed
            courses. Whether you're a beginner or looking to enhance your
            skills, our curated collection will help you learn, grow, and
            succeed — at no cost and at your own pace.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;

// import React, { useEffect, useState } from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import axios from "axios";

// import Cards from "./Cards";

// // Just imported list.json here (no changes to logic)
// import list from "../data/list.json";

// function Freebook() {
//   const [book, setBook] = useState([]);
//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");

//         const data = res.data.filter((data) => data.category === "Free");
//         console.log(data);
//         setBook(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getBook();
//   }, []);

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div>
//           <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
//             corporis nulla non suscipit, iure neque earum?
//           </p>
//         </div>

//         <div>
//           <Slider {...settings}>
//             {book.map((item) => (
//               <Cards item={item} key={item.id} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Freebook;

// import React, { useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import axios from "axios";

// import Cards from "./Cards";

// function Freebook() {
//   const [book, setBook] = useState([]);

//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");

//         // Filter books with category "Free"
//         const data = res.data.filter((item) => item.category === "Free");
//         console.log("Filtered Free books:", data);

//         setBook(data);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       }
//     };
//     getBook();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: book.length > 3, // infinite only if more than 3 slides
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: book.length > 3,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 0,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//       <div>
//         <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
//           corporis nulla non suscipit, iure neque earum?
//         </p>
//       </div>

//       <div>
//         {book.length > 0 ? (
//           <Slider {...settings}>
//             {book.map((item) => (
//               <Cards item={item} key={item.id} />
//             ))}
//           </Slider>
//         ) : (
//           <p>No free courses available at the moment.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Freebook;
