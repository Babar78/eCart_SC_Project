import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HeroPic from "../../assets/landingPic.jpg";
import styles from "./Home.module.css";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import ProductsDesign from "../../Components/ProductsDesign/ProductsDesign";
import AutumnAdd from "../../Components/AutumnAdd/AutumnAdd";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className={`${styles.container} bg-red-100`}>
        <img src={HeroPic} alt="landingPic" />
        <button
          className={`bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ${styles.button}`}
        >
          Shop Now
        </button>
      </div>
      <ProductsDesign />
      <FeaturedProducts />
      <AutumnAdd />
      <Footer />
    </>
  );
}

export default Home;
