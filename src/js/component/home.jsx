import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./card";

import { App, Car2, Person } from "./card2";

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
          <Card titulo="holiii" mensaje="adios"/>
        </div>
        <div class="col ">
          <Card titulo="byeeee"/>
        </div>
        <div class="col">
          <Card />
        </div>
      </div>

      <div>
        
        <App/>
        
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
