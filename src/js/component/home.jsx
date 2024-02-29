import React from "react";

//include images into your bundle

import Navbar from "./navbar";
import Jumbotron from "./jumbotrom";
 import Card from "./card";
 import Footer from "./footer";

 
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
				<div className="container text-center">

				<Jumbotron/></div>
				<div className="container text-center">
					<div className="row">
						<div className="col-md "><Card />
						</div>
						<div className="col-md "><Card />
						</div>
						<div className="col-md "><Card />
						</div>
						<div className="col-md "><Card />
						</div>
					</div>
				</div>
			
			 <Footer/>
			
			
		
			
			
		
		</>
		
	);
};

export default Home;
