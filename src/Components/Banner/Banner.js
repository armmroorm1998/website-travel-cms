import React from "react";
import TourButton from "../TourButton/TourButton";
import classes from "./Banner.module.css";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  /* Banner Section */
  return (
    <section className={classes.banner}>
      <div className={classes["banner-content"]}>
        <h1>ยินดีต้อนรับสู่เกาะช้างคลับ</h1>
        <h3>เที่ยวเกาะช้าง ง่ายนิดเดียว</h3>
        <TourButton color="white" size="lg">
          <HashLink smooth to="#tours">
            ทัวร์ยอดนิยม
          </HashLink>
        </TourButton>
      </div>
    </section>
  );
};

export default Banner;
