/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HeaderComponents from "../components/Layout/HeaderComponents.jsx";
import HeroComponents from "../components/Layout/HeroComponents.jsx";
import CategoriesComponents from "../components/Layout/CategoriesComponents.jsx";
import BestDealComponents from "../components/Layout/BestDealComponents.jsx";
import FeaturedProductComponents from "../components/FeaturedProduct/FeaturedProductComponents.jsx";
import EventComponents from "../components/Event/EventComponents.jsx";
import SponsoredComponents from "../components/Sponsored/SponsoredComponents.jsx";
import FooterComponents from "../components/Layout/FooterComponents.jsx";

const HomePage = () => {
  return (
    <div>
      <HeaderComponents activeHeading={1} />
      <HeroComponents />
      <CategoriesComponents />
      <BestDealComponents />
      <EventComponents />
      <FeaturedProductComponents />
      <SponsoredComponents />
      <FooterComponents />
    </div>
  );
};

export default HomePage;
