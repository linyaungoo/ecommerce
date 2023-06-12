import React from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import FeatureCard from "../../components/FeatureCard/Features";
import StatCard from "../../components/StatCard/StatCard";
const Home = () => {
  return (
    <>
      <Hero />
      <div class="flex flex-col text-center w-full mt-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h1>
      </div>
      <Products />
      <FeatureCard />
      <StatCard/>
    </>
  );
};

export default Home;
