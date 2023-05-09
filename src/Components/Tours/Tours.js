import React, { useEffect, useState } from "react";
import TourButton from "../TourButton/TourButton";
import classes from "./Tours.module.css";
import { MdCalendarToday, MdDinnerDining } from "react-icons/md";
import { FaRegClock, FaUserFriends } from "react-icons/fa";
import Spinner from "../Spinner/Spinner";
import { useHistory } from "react-router";
import defaultTours from "../../defaultTours";

const Tours = () => {
  const [tours] = useState(defaultTours);
  const history = useHistory();

  useEffect(() => {
    //Load all tours from server
    // const loadTours = async () => {
    //   const response = await fetch(
    //     "/xxxxxxxx"
    //   );
    //   const responseData = await response.json();
    //   setTours(responseData);
    //   setTours([]);
    // };
    // loadTours();
  }, []);

  return (
    <section className={classes.tours} id="tours">
      <div className="container">
        <h2 className="section-heading">ทัวร์ยอดนิยม</h2>
        {/* If tour is not loaded then show spinner */}
        {!tours.length && <Spinner />}

        <div className="row gy-5">
          {tours.map((tour) => {
            const image = tour.imageCover;
            return (
              <div className="col-lg-4 col-md-6" key={tour._id}>
                <div className={classes["card"]}>
                  <div className={classes["card__header"]}>
                    <div className={classes["card__picture"]}>
                      <div className={classes["card__picture-overlay"]}>
                        &nbsp;
                      </div>
                      <img
                        src={image}
                        alt={tour.name}
                        className={classes["card__picture-img"]}
                      />
                    </div>
                    <h3 className={classes["heading-tertirary"]}>
                      <span>{tour.name}</span>
                    </h3>
                  </div>
                  <div className={classes["card__details"]}>
                    <p className={classes["card__text"]}>{tour.summary}</p>
                    <div className={classes["card__data"]}>
                      <MdDinnerDining className={classes["card__icon"]} />
                      <span>{tour.food}</span>
                    </div>
                    <div className={classes["card__data"]}>
                      <MdCalendarToday className={classes["card__icon"]} />
                      <span>
                        {new Date(tour.startDates).toLocaleDateString("en-US")}
                      </span>
                    </div>
                    <div className={classes["card__data"]}>
                      <FaRegClock className={classes["card__icon"]} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className={classes["card__data"]}>
                      <FaUserFriends className={classes["card__icon"]} />
                      <span>{tour.maxGroupSize} ท่าน</span>
                    </div>
                  </div>
                  <div className={classes["card__footer"]}>
                    <TourButton
                      color="white"
                      size="lg"
                      onClick={() => history.push(`/tours/${tour._id}`)}
                    >
                      <span>จองตอนนี้</span>
                    </TourButton>
                    <div>
                      <span className={classes["card__footer-value"]}>
                        {tour.price} ฿
                      </span>
                      <span className={classes["card__footer-text"]}>
                        / ต่อท่าน
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
