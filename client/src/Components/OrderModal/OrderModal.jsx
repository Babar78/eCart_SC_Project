import React from "react";
import VerticalTimeline from "../../Components/VerticalTimeline/VerticalTimeline";
import { Divider } from "@mui/material";

function OrderModal({ consignmentNumber, handleCloseModal }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="bg-white rounded-lg p-8" style={{ width: "60vw" }}>
        <div className="flex mb-2">
          <div className="flex flex-1">
            <h2 className="text-xl font-bold mb-4">Consignment Number</h2>
            <h2 className="text-xl font-bold mb-4 text-orange-400">
              #{consignmentNumber}
            </h2>
          </div>
          <div>
            <p>Expected Arrival 01/12/19</p>
            <p>USPS 234094567242423422898</p>
          </div>
        </div>
        <Divider />
        <div className="flex my-4 justify-between">
          <div className="flex-1">
            <VerticalTimeline />
          </div>
          <div>
            <img
              src="https://s.alicdn.com/@sc04/kf/U75e68f0a961d499ea8a4868fa717ede6P.jpg_300x300.jpg"
              alt="Product"
              className="w-64"
            />
          </div>
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-4 rounded w-full"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
