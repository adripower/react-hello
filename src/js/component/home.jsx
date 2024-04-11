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

      <div className="row">
        <div className="col ">
          <Card titulo="El principio" historia="con la practica se consigue hacer las cosas correctamente"/>
        </div>
        <div className="col">
          <Card titulo="Holiii" historia="lo entiendo pero no lo veo practico del todo"/>
        </div>
        <div className="col ">
          <Card titulo="Byeeee" historia=" practica de como utilizar los props  "/>
        </div>
        <div className="col">
          <Card titulo="Una aventura" historia="y mientras mas se practique con mas confianza tendras "/>
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
