import React, { useEffect, useState } from "react";
import TourDescription from "../../Components/TourDescription/TourDescription";
import TourDetailsBanner from "../../Components/TourDetailsBanner/TourDetailsBanner";
import { useParams } from "react-router-dom";
import defaultTours from "../../defaultTours";
const TourDetails = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState({});

  useEffect(() => {
    //Load single which was clicked by user
    const loadSingleTour = async () => {
      const result = defaultTours.find((tour) => {
        return tour._id === +tourId;
      });
      setTour(result);
    };
    loadSingleTour();
  }, [tourId]);
  return (
    <>
      <TourDetailsBanner tour={tour} />
      <TourDescription tour={tour} />
    </>
  );
};

export default TourDetails;
