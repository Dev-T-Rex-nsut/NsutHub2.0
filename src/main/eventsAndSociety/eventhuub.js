import React from "react";
import "./eventhub.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import Footer from '../initials/footer';
import image4 from "../img/image4.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
const EventHub = () => {
  return (
    <div className="moveRt">
      <div className="pimg1">
        <div className="ptext">
          <span className="border"> MOKSHA 2020 </span>
          <h6 style={{ marginTop: "50px", zIndex: "1" }}>17-23 March</h6>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Event 1</h2>
        <h4>13 November 2020</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          veritatis pariatur, unde magni tempore laboriosam atque ea, vitae
          adipisci explicabo ex eum perspiciatis dolore, eius id! Perspiciatis,
          error? Voluptas, fugit.
        </p>
      </section>
      <div className="pimg2">
        <div className="ptext">
          <span className="border trans"> Webinar On Tech Placement </span>
          <h6 style={{ marginTop: "50px", zIndex: "1" }}>
            Mini Hall, ECE Block
          </h6>
        </div>
      </div>
      <section className="section section-dark">
        <h2>Event 2</h2>
        <h5>2 March 2016</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          veritatis pariatur, unde magni tempore laboriosam atque ea, vitae
          adipisci explicabo ex eum perspiciatis dolore, eius id! Perspiciatis,
          error? Voluptas, fugit.
        </p>
      </section>
      <div className="pimg3">
        <div className="ptext">
          <span className="border trans"> Innovasion and Resonanz </span>
          <h6 style={{ marginTop: "50px", zIndex: "1" }}>Moksha Ground</h6>
        </div>
      </div>
      <section className="section section-dark">
        <h2>Event 3</h2>
        <h5>10 December 2016</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          veritatis pariatur, unde magni tempore laboriosam atque ea, vitae
          adipisci explicabo ex eum perspiciatis dolore, eius id! Perspiciatis,
          error? Voluptas, fugit.
        </p>
      </section>
      <div className="pimg1">
        <div className="ptext">
          <span className="border"> Space Exploration by: Nakshatra </span>
          <h6 style={{ marginTop: "50px", zIndex: "1" }}>NB03, NSUT</h6>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            style={{borderRadius:'0px'}}
            className="d-block w-100"
            src={image1}
            alt="First slide"
            height="100% !important"
            width="100%"
          />
          <Carousel.Caption
            style={{ border: "1px solid white", marginBottom: "100px" }}
          >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{borderRadius:'0px'}}
            className="d-block w-100"
            src={image2}
            // style={{ opacity: "0.7" }}
            alt="First slide"
            height="100% !important"
            width="100%"
          />

           <Carousel.Caption
            style={{ border: "1px solid white", marginBottom: "100px" }}
          >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img

            style={{borderRadius:'0px'}}
            className="d-block w-100"
            src={image3}
            alt="First slide"
            height="100% !important"
            width="100%"
          />

          <Carousel.Caption
            style={{ border: "1px solid white", marginBottom: "100px" }}
          >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="section section-light">
        <h1>Past Events</h1>
      </section>
      <Grid container style={{ padding: "0 50px 50px" }}>
        <Grid item container sm={12}>
          <Grid item sm={6}>
            <img
              className="d-block w-100 hover2"
              src={image3}
              alt="First slide"
              style={{ transition: "0.3s" }}
              style={{borderRadius:'0px'}}
              // height="400px !important"
              // width="100%"
            />
          </Grid>
          <Grid item sm={6}>
            <img
              className="d-block w-100 hover2"
              src={image3}
              alt="First slide"
              style={{ transition: "0.3s" }}
              style={{borderRadius:'0px'}}
              // height="400px !important"
              // width="100%"
            />
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <Grid item sm={6}>
            <img
              className="d-block w-100 hover2"
              src={image3}
              alt="First slide"
              style={{ transition: "0.3s" }}
              style={{borderRadius:'0px'}}
              // height="400px !important"
              // width="100%"
            />
          </Grid>
          <Grid item sm={6}>
            <img
              className="d-block w-100 hover2"
              src={image3}
              alt="First slide"
              style={{ transition: "0.3s" }}
              style={{borderRadius:'0px'}}
              // height="400px !important"
              // width="100%"
            />
          </Grid>
        </Grid>
      </Grid>
      <Footer/>
    </div> 
  );
};

export default EventHub;
