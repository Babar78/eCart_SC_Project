import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

function ProductCard({ cardInfo }) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="flex flex-wrap gap-x-16 w-full justify-center px-16">
      {cardInfo.map((card) => {
        return (
          <div
            className="flex flex-col w-80 justify-center items-center shadow-md py-4 my-8 rounded-lg"
            key={card.id} // Use a unique identifier for the key
          >
            <h1 className="text-orange-400 font-bold text-xl">{card.title}</h1>
            <p className="uppercase font-bold">{card.description}</p>
            <div className="prod-img w-80">
              <img
                src={card.image}
                className="w-full object-cover object-center"
                alt={card.description}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-medium">
                <b>Size: </b> {card.size}
              </p>
              <p className="text-medium">
                <b>Style: </b> {card.style}
              </p>
              <p className="text-medium">
                <b>Color: </b> {card.color}
              </p>

              <div className="flex flex-col md:flex-row justify-between items-center text-gray-900 mt-4">
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
