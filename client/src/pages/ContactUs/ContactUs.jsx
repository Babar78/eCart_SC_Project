import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div>
        <div
          className={`flex justify-center items-center`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=4000")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "70vh",
          }}
        >
          <div>
            <h1
              className="font-bold text-7xl text-orange-500 text-center"
              style={{ fontFamily: "fantasy" }}
            >
              GET IN TOUCH
            </h1>
            <p className="text-gray-100 text-center font-serif text-xl">
              Want to get in touch? We'd love to hear from you. <br /> Here's
              how you can reach us...
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center -translate-y-20 lg:px-32 px-16  gap-4">
          <div className="w-full md:w-1/3 lg:w-1/3 bg-white px-16 py-8 flex flex-col justify-center items-center shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#F97316"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <h1 className="text-xl font-bold text-[#1F2937] my-2">
              Talk to Sales
            </h1>
            <p className="text-center">
              Interested in eCart's wide range of products? Just pick up the
              phone to chat with a friendly member of our team.
            </p>
            <br />
            <p className="text-orange-500">
              <b>+92 000 0000000</b>
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 bg-white px-16 py-8 flex flex-col justify-center items-center shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#F97316"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>

            <h1 className="text-xl my-2 font-bold text-[#1F2937]">
              Contact Customer Support
            </h1>
            <p className="text-center">
              Sometimes you need a little help from your friends. Or a HubSpot
              support rep. Don’t worry… we’re here for you.
            </p>
            <br />
            <p className="text-orange-500">
              <b>+92 000 0000000</b>
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-row flex-wrap lg:px-48 md:px-32 max-sm:px-4 justify-center">
          <div className="basis-1/2">
            <h1 className="text-4xl font-bold mb-8 text-[#1F2937]">
              Get in touch!
            </h1>
            <p className="text-[#1f2937] font-serif text-xl mb-8">
              <b>Adress:</b>
              <br />
              31 Hayward St, Ste J <br />
              Franklin, MA 02038
            </p>
            <p className="text-[#1f2937] font-serif text-xl mb-8">
              <b>Phone:</b>
              <br />
              508-520-6914
            </p>
            <p className="text-[#1f2937] font-serif text-xl mb-8">
              <b>Fax:</b>
              <br />
              508-520-6914
            </p>
            <p className="text-[#1f2937] font-serif text-xl mb-8">
              <b>Email:</b>
              <br />
              ContactUs@ecart.com
            </p>
            <p className="text-[#1f2937] font-serif text-xl mb-8">
              <b>Text:</b>
              <br />
              508-528-5200
            </p>
            <p className="text-[#1f2937] font-serif text-xl mb-8">
              <b>24-hour emergency claims line:</b>
              <br />
              508-528-5200
            </p>
            <p className="text-[#1f2937] font-serif text-xl mb-8">
              <b>Hours:</b>
              <br />8 a.m. to 4 p.m., Monday-Friday
            </p>
            <p className="text-[#1f2937] font-serif text-xl mb-8">
              <b>Social:</b>
              <br />
              Connect with us on
              <a href="#" className="text-orange-500">
                Facebook
              </a>
              or
              <a href="#" className="text-orange-500">
                LinkedIn
              </a>
            </p>
          </div>
          <div
            className="bg-orange-100 basis-1/2 px-16 py-16 rounded-lg  max-sm:mx-8"
            style={{ minWidth: "400px" }}
          >
            <h1 className="text-xl font-bold text-center text-[#1f2937]">
              Fill out this short form and a member of our team will get back to
              you within 24 hours
            </h1>
            <form action="#">
              <input
                type="text"
                className="form-control block
            w-full
            px-3
            mt-8
            mb-4
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-800
            rounded
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="form-control block
            w-full
            px-3
            my-8
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-800
            rounded
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                className="form-control block
            w-full
            px-3
            my-8
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-800
            rounded
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                className="form-control block
            w-full
            px-3
            my-8
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-800
            rounded
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                placeholder="0000-0000000"
                required
                pattern="[0-9]{4}-[0-9]{7}"
              />
              <textarea
                rows={10}
                className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-800
            rounded
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
                placeholder="Message"
              ></textarea>
              <p className="text-lg mt-4">
                How do you prefer to be contacted?
                <br />
                <input type="checkbox" id="email" name="email" value="email" />
                <label for="email" className="text-lg ml-2">
                  Email
                </label>
                <br />
                <input type="checkbox" id="phone" name="phone" value="phone" />
                <label for="phone" className="text-lg ml-2">
                  Phone
                </label>
                <br />
                <input type="checkbox" id="text" name="text" value="text" />
                <label for="text" className="text-lg ml-2">
                  Text
                </label>
              </p>
              <button
                type="submit"
                className="w-full
          px-6
          py-2.5
          bg-orange-500
          text-white
          font-medium
          mt-8
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-orange-600 hover:shadow-lg
          focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-orange-600 active:shadow-lg
          transition
          duration-150
          ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="mb-32">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#1F2937]">
            Connect with one of our global offices
          </h1>
          <div className="flex flex-row mx-32 gap-x-32 justify-center items-center flex-wrap">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5834508728576!2d72.99040651537302!3d33.642041046681996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9759181fbccb%3A0x1dfa639734370135!2sNUST%20(H-12)%20Central%20Library%20Parking!5e0!3m2!1sen!2s!4v1677366190694!5m2!1sen!2s"
                width={"600"}
                height={"450"}
                allowfullscreen={""}
                loading={"lazy"}
                className="md:w-82 md:h-96 lg:w-82 lg:h-96 max-sm:w-64 max-sm:h-64"
                referrerpolicy={"no-referrer-when-downgrade"}
              ></iframe>
            </div>
            <div className="py-4">
              <h1 className="font-bold text-2xl text-[#1F2937]">
                Headquarters
              </h1>
              <p className="my-4 text-xl">
                25 First Street, 2nd Floor <br />
                Cambridge, MA 02141 <br />
                United States
              </p>
              <h1 className="font-bold text-2xl text-[#1F2937]">Phone / Fax</h1>
              <p className="my-4 text-xl">
                + 1 888 HUBSPOT <br />
                (+1 888 482 7768) <br />
              </p>
              <p className="text-xl">
                <b>Fax:</b> +1 617 812 5820
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
