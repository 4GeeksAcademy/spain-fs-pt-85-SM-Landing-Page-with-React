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
		<div className="d-flex flex-column min-vh-100">
			<Navbar />
			<div className="flex-grow-1 col-lg-7 mx-auto">
				<CardJumbotron />
				<div className="row justify-content-between">
					<CardWithImage />
					<CardWithImage />
					<CardWithImage />
					<CardWithImage />
				</div>
			</div>
			<Footer />
		</div>
	</>
	)
};

export default Home;
