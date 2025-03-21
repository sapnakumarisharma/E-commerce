import React, { useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

const Navbar = ({getData,cart}) => {
    console.log(getData);
    let ref=useRef()
    const [showSidebar, setshowSidebar] = useState(false);
 function handlesearch(e) {
  e.preventDefault();
  
  getData(ref.current.value);
   ref.current.value="";
 
 } 
    
  return (
    <div className="relative ">
      <nav className="bg-blue-950  text-white border border-white fixed  top-0 left-0 right-0  px-5 py-2 flex justify-between items-center">
        
          <h1 className="text-[1.3rem]">Ecom-Shop</h1>
        <form action="" onSubmit={handlesearch}>
          <div className="bg-white p-1 rounded-lg flex justify-center items-center">
            <input
              type="text"
              ref={ref}
              className="w-[100px] p-3 outline-none text-black"
              placeholder="Search"
            />
            <button className="bg-white p-4" type="seach">
              <CiSearch className="text-black" />
            </button>
          </div>
        </form>
        <div className=" md:flex hidden gap-5 justify-between items-center w-[500px]">
          <Link to={"/"}>
            <h1 className="text-[1.3rem]">Home</h1>
          </Link>
          <Link to={"/about"}>
            <h1 className="text-[1.3rem]">About</h1>
          </Link>
        
          <div className="flex justify-center items-center gap-7">
            <div className="flex ">
              <Link to={"/cart"}>
                <IoCartOutline size={30} />
              </Link>
              <sup className=" text-[1.2rem]">{cart.length}</sup>
            </div>

            <Link to={"/login"}>
              <button className="bg-blue-700 p-3 rounded-lg text-white  hover:bg-blue-900">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="bg-red-500 p-3 rounded-lg text-white  hover:bg-red-400">
                Signup
              </button>
            </Link>
          </div>
        </div>
        {showSidebar && (
          <div className=" border border-white md:hidden flex gap-10 items-center w-[150px] bg-blue-950 fixed top-[72px] left-0 flex-col h-screen ">
            <Link to={"/"}>
              <h1 className="text-[1.3rem]">Home</h1>
            </Link>
            <Link to={"/about"}>
              <h1 className="text-[1.3rem]">About</h1>
            </Link>
           
            <div className="flex justify-center flex-col items-center gap-7">
              <div className="flex ">
                <Link to={"/cart"}>
                  <IoCartOutline size={30} />
                </Link>
                <sup className=" text-[1.2rem]">{cart.length}</sup>
              </div>

              <Link to={"/login"}>
                <button className="bg-blue-900 p-3 rounded-lg text-white  hover:bg-blue-800">
                  Login
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="bg-red-500 p-3 rounded-lg text-white  hover:bg-red-400">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        )}
        <IoMdMenu
          size={30}
          className="md:hidden block"
          onClick={() => setshowSidebar(!showSidebar)}
        />
      </nav>
    </div>
  );
}

export default Navbar
