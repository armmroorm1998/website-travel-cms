import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./TourDescription.module.css";

const TourDescription = ({ tour }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <section className={classes.description}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className={classes["description-content"]}>
              <h2 className="section-heading-sm">รายละเอียดทัวร์</h2>
              <ul>
                <li className={classes.price}>
                  <span>PRICE : </span> ${tour.price}
                </li>
                <li>
                  <span>NEXT DATE :</span>
                  {new Date(tour.startDates).toLocaleDateString(
                    "en-US",
                    options
                  )}
                </li>

                <li>
                  <span>MAX PARTICIPANTS : </span> {tour.maxGroupSize} ท่าน
                </li>
                <li>
                  <span>Duration : </span> {tour.duration} วัน
                </li>
                <li>
                  <span>DIFFICULTY : </span> {tour.difficulty}
                </li>
                <li>
                  <span>RATING : </span> {tour.ratingsAverage} / 5
                </li>

                <li>
                  <span>Description : </span> {tour.description}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDescription;
