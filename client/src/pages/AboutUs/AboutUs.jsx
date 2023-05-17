import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AboutusPic from "../../assets/aboutus.jpg";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className={`sticky top-0 z-0 ${styles.backgroundContainer}`}>
        <img
          src={AboutusPic}
          alt="landingPic"
          className={styles.backgroundImage}
        />
        <div className={styles.overlayText}>
          Discover the essence of style and elegance.
        </div>
      </div>

      <div className="relative z-10 bg-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mt-8 mb-4 text-[#000000]">
            About Us
          </h1>
          <p className="text-gray-500 text-center w-2/3 text-center">
            At eCart, we are more than just an online shopping portal. We are a
            passionate team dedicated to delivering an exceptional shopping
            experience to our valued customers. Our story began with a vision to
            redefine convenience, choice, and quality in the world of
            e-commerce. <br />
            <br />
            With a focus on providing a wide range of high-quality products, we
            strive to be your go-to destination for all your shopping needs.
            From trendy clothing to stylish shoes and everything in between, our
            curated collection is designed to cater to your unique preferences
            and help you express your individuality. <br />
            <br /> But eCart is more than just a platform to buy products. We
            believe in building a strong community where every customer feels
            valued and heard. Our dedicated customer support team is always
            ready to assist you, ensuring your journey with us is seamless and
            enjoyable. <br />
            <br />
            Transparency and trust are at the core of our values. We carefully
            select our vendors and partners to ensure that every product you
            receive meets the highest standards of quality. We take pride in
            offering accurate product descriptions and detailed images, so you
            can make informed decisions with confidence. <br />
            <br />
            At eCart, we understand that your time is precious. That's why we
            have streamlined our website to provide a user-friendly interface,
            making your shopping experience smooth and hassle-free. From easy
            navigation to secure payment options, we prioritize your convenience
            at every step. <br />
            <br />
            We are grateful for the trust you place in us when choosing eCart as
            your preferred online shopping destination. We are committed to
            continuously improving and evolving to meet your evolving needs and
            exceed your expectations.
            <br />
            <br />{" "}
            <b>
              Thank you for being a part of the eCart family. Together, let's
              embark on a delightful shopping journey where style, convenience,
              and exceptional service converge.
            </b>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
