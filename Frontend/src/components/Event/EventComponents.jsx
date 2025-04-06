/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import EventCardComponents from "./EventCardComponents";

const EventComponents = () => {
  //   const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <div className=" bg-white">
      {/* {!isLoading && ( */}
      <div className="py-8 px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Popular Events
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="w-full  gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <EventCardComponents active={true} />
        </div>
      </div>
    </div>
  );
};

export default EventComponents;
