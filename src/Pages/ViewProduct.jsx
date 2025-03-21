import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const ViewProduct = (props) => {
  const [seleteImage, setseleteImage] = useState('');
  let location= useLocation();
  // console.log(location.state.ele);
  // console.log(location.state.getproduct);
  let view=location.state.ele;
  let getproduct=location.state.getproduct;
let filtercategory = getproduct.filter(
  (ele) => ele.category.toLowerCase() === view.category?.toLowerCase()
);

const handleAd=(obj)=>{
props.details(obj); 
}
 const handleChange=(url)=>{
console.log(url);
setseleteImage(url);

 }
  
  return (
    <div>
      <div className="w-full m-aut h-[100vh] flex  md:flex-row flex-col gap-2">
        <div className="h-full md:w-[50%] border border-white">
          <img
            src={seleteImage ? seleteImage : view.thumbnail}
            alt=""
            className="w-full h-[60%] object-contain object-center "
          />
          <div className="flex justify-center gap-3">
            {view.images.map((url, i) => {
              return (
                <img
                  onClick={() => handleChange(url)}
                  src={url}
                  key={url}
                  alt=""
                  height={100}
                  width={100}
                  className="border border-white "
                />
              );
            })}
          </div>
        </div>
        <div className=" border border-white text-white  w-[50%] flex flex-col gap-2 p-4 h-full">
          <h1 className="font-semibold text-xl">{view.title}</h1>
          <p>
            <b>Availability:</b> {view.availabilityStatus}{" "}
          </p>
          <p>
            <b>brand:</b> {view.brand}
          </p>
          <p>
            <b>price:</b> {view.price}
          </p>

          <p>
            <b>stock:</b> {view.stock}
          </p>
          <p>
            <b>warranty:</b> {view.warrantyInformation}
          </p>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                <b>category:</b> {view.category}
              </p>
              <p>
                <b>discount:</b> {view.discountPercentage}%
              </p>
              <p>
                <b>rating :</b> {view.rating}%
              </p>
              <p>
                {" "}
                <b>minimum Order Quantity :</b> {view.minimumOrderQuantity}%
              </p>
              <p>
                <b>returnPolicy :</b> {view.returnPolicy}
              </p>
              <p>
                <b>shippingInformation :</b> {view.shippingInformation}
              </p>
              <p>
                <b>weight :</b> {view.weight}
              </p>
              <p>
                <b>dimensions :</b> {view.dimensions.depth}X
                {view.dimensions.height}X{view.dimensions.width}
              </p>
              <p>
                <b>description :</b> {view.description}
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="border border-white grid lg:grid-cols-4 mt-4 md:grid-cols-3 sm:grid-flow-col-2 grid-cols-1 gap-2  ">
        {filtercategory.map((category, i) => {
          return (
            <div className="border border-white hover:bg-blue-950 p-2 text-white text-center">
              <img src={category.images[0]} alt={category.title} className="" />
              <h1 className="text-[1.2rem]">{category.title}</h1>
              <div className="flex justify-between items-center">
                <h1 className="text-[1.2rem]">${category.price}</h1>

                <IoCartOutline
                  className="bg-gray-300 w-8 h-8 rounded-full
                 text-black p-1"
                 onClick={()=>handleAd(category)}
                />
              </div>
              <Link to={"/view"}>
                <button className="bg-green-500 hover:bg-green-400 text-white w-full p-2 mt-3">
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewProduct
