import React from "react";

function ProductsDesign() {
  return (
    <>
      <section className="pt-48 bg-white flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="-mt-20 flex justify-end">
            <img
              className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
              src="https://images.unsplash.com/photo-1614584935799-2882f2ee56d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmwlMjB3ZWFyaW5nJTIwamFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
            />
          </div>
          <div className="flex justify-start">
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://images.unsplash.com/photo-1599132972297-823e09453a12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHN1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
            />
          </div>
          <div className="-mt-64 flex justify-start">
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
            />
          </div>
          <div className="flex justify-start -mr-28 ml-28">
            <img
              className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
              src="https://images.unsplash.com/photo-1625993051424-114a461d406a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvbG8lMjBzaGlydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
            />
          </div>
          <div className="-mt-72 ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-gray-800 bg-opacity-60">
            <div className="space-y-4">
              <p className="text-5xl font-bold text-orange-400 tracking-tight">
                Comfortable and Stylish Sneakers
              </p>
              <p className="text-xl text-white">
                Step out in style with our comfortable and stylish sneakers.
                Made with high-quality materials, these sneakers offer a perfect
                combination of comfort and durability. The cushioned insole and
                soft, breathable upper provide all-day comfort, while the sturdy
                outsole ensures stability and grip. Available in a variety of
                colors and designs, these sneakers are sure to complement any
                outfit, whether you're running errands or hitting the gym.
                Whether you're looking for a casual shoe for everyday wear or a
                performance sneaker for your active lifestyle, our comfortable
                and stylish sneakers are the perfect choice.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-b border-gray-200 mt-12 py-8">
              <div>
                <p className="text-4xl font-bold text-black">2M+</p>
                <p className="text-sm text-black">
                  people in the Apple supply chain covered by our health and
                  safety standards in 2020
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black">170+</p>
                <p className="text-sm text-black">
                  member companies of the Responsible Business Alliance given
                  access to our COVID response tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsDesign;
