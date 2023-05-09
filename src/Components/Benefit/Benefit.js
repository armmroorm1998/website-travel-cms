import React from "react";
//Icons
import {
  MdReviews,
  MdSecurity,
  MdSupervisedUserCircle,
  MdWorkspacePremium,
} from "react-icons/md";
import classes from "./Benefit.module.css";

//Travel images
import benefit1 from "../../images/travel.png";
import { Col, Container, Row } from "react-bootstrap";

const Benefit = () => {
  //Benefit Section
  return (
    <section className={classes.benefit}>
      <Container>
        <Row className="align-items-center">
          <div className="col-lg-6">
            <div className={classes.benefit__pic}>
              <Row>
                <Col sm={12}>
                  <div className={classes.benefit__pic__item}>
                    <img src={benefit1} alt="tour" className="img-fluid" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <Col lg={6}>
            <div className={classes.benefit__content}>
              <div className="section-heading-sm">
                <h2>ทำไมถึงต้องเลือก เกาะช้างคลับ</h2>
              </div>
              <p>
                เกาะช้างคลับ เป็นบริษัทตัวแทนนำเที่ยวบริการจัดแพ็คเกจเกาะช้าง
                ที่พัก - กิจกรรม - อาหาร ในเกาะช้างด้วยทีมงานที่มี
                ประสบการณ์ด้านการท่องเที่ยว และความชำนาญเรื่องเกาะช้าง ที่เที่ยว
                และประวัติเกาะช้าง เป็นอย่างดี
                สามารถจัดการแพ็คเกจเที่ยวในรูปแบบต่างๆ เช่น เที่ยวเกาะช้าง 2 วัน
                1 คืน และ เที่ยวเกาะช้าง 3 วัน 2 คืน รวดเร็วว่องไว
                ราคาที่ประหยัด และถูกกว่าคุณจองเอง
                นอกจากนี้เรายินดีให้ข้อมูลการท่องเที่ยวต่างๆของ อำเภอเกาะช้าง
                เพิ่มสะดวกสบายในการเดินทางของคุณ
                คุณสามารถตรวจสอบรายละเอียดของทางโรงแรมที่คุณต้องการจองได้ด้วยตัวคุณเองที่หน้า
                เว็บทั้งราคาและภาพถ่าย ซึ่งจะทำให้คุณแน่ใจได้มากยิ่งขึ้น
                ว่าได้รับคุณภาพอย่างที่คุณต้องการในราคาที่คุ้มค่า
                เพราะเราตั้งใจที่ จะให้การพักผ่อนของคุณเป็นที่ประทับใจ ซึ่งรีวิว
                เกาะช้าง เรามีมาตั้งแต่ก่อนปี 2019
              </p>
              <Row>
                <Col sm={6}>
                  <div className={classes.benefit__item}>
                    <h4>
                      <MdWorkspacePremium />
                      ความน่าเชื่อถือ
                    </h4>
                    <p>
                      - ดำเนินกิจการในรูปแบบของบริษัท ทะเบียนพาณิชย์เลขที่
                      012555400919
                    </p>
                    <p>
                      - จดทะเบียนขอใบอนุญาตท่องเที่ยวแบบภายในประเทศ เลขที่
                      12/02253
                    </p>
                    <p>
                      - จดทะเบียนภาษีมูลค่าเพิ่ม (ภพ. 20) เลขที่ 0125554009190
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classes.benefit__item}>
                    <h4>
                      <MdSecurity />
                      ปลอดภัย สะดวกสบาย
                    </h4>
                    <p>
                      - กรมธรรม์ประกันภัยเลขที่ 001-PTAT23-000030 โดยบริษัท
                      ฟอลคอน ประกันภัย จำกัด (มหาชน) (18 เม.ย. 66- 8 มี.ค. 67)
                    </p>
                    <p>
                      - ชำระด้วยบัตรเครดิตโดย Payment Link ของ KTC
                      (รับได้ทุกบัตร) * ไม่มีค่าธรรมเนียม
                      และมีระบบป้องกันปลอดภัยที่เชื่อถือได้ระดับสากล
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classes.benefit__item}>
                    <h4>
                      <MdSupervisedUserCircle />
                      บริการของเรา
                    </h4>
                    <p>
                      - ทัวร์ดำน้ำดูปะการัง / ทานอาหารเย็น
                      ที่ระบุในแพ็คเกจทั้งหมดจะมีบริการรับ - ส่ง
                    </p>
                    <p>
                      - ให้บริการเช่าเหมาเรือไปดำน้ำชมปะการัง, ตกหมึก, ตกปลา
                      ในพื้นที่หมู่เกาะช้าง
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className={classes.benefit__item}>
                    <h4>
                      <MdReviews />
                      รีวิวจากลูกค้า
                    </h4>
                    <p>
                      - เรามีรีวิวสำหรับผู้ใช้บริการแบบ แพ็คเกจทัวร์
                      ที่เกาะช้างมากมาย
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Benefit;
