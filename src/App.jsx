import { useState } from "react";
  import { ToastContainer, toast,Bounce } from "react-toastify";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ViewProduct from "./Pages/ViewProduct";
import Cart from "./Pages/Cart";

function App() {
  const [get, setget] = useState();
  const [showCart, setshowCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  console.log(showCart);
  
  function data(ans) {
    console.log(ans);
    setget(ans)
  }

  function details(res){
console.log(res);  
     res.quantity=1;
     if (showCart.some((item) => item.id === res.id)) {
       toast.error("Already added to cart", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         transition: Bounce,
       });
     } else {
     let copyArr = [...showCart, res]; 
     localStorage.setItem("cart",JSON.stringify(copyArr))
     toast.success("👨‍💻 Adding to cart!", {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       transition: Bounce,
     });
      
     setshowCart(copyArr);
     }

  }
  return (
    <>
      <BrowserRouter>
        <div className="h-[80px]">
          <Navbar getData={data} cart={showCart} />
        </div>

        <Routes>
          <Route
            path="/"
            element={<Home searchValue={get} details={details} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/view" element={<ViewProduct details={details} />} />
          <Route
            path="/cart"
            element={<Cart cart={showCart} setCart={setshowCart} />}
          />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
