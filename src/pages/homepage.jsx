import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";


import INFO from "../data/user";
import SEO from "../data/seo";
import Description from "../components/description/DescriptioniInfo";

import "./styles/homepage.css";

const Homepage = () => {
	

	const currentSEO = SEO.find((item) => item.page === "home");


	return (
		<React.Fragment>
			<Helmet>
				
				<Text title={INFO.main.title} description={currentSEO.description} />

			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					
					

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<Description title={INFO.homepage.title} description={INFO.homepage.description}
								 classtitle={"title homepage-title"}
								 classdesc={"subtitle homepage-subtitle"}
								/>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="./IMG_20210313_224437_481.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>





						<div className="homepage-after-title">


							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
