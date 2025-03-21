import React, { useMemo, useState } from 'react'
import { IoBagOutline } from "react-icons/io5";


const Cart = ({cart,setCart}) => {
   

  let memo=useMemo(()=>{
   let  sum =0;
   for(let val of cart){
    sum= sum+val.price
   }
   return sum
  },[cart])



  const handleDelete = (obj, i) => { 
    let copyArr = [...cart];
    copyArr.splice(i,1);
    console.log(copyArr);
    localStorage.setItem("cart", JSON.stringify(copyArr));
    setCart(copyArr);

  };
  const handleinc = (obj, i) => {
    obj.price = obj.price + (obj.price / obj.quantity);
    obj.quantity = obj.quantity + 1;
    obj.stock = obj.stock - 1;
    console.log(obj);
    let copyArr = [...cart];
    copyArr[i] = obj;
    console.log(copyArr);
    setCart(copyArr);

  };
  const handledec = (obj, i) => {
    if (obj.quantity > 1) {
      obj.price = obj.price - (obj.price / obj.quantity);
      obj.quantity = obj.quantity - 1;
      obj.stock = obj.stock + 1;
      let copyArr = [...cart];
      copyArr[i] = obj;
      setCart(copyArr);
    }
    else{
      handleDelete(obj,i)
    }
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((ele, i) => {
            return (
              <div className="border  shadow-2xl p-5   shadow-white border-white text-white  m-auto flex justify-between px-11 ">
                <div className="flex justify-center items-center gap-3">
                  <img
                    src={ele.thumbnail}
                    alt=""
                    height={50}
                    width={100}
                    className="bg-gray-200"
                  />
                  <br />
                  <div className="flex flex-col p-2 gap-2 justify-center  w-[200px]">
                    <h1>{ele.title}</h1>
                    <p> stock:-{ele.stock}</p>
                    <button
                      className="bg-red-400 p-2  text-white rounded-lg w-full"
                      onClick={() => handleDelete(ele, i)}
                    >
                      remove
                    </button>
                  </div>
                </div>
                <div className=" flex flex-col justify-around p-5">
                  <h1 className="font-semibold text-[1.3rem]">
                    ${ele.price.toFixed(2)}
                  </h1>
                  <div className="flex gap-2">
                    <button
                      className="border border-white  px-2"
                      onClick={() => handleinc(ele, i)}
                    >
                      +
                    </button>
                    <p>{ele.quantity}</p>
                    <button
                      className="border border-white  px-2"
                      onClick={() => handledec(ele, i)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <h1 className="text-white text-center bg-black p-2">
            {" "}
            total =${memo.toFixed(2)}
          </h1>
        </div>
      ) : (
        <h1 className="text-white text-[2rem] flex justify-center items-center font-semibold  mt-[180px] border border-white w-max m-auto p-3 gap-2 bg-black shadow-lg shadow-white">
          <IoBagOutline /> Cart item empty
        </h1>
      )}
    </div>
  );
}

export default Cart
