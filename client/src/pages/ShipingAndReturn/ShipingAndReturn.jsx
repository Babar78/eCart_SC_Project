import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ShipingAndReturn() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mx-4 my-32">
        <h1 className="my-10 text-orange-400 font-bold text-3xl text-center">
          Shipping & Returns
        </h1>
        <div className="shipping">
          <h1 className="lg:px-60 md:px-20 px-16 my-8 font-bold text-lg">
            Shipping Policy
          </h1>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Shipping Locations: </b>
              We currently offer shipping within Pakistan. Please note that
              certain remote areas may have limited or no delivery coverage.
            </p>
          </div>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Processing Time: </b>
              Orders are typically processed within [insert processing time]
              after payment confirmation. Please note that this does not include
              weekends or holidays.
            </p>
          </div>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Shipping Methods: </b>
              We partner with reputable shipping carriers to ensure reliable and
              timely delivery of your orders. The available shipping methods
              will be displayed during the checkout process, and you can choose
              the one that best suits your needs.
            </p>
          </div>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Shipping Costs: </b>
              Shipping costs are calculated based on the total weight of the
              order, shipping destination, and selected shipping method. The
              applicable shipping charges will be displayed during the checkout
              process for your review before completing the order.
            </p>
          </div>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Tracking Your Order: </b>
              Once your order has been shipped, you will receive a shipping
              confirmation email with a tracking number. You can use this
              tracking number to monitor the progress of your shipment on our
              website or the carrier's website.
            </p>
          </div>
        </div>
        <div className="shipping">
          <h1 className="lg:px-60 md:px-20 px-16 my-8 font-bold text-lg">
            Returns and Refunds Policy:
          </h1>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Returns Eligibility: </b>We want you
              to be completely satisfied with your purchase. If you are not
              satisfied or if there is a defect in the product, you may be
              eligible for a return or exchange. Please note that certain items,
              such as intimate apparel or personalized products, may not be
              eligible for return due to hygiene or customization reasons.
            </p>
          </div>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Return Process: </b>
              To initiate a return, please contact our customer service within
              [insert number of days] of receiving your order. Our customer
              service team will guide you through the return process and provide
              you with the necessary instructions and return shipping address.
            </p>
          </div>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Return Conditions: </b>
              In order for a return to be accepted, the following conditions
              must be met:
              <ul className="ml-4">
                <li>
                  The item must be unused, in its original condition, and with
                  all original tags and packaging intact.
                </li>
                <li>
                  Any accompanying accessories, manuals, or free gifts must also
                  be returned.
                </li>
                <li>
                  Proof of purchase, such as the order number or receipt, may be
                  required.
                </li>
              </ul>
            </p>
          </div>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Return Shipping: </b>
              The cost of return shipping is the responsibility of the customer,
              unless the return is due to a defective or incorrect item
              received. We recommend using a trackable shipping method to ensure
              the safe return of the item.
            </p>
          </div>
          <div className="lg:px-60 md:px-20 px-16 m-8">
            <p className="text-gray-400">
              <b className="text-gray-500">Refunds: </b>
              Once the returned item is received and inspected, we will notify
              you of the status of your refund. If approved, the refund will be
              processed using the original payment method used for the purchase.
              Please note that it may take some time for the refund to be
              reflected in your account, depending on your payment provider.
            </p>
          </div>
          <p className="text-gray-400 text-center">
            Please refer to our full Shipping and Returns Policy on our website
            for more detailed information and any additional terms and
            conditions that may apply.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ShipingAndReturn;
