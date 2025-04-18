import React from "react";

const Cart = (props) => {
  console.log(props.cartItem);

  let sum = 0;
  let discount = 0;
  props.cartItem.forEach((item, i) => {
    discount = discount + (item.discountPercentage / 100) * item.price;
    sum = sum + item.price;
  });
  console.log(discount);
  console.log(sum);
  let tax = (sum * 2) / 100;
  let shipping = (sum * 1) / 100;

  let finalSum = sum + tax + shipping - discount;
  console.log(finalSum);

  const handleIncrement = (obj, i) => {
    console.log(i);
    // console.log(obj)
    obj.price = obj.price + obj.price / obj.quantity;
    obj.quantity = obj.quantity + 1;
    console.log(obj);
    let copyArr = [...props.cartItem];
    copyArr[i] = obj;
    console.log(copyArr);
    props.setcartItem(copyArr);
  };

  const handleRemove = (obj, i) => {
    console.log(obj);
    console.log(i);
    let copyArr = [...props.cartItem];
    copyArr.splice(i, 1);
    props.setcartItem(copyArr);
  };

  const handleDecrement = (obj, i) => {
    if (obj.quantity > 1) {
      obj.price = obj.price - obj.price / obj.quantity;
      obj.quantity = obj.quantity - 1;

      let copyArr = [...props.cartItem];
      copyArr[i] = obj;
      props.setcartItem(copyArr);
    }
  };
  return (
    <div>
      <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
            <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
            <hr className="border-gray-300 mt-4 mb-8" />
            <div className="space-y-4">
              {props.cartItem.map((ele, i) => {
                return (
                  <div className="grid grid-cols-3 items-center gap-4">
                    <div className="col-span-2 flex items-center gap-4">
                      <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                        <img
                          src={ele.thumbnail}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-800">
                          {ele.title}
                        </h3>
                        <h6
                          onClick={() => handleRemove(ele, i)}
                          className="text-xs text-red-500 cursor-pointer mt-0.5"
                        >
                          Remove
                        </h6>
                        <div className="flex gap-4 mt-4">
                          <div className="relative group">
                            <button
                              type="button"
                              className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                            >
                              XL
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-2.5 fill-gray-500 inline ml-2.5"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                  clipRule="evenodd"
                                  data-original="#000000"
                                />
                              </svg>
                            </button>
                            <ul className="group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]">
                              <li className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer">
                                SM
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer">
                                MD
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer">
                                XL
                              </li>
                              <li className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer">
                                XXL
                              </li>
                            </ul>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                            >
                              <svg
                                onClick={() => handleDecrement(ele, i)}
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-2.5 fill-current"
                                viewBox="0 0 124 124"
                              >
                                <path
                                  d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                  data-original="#000000"
                                />
                              </svg>
                              <span className="mx-2.5">{ele.quantity}</span>
                              <svg
                                onClick={() => handleIncrement(ele, i)}
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-2.5 fill-current"
                                viewBox="0 0 42 42"
                              >
                                <path
                                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                  data-original="#000000"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <h4 className="text-base font-bold text-gray-800">
                        ${ele.price.toFixed(2)}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
            <div className="flex border border-blue-600 overflow-hidden rounded-md">
              <input
                type="email"
                placeholder="Promo code"
                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
              />
              <button
                type="button"
                className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white"
              >
                Apply
              </button>
            </div>
            <ul className="text-gray-800 mt-8 space-y-4">
              <li className="flex flex-wrap gap-4 text-base">
                Discount{" "}
                <span className="ml-auto font-bold">
                  ${discount.toFixed(2)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-base">
                Shipping{" "}
                <span className="ml-auto font-bold">
                  ${shipping.toFixed(2)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-base">
                Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base font-bold">
                Total <span className="ml-auto">${finalSum.toFixed(2)}</span>
              </li>
            </ul>
            <div className="mt-8 space-y-2">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Checkout
              </button>
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
