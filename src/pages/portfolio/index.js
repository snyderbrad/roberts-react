import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import vengence from '../../assets/images/vengence.webp'
import vengence2 from '../../assets/images/vengence-2.webp'
import rob from '../../assets/images/rob.jpg'
import robert from '../../assets/images/robert.jpg'
export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
              <div className="po_item">
                <img src="https://new.express.adobe.com/webpage/lfEvC14hMrqyu/resources/9f33da7e-1dbc-41e7-8a4a-e872a9b2cd21-1024px?asset_id=9f33da7e-1dbc-41e7-8a4a-e872a9b2cd21" alt="" />
                <div className="content">
                  <p>Vengence turns volume one</p>
                  <a href="http://www.vengeanceturns.com/">view</a>
                </div>
              </div>
              <div className="po_item">
                <img src={vengence} alt="" />
                <div className="content">
                  <p>Vengence turns volume one (Tubi)</p>
                  <a href="https://tubitv.com/movies/100022210/vengeance-turns-volume-one">view</a>
                </div>
              </div>
              <div className="po_item">
                <img src={vengence2} alt="" />
                <div className="content">
                  <p>Vengence Turns Volume Two (Tubi)</p>
                  <a href="https://tubitv.com/movies/100022210/vengeance-turns-volume-two">view</a>
                </div>
              </div>
      </div>
        <div className="mb-5 po_items_ho">
              <div className="po_item">
                <img src={robert} alt="" />
                <div className="content">
                  <p>Robert Christopher IMDb</p>
                  <a href="https://www.imdb.com/name/nm8314010/?ref_=nv_sr_srsg_0_tt_0_nm_8_q_robert%2520christopher%2520smith">view</a>
                </div>
              </div>
              <div className="po_item">
                <img src={rob} alt="" />
                <div className="content">
                  <p>Rob Banks IMDb</p>
                  <a href="https://www.imdb.com/name/nm6887165/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_rob%2520banks">view</a>
                </div>
              </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
