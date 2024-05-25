import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';


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
    <>
      <div className="flex flex-wrap gap-x-16 w-full justify-center px-16">
        {filteredCardInfo.map((card) => {
          return (
            <div
              className="flex flex-col w-80 shadow-md py-4 my-4 rounded-lg bg-gray-100"
              key={card.id} // Use a unique identifier for the key
              style={{ height: "fit-content" }}
            >
              <div className="prod-img w-80 px-2 hover:cursor-pointer">
                <img
                  src={card.thumbnail}
                  className="w-full object-cover object-center h-[200px] rounded-lg"
                  alt={card.title}
                />
              </div>
              <h1 className="text-orange-400 font-bold text-xl my-3 px-4">
                {card.title.slice(0, 25)}...
              </h1>
              <div className="flex flex-col w-full px-4">
                <p className="text-medium">
                  <b>Company: </b> {card.brand}
                </p>
                <p className="text-medium">
                  <b>Price: </b> {card.price}/-
                </p>
                <div className="flex md:flex-row justify-end gap-2 items-center text-gray-900 mt-4">
                  <Link to={`/product-detail/${card.id}`} className="px-6 py-2 transition ease-in duration-200 hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none rounded-lg">
                    Details
                  </Link>
                  <button
                    className="px-6 py-2 transition ease-in duration-200 hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none rounded-lg"
                    onClick={() => handleAddToCart(card)}
                  >
                    <LocalMallIcon />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard;
