/* eslint-disable no-unused-vars */
import React from "react";
// import { useSelector } from "react-redux";
import EventCardComponents from "../components/Event/EventCardComponents.jsx";
import HeaderComponents from "../components/Layout/HeaderComponents.jsx";
// import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  //   const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <div>
        <HeaderComponents activeHeading={4} />
        <EventCardComponents active={true} />
      </div>
      {/* )} */}
    </>
  );
};

export default EventsPage;
