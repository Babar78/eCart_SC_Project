import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";


function ProductCard({ cardInfo, activeButton }) {
  
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  let filteredCardInfo = cardInfo;
  if (activeButton !== "all") {
    filteredCardInfo = cardInfo.filter(
      (card) => card.category === activeButton
    );
  }

  return (
    <div className="flex flex-wrap gap-x-16 w-full justify-center px-16">
      {filteredCardInfo.map((card) => {
        return (
          <div
            className="flex flex-col w-80 shadow-md py-4 my-4 rounded-lg bg-gray-100"
            key={card.id} // Use a unique identifier for the key
            style={{ height: "fit-content" }}
          >
            <Link to={`/product-detail/${card.id}`}>
              <div className="prod-img w-80 px-2 hover:cursor-pointer">
                <img
                  src={card.image}
                  className="w-full object-cover object-center"
                  alt={card.description}
                />
              </div>
            </Link>
            <h1 className="text-orange-400 font-bold text-xl my-3 px-4">
              {card.description}
            </h1>
            <div className="flex flex-col w-full  px-4">
              <p className="text-medium">
                <b>Size: </b> {card.size}
              </p>
              <p className="text-medium">
                <b>Style: </b> {card.style}
              </p>
              <p className="text-medium">
                <b>Color: </b> {card.color}
              </p>

              <div className="flex md:flex-row justify-between items-center text-gray-900 mt-4">
                <p className="font-bold text-xl">${card.price}</p>
                <button
                  className="ml-8 px-6 py-2 transition ease-in duration-200 uppercase hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                  onClick={() => handleAddToCart(card)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
