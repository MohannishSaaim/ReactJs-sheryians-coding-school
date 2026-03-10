import React from "react";

const CenterCard = (props) => {
    const card = props.cardData
  return (
    <div style={{backgroundColor: card.colors.card_background}} className=" h-[450px] w-[350px] rounded-2xl flex flex-col gap-2">
      <div className="p-8">
        <div className="gap-4 flex mb-4">
          <button className="bg-white rounded-2xl px-3">{card.badge.left}</button>
          <button className="bg-white rounded-2xl px-3">{card.badge.right}</button>
        </div>
        <div>
          <h1 className="text-4xl font-medium mb-4">
            {(() => {
              const parts = card.title.split(' ');
              if (parts.length > 1) {
                return (
                  <>
                    {parts[0]}<br />{parts.slice(1).join(' ')}
                  </>
                );
              }
              return card.title;
            })()}
          </h1>
          <span>
            {card.description}
          </span>
        </div>
      </div>
      <div className="relative w-full flex overflow-hidden rounded-2xl">
        <img
          src="https://i.pinimg.com/1200x/13/04/1d/13041d7effbd546e6e59c5b7e2da115d.jpg"
          alt=""
          className="h-full w-full object-fill bg-gray-200"
        />
        <button className="ms-4 mb-4 absolute bottom-0 left-0 bg-gray-300 opacity-80 hover:bg-opacity-60 transition text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default CenterCard;
