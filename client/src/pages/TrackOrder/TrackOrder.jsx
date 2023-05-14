import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Divider } from "@mui/material";
import NumbersIcon from "@mui/icons-material/Numbers";
import OrderModal from "../../Components/OrderModal/OrderModal";
import Alert from "@mui/material/Alert";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function TrackOrder() {
  //Get the consignment Number
  const [consignmentNumber, setConsignmentNumber] = React.useState("");
  const handleChange = (e) => {
    setConsignmentNumber(e.target.value);
  };

  const [showAlert, setShowAlert] = React.useState(false);

  //Modal for Track Order
  const [showModal, setShowModal] = React.useState(false);

  const handleButtonClick = () => {
    if (consignmentNumber !== "") {
      setShowModal(true);
      setShowAlert(false);
    } else {
      setShowModal(false);
      setShowAlert(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="rounded-md shadow bg-white mx-16 mb-32 mt-48">
        <div className="flex items-center px-8 py-4">
          <LocationOnIcon className="text-gray-500" />
          <p className="text-2xl ml-2 font-medium text-[#575962]">
            Track Order
          </p>
        </div>
        <Divider />
        <div className=" p-8 ">
          <p className="text-2xl font-medium text-[#575962]">
            Track Your Order
          </p>
          <p className="text-gray-400">
            Please provide order consignment number to track your order and
            check current order status
          </p>
          <div className="mt-4">
            <label
              htmlFor="input-group-1"
              className="block mb-2 font-bold text-[#575962]"
            >
              Enter Consignment Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <NumbersIcon className="text-gray-400" />
              </div>
              <input
                type="text"
                id="consignment-number"
                className="bg-gray-900 rounded-lg pl-10 p-2.5 text-white"
                placeholder="Consignment Number"
                required
                onChange={handleChange}
              />
            </div>
            <p className="font-bold text-gray-400 mt-2">E.g. WR1234567</p>
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-4 rounded"
            onClick={handleButtonClick}
          >
            Submit
          </button>
        </div>
        {showAlert && (
          <Alert severity="error">Consignment number is required!</Alert>
        )}
      </div>

      {showModal && (
        <OrderModal
          consignmentNumber={consignmentNumber}
          handleCloseModal={handleCloseModal}
        />
      )}
      <Footer />
    </>
  );
}

export default TrackOrder;
