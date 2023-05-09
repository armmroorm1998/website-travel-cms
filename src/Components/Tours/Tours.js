import React, { useEffect, useState } from "react";
import TourButton from "../TourButton/TourButton";
import classes from "./Tours.module.css";
import { MdCalendarToday, MdHiking } from "react-icons/md";
import { FaRegClock, FaUserFriends } from "react-icons/fa";
import Spinner from "../Spinner/Spinner";
import { useHistory } from "react-router";

const Tours = () => {
  const defaultTours = [
    {
      _id: 1,
      name: "เกาะช้าง",
      summary: "เกาะช้าง 3 วัน 3 ท่าน",
      startDates: new Date(),
      difficulty: "Eazy",
      duration: 3,
      maxGroupSize: 3,
      price: 1000,
      imageCover:
        "https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03002767_1.jpeg",
    },
    {
      _id: 2,
      name: "เกาะช้าง",
      summary: "เกาะช้าง 5 วัน 4 ท่าน",
      startDates: new Date(),
      difficulty: "Eazy",
      duration: 5,
      maxGroupSize: 4,
      price: 1500,
      imageCover:
        "https://www.atsiamtour.com/Upload/PackageType/37/cover.jpg?version=20200929151933733",
    },
    {
      _id: 3,
      name: "เกาะช้าง",
      summary: "เกาะช้าง 7 วัน 5 ท่าน",
      startDates: new Date(),
      difficulty: "Eazy",
      duration: 7,
      maxGroupSize: 5,
      price: 2000,
      imageCover:
        "https://paimayang.com/wp-content/uploads/2020/01/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87-840x560.jpg",
    },
  ];
  const [tours] = useState(defaultTours);
  const history = useHistory();

  useEffect(() => {
    //Load all tours from server
    const loadTours = async () => {
      // const response = await fetch(
      //   "https://holiday-dreams.herokuapp.com/tours"
      // );
      // const responseData = await response.json();
      // setTours(responseData);
      // setTours([]);
    };
    loadTours();
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
                      <MdHiking className={classes["card__icon"]} />

                      <span>{tour.difficulty}</span>
                    </div>
                    <div className={classes["card__data"]}>
                      <MdCalendarToday className={classes["card__icon"]} />
                      <span>
                        {new Date(tour.startDates).toLocaleDateString("en-US")}
                      </span>
                    </div>
                    <div className={classes["card__data"]}>
                      <FaRegClock className={classes["card__icon"]} />
                      <span>{tour.duration} วัน</span>
                    </div>
                    <div className={classes["card__data"]}>
                      <FaUserFriends className={classes["card__icon"]} />
                      <span>{tour.maxGroupSize} ท่าน</span>
                    </div>
                  </div>

                  <div className={classes["card__footer"]}>
                    <p>
                      <span className={classes["card__footer-value"]}>
                        ${tour.price}
                      </span>
                      <span className={classes["card__footer-text"]}>
                        / ต่อท่าน
                      </span>
                    </p>
                    <TourButton
                      color="green"
                      size="lg"
                      onClick={() => history.push(`/tours/${tour._id}`)}
                    >
                      จองตอนนี้
                    </TourButton>
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
