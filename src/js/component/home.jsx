import React from "react";

//include images into your bundle

import Navbar from "./navbar";
import Jumbotron from "./jumbotrom";
 import Card from "./card";
 import Footer from "./footer";

 
//create your first component
const Home = () => {
	return (
		<><Navbar /><div className="container text-center">
			<Jumbotron/>
			 <Card/> 
			 <Footer/>
			
			
		
			
			
		</div>
		</>
		
	);
};

export default Home;
