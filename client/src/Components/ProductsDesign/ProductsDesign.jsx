import React from "react";

function ProductsDesign() {
  return (
    <>
      <section className="pt-48 bg-white flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="-mt-20 flex justify-end">
            <img
              className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
              src="https://www.zdnet.com/a/img/resize/06119597d8fde27e3074dc3bb4a9ce0f1851280a/2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?auto=webp&fit=crop&height=900&width=1200"
            />
          </div>
          <div className="flex justify-start">
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://www.zdnet.com/a/img/resize/c555b56a5d2a4b055955dabd82157c20fe2d7cb7/2024/01/31/66065279-c93c-4c83-8488-fb06abadc069/dsc01682.jpg?auto=webp&fit=crop&height=900&width=1200"
            />
          </div>
          <div className="-mt-64 flex justify-start">
            <img
              className="rounded-lg object-cover overflow-hidden"
              src="https://www.imei.info/media/up/cms_file/2023/36/iphone15.jpg"
            />
          </div>
          <div className="flex justify-start -mr-28 ml-28">
            <img
              className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden"
              src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg"
            />
          </div>
          <div className="-mt-72 ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-gray-800 bg-opacity-60">
            <div className="space-y-4">
              <p className="text-5xl font-bold text-orange-400 tracking-tight">
                Certified Quality Assurance for Your Peace of Mind
              </p>
              <p className="text-xl text-white">
                At TruMobiles, we understand the importance of ensuring that every mobile phone you purchase meets your expectations. That's why we offer a comprehensive certification process to guarantee the quality of our used mobiles. Our team of experts meticulously inspects each device, assessing its functionality, performance, and overall condition. <br />
                With our certified quality assurance, you can shop with confidence, knowing that every mobile phone on our platform has been thoroughly vetted and verified. Whether you're buying or selling, you can trust that you're getting a reliable device that meets our high standards. <br />
                Experience peace of mind and reliability with our certified quality assurance process. Shop for your next used mobile phone with confidence on TruMobiles today!


              </p>
            </div>
            {/* <div className="grid grid-cols-2 gap-6 border-t border-b border-gray-200 mt-12 py-8">
              <div>
                <p className="text-4xl font-bold text-black">2M+</p>
                <p className="text-sm text-black">

                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black">170+</p>
                <p className="text-sm text-black">

                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsDesign;
