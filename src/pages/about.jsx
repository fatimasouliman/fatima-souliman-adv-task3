import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import Description from "../components/description/DescriptioniInfo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<Text title={`About | ${INFO.main.title}`} description={currentSEO.description}/>
			
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<Description title={INFO.about.title} description={INFO.about.description} 
								classtitle={"title about-title"}
								classdesc={"subtitle about-subtitle"}
								 />
							
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="./IMG_٢٠٢١٠٤٠٩_٠٩٤٤١٥.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								
							</div>
						</div>
						
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
