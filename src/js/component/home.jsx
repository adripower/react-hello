import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotrom";
 import Card from "./card";

 
//create your first component
const Home = () => {
	return (
		<><Navbar /><div className="text-center">
			<Jumbotron/>
			 <Card/> 
			
			
		
			
			
		</div>
		</>
		
	);
};

export default Home;
