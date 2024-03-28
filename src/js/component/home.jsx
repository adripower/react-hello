import React from "react";
import  Jumbotron  from "./Jumbotron";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<p><Jumbotron/></p>
			<p><Card/></p>
		</div>
	);
};

export default Home;
