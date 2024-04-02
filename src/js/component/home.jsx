import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Footer from "./footer";


//create your first component
const Home = () => {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>

      <div>
        <Jumbotron />
      </div>

      <div class="row">
        <div class="col ">
          <Card />
        </div>
        <div class="col">
          <Card />
        </div>
        <div class="col ">
          <Card />
        </div>
        <div class="col">
          <Card />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
