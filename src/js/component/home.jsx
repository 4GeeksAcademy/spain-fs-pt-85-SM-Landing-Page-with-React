import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import CardJumbotron from "./jumbotron";
import CardWithImage from "./card-with-image";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
	<>
		<Navbar />
		<div className="col-lg-7 mx-auto">
			<CardJumbotron />
			<div className="row justify-content-between">
				<CardWithImage />
				<CardWithImage />
				<CardWithImage />
				<CardWithImage />
			</div>
		</div>
		<Footer />
	</>
	)
};

export default Home;
