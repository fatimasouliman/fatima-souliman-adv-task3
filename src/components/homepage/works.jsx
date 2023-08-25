import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./"
								alt="focal x"
								className="work-image"
							/>
							<div className="work-title">Focal X Agency</div>
							<div className="work-subtitle">
								front-end devloper
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./"
								alt="focal x"
								className="work-image"
							/>
							<div className="work-title">Focal X Agency Internships v5</div>
							<div className="work-subtitle">
								supervisor
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
