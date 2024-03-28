import React from "react";
import  Jumbotron  from "./Jumbotron";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<div>
			<div><Navbar/></div>
			<div><Jumbotron/></div>
			<div><Card/><Card/></div>
		</div>
		</div>
			
	);
};

export default Home;
