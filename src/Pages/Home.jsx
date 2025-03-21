import { useEffect, useState } from "react";

import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



function Home(props) {
  
 
  
  const [getproduct, setgetproduct] = useState([]);
 async function product() {
   let res = await fetch("https://dummyjson.com/products?limit=0");
   let data = await res.json();
   console.log(data.products);
   setgetproduct(data.products);
 }
 useEffect(()=>{
   
 product();
 },[])

let filterArr = getproduct.filter(
  (ele) =>
    ele.title.toLowerCase().includes(props.searchValue?.toLowerCase() || "") ||
    ele.category.toLowerCase().includes(props.searchValue?.toLowerCase() || "")
);





const handleAdd=(obj,i)=>{
  console.log(obj);
props.details(obj);

}

  return (
    <>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3 w-[95%] m-auto">
        {filterArr.map((ele, i) => (
          <div
            key={ele.id}
            className=" mt-6 shadow-lg  p-5  border border-white shadow-white text-white hover:bg-blue-950 hover:text-white "
          >
            <img src={ele.images[0]} alt={ele.title} className="" />
            <h1 className="text-[1.2rem]">{ele.title}</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-[1.2rem]">${ele.price}</h1>

              <IoCartOutline
                className="bg-gray-300 w-8 h-8 rounded-full
                 text-black p-1"
                onClick={() => handleAdd(ele, i)}
              />
            </div>
            <Link to={"/view"} state={{ele,getproduct}}>
              <button
                o
                className="bg-green-500 hover:bg-green-400 text-white w-full p-2 mt-3"
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
   
    </>
  );
}

export default Home;





























// import { useEffect, useState } from "react";

// import { IoCartOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";



// function Product(props) {
  
 
  
//   const [getproduct, setgetproduct] = useState([]);
//  async function product() {
//    let res = await fetch("https://dummyjson.com/products?limit=0");
//    let data = await res.json();
//    console.log(data.products);
//    setgetproduct(data.products);
//  }
//  useEffect(()=>{
   
//  product();
//  },[])

// let filterArr = getproduct.filter(
//   (ele) =>
//     ele.title.toLowerCase().includes(props.searchValue?.toLowerCase() || "") ||
//     ele.category.toLowerCase().includes(props.searchValue?.toLowerCase() || "")
// );





// const handleAdd=(obj,i)=>{
//   console.log(obj);
// props.details(obj);

// }

//   return (
//     <>
//       <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3 w-[95%] m-auto">
//         {filterArr.map((ele, i) => (
//           <div
//             key={ele.id}
//             className=" mt-6 shadow-lg  p-5  border border-white shadow-white text-white hover:bg-blue-950 hover:text-white "
//           >
//             <img src={ele.images[0]} alt={ele.title} className="" />
//             <h1 className="text-[1.2rem]">{ele.title}</h1>
//             <div className="flex justify-between items-center">
//               <h1 className="text-[1.2rem]">${ele.price}</h1>

//               <IoCartOutline
//                 className="bg-gray-300 w-8 h-8 rounded-full
//                  text-black p-1"
//                 onClick={() => handleAdd(ele, i)}
//               />
//             </div>
//             <Link to={"/view"} state={{ele,getproduct}}>
//               <button
//                 o
//                 className="bg-green-500 hover:bg-green-400 text-white w-full p-2 mt-3"
//               >
//                 View Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
   
//     </>
//   );
// }

// export default Product;
