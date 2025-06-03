// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img src={item.image} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

// import React from "react";

// function Cards({ item }) {
//   return (
//     <div className="p-4">
//       <div className="w-full max-w-[300px] h-[450px] flex flex-col justify-between rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-slate-900 dark:text-white border dark:border-gray-700 transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
//         <figure className="h-[180px] overflow-hidden">
//           <img
//             src={item.image}
//             alt={item.name}
//             className="object-cover w-full h-full"
//           />
//         </figure>

//         <div className="p-4 flex flex-col justify-between flex-grow">
//           <h2 className="text-lg font-bold mb-2 flex items-center justify-between">
//             {item.name}
//             <span className="badge badge-secondary">{item.category}</span>
//           </h2>

//           <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow mb-4">
//             {item.title}
//           </p>

//           <div className="flex items-center justify-between">
//             <div className="badge badge-outline text-base">${item.price}</div>
//             <button className="px-4 py-1 border-2 border-pink-500 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition duration-200">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;

import React from "react";

function Cards({ item }) {
  return (
    <div className="p-4 w-full max-w-full sm:max-w-[300px]">
      <div className="h-[380px] flex flex-col justify-between rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-slate-900 dark:text-white border dark:border-gray-700 transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
        <figure className="h-[160px] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full"
          />
        </figure>

        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-lg font-bold mb-1 flex items-center justify-between">
            {item.name}
            <span className="badge badge-secondary">{item.category}</span>
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            {item.title}
          </p>

          <div className="flex items-center justify-between">
            <div className="badge badge-outline text-base">${item.price}</div>
            {/* <button className="px-4 py-1 border-2 border-pink-500 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition duration-200">
              Buy Now
            </button> */}

            <button
              onClick={() =>
                window.open("https://forms.gle/Zk2bPYLhUgvm7oZL7", "_blank")
              }
              className="px-4 py-1 border-2 border-pink-500 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Cards;
