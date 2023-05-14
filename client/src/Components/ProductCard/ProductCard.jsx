import React from "react";

function ProductCard({ cardInfo }) {
  return (
    <div className="flex flex-wrap gap-x-16 w-full justify-center px-16">
      {cardInfo.map((card, index) => {
        return (
          <div
            className="flex flex-col w-80 justify-center items-center shadow-md py-4 my-8 rounded-lg"
            key={index}
          >
            <h1 className="text-orange-400 font-bold text-xl">{card.title}</h1>
            <p className="uppercase text-gray-400">
              THE BEST SHOES IN THE MARKETPLACE
            </p>
            <div class="prod-img w-80">
              <img src={card.image} class="w-full object-cover object-center" />
            </div>
            <div class="prod-info grid gap-5">
              <div>
                <ul class="flex flex-row justify-center items-center">
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#blue"
                        class="block w-6 h-6 bg-blue-900 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#yellow"
                        class="block w-6 h-6 bg-yellow-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#red"
                        class="block w-6 h-6 bg-red-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#green"
                        class="block w-6 h-6 bg-green-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                <p class="font-bold text-xl">{card.price}</p>
                <button class="ml-8 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
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
