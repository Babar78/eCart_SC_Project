import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HeroPic from "../../assets/landingPic.jpg";
import styles from "./Home.module.css";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import ProductsDesign from "../../Components/ProductsDesign/ProductsDesign";
import AutumnAdd from "../../Components/AutumnAdd/AutumnAdd";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className={`${styles.container} relative`}>
        <img src="https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg" alt="landingPic" className="w-screen h-[700px] object-cover" />
        <div className="absolute top-[300px] left-[150px]">
          <h1 className="text-6xl font-bold text-white">Welcome to TruMobiles</h1>
          <p className=" text-2xl text-white">
            Your one-stop shop for high-quality used mobile phones
          </p>
          <Link to={"/products"} >
            <button
              className={`bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-10`}
            >
              Explore
            </button>
          </Link>
        </div>
      </div>
      <ProductsDesign />
      <FeaturedProducts />
      {/* <AutumnAdd /> */}
      <Footer />
    </>
  );
}

export default Home;
