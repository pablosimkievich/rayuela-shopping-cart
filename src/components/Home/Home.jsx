import React from "react";
import { FiltersProvider } from "../../context/filtersContext.jsx";
import { ProductProvider } from "../../context/productProvider.jsx";
import { Header } from "../Header/Header.jsx";
import { Toys } from "../Toys/Toys.jsx";

export const Home = () => {
  return (
    <FiltersProvider>
      <ProductProvider>
        <Header />
        <Toys />
      </ProductProvider>
    </FiltersProvider>
  );
};
