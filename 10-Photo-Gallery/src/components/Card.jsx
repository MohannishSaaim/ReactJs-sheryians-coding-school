import React from "react";

const Card = (props) => {
  return (
    <div className="bg-gray-300 h-64 w-80 flex flex-col rounded overflow-hidden">
      <div className="h-44 flex items-center justify-center p-2">
        <img
          src={props.product.images[0]}
          alt=""
          className="object-contain h-full w-full rounded-lg"
        />
      </div>
      <div className="h-20 flex flex-col items-center justify-center px-2 py-2">
        <h1 className="text-sm font-semibold text-center line-clamp-1">
          {props.product.title.slice(0, 20)}...
        </h1>
        <span className="text-md font-semibold">
          ${props.product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Card;
