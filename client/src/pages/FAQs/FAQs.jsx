import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "@mui/material";

export default function FAQs() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mx-4 my-32">
        <h1 className="my-10 text-orange-400 font-bold text-3xl text-center">
          Frequently asked questions (FAQ)
        </h1>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            Is ordering online secure?
          </p>
          <p className="text-gray-400">
            Yes. We take the utmost care with the information that you provide
            us when placing an order on our website (or through any other
            means).All of the information you provide during the ordering
            process is restricted to our staff, and we make sure that all of our
            employees up-to-date on our security and privacy policies. If you
            have further questions about the security of ordering online from
            the
            <Link to={"/"} className="underline hover:cursor-pointer">
              eCart.pk
            </Link>
            , please feel free to e-mail us at&nbsp;
            <Link to={"#"} className="underline hover:cursor-pointer">
              support@eCart.pk
            </Link>
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            Q. How do I place my order?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            <ul className="list-disc ml-4">
              <li>Click on the product you want to buy.</li>
              <li>
                Click on <b>“Add To Cart”</b> option.
              </li>
              <li>
                You can add multiple product on the cart by opening different
                product and add it to the cart.
              </li>
              <li>
                After that click <b>“Cart”</b> on the menu bar.
              </li>
              <li>
                {" "}
                Scroll down and click <b>“Proceed to checkout”.</b>
              </li>
              <li> Fill out the form and provide your information.</li>
              <li>
                Click on the <b>“Order place”</b> button below the form.
              </li>
              <li>
                Hence, you order is placed and you will get a confirmation email
                of your order detail.
              </li>
              <li>
                You can receive your order in Cash On Delivery(COD) method.
              </li>
            </ul>
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            How do I cancel an order on eCart.pk?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            To cancel your order Login in to your account. For the guest users
            they can call our helpline during office hours to cancel their
            orders. You can also cancel order during the final confirmation
            call.
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            What is your shipping cost?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            Our shipping cost is Rs <b>250/-</b> for all over Pakistan. We
            provide free shipping on orders above Rs <b>2000/-</b> all over
            Pakistan.
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            Which service you use for shipping?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            We use <b>“M & P , TCS and Leopards Courier Services”</b> for
            shipping.
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            What is your time to deliver?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            We deliver in 2-3 working days after confirmation call.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
