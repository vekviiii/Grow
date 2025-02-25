import React from 'react';
import Slider from "react-slick";
import axios from 'axios';

import { Card } from "../../utils/cardComponent";

import { CurrencyRupeeIcon } from "@heroicons/react/24/outline";

import "./index.css";
import { useEffect } from "react";

function Details() {

  useEffect(()=>{
    axios.get('/api/product')
    .then((res)=> console.log(res.data))
    .catch((err)=>console.error(err))
  },[])

  const products = [
    {
      id: 1,
      name: "Plant one",
      price: "49.00",
      image: "two-leaves.svg",
    },
    {
      id: 2,
      name: "Plant one",
      price: "99.00",
      image: "spiky-leaves.svg",
    },
    {
      id: 3,
      name: "Plant one",
      price: "free",
      image: "wavy-leaves.svg",
    },
    {
      id: 4,
      name: "Plant one",
      price: "69.00",
      image: "weird-leaves.svg",
    },
    {
      id: 5,
      name: "Plant one",
      price: "29.00",
      image: "two-leaves.svg",
    },
    {
      id: 6,
      name: "Plant one",
      price: "19.00",
      image: "spiky-leaves.svg",
    },
    {
      id: 7,
      name: "Plant one",
      price: "119.00",
      image: "wavy-leaves.svg",
    },
    {
      id: 8,
      name: "Plant one",
      price: "49.00",
      image: "weird-leaves.svg",
    },
  ];

  const settings: any = {
    arrows: true,
    draggable: true,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Screens below 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Screens below 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile screens below 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1>Products</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {products.map((item) => (
            <React.Fragment key={item.id}>
              <Card key={item.id} className="mx-4">
                <div className="flex justify-center">
                  <img width="200px" src={`/images/partOne/${item.image}`} />
                </div>
              </Card>
              <div className="mt-1 mx-4 flex justify-between">
                <div>
                  <div>{item.name}</div>
                  <span className="text-[gray] text-[14px]">₹{item.price}</span>
                </div>
                <div className="mt-1">
                  <button id={item.id.toString()}>
                    <div className="flex justify-center">
                      <CurrencyRupeeIcon className="size-6" />
                      <div className="mx-1">Buy</div>
                    </div>
                  </button>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Details;
