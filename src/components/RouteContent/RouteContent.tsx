import React from "react";
import Home from "../../routes/Home";
import Projects from "../../routes/Projects";
import { Routes, Route } from "react-router-dom";
import classes from "./RouteContent.module.scss";
import Inspiration from "../../routes/Inspiration";

const RouteContent = () => {
	return (
		<div className={classes.root}>
			<Routes>
				<Route path="/caroamico" element={<Projects.ShortFilm />} />
				<Route path="/mirrorland" element={<Projects.NewShort />} />
				<Route path="/inspiration" element={<Inspiration />} />
				<Route path="/" element={<Home />} />
				<Route
					path="*"
					element={
						<div className={classes.error}>
							<h3>Oops... seems you are in the wrong place</h3>
						</div>
					}
				/>
			</Routes>
		</div>
	);
};

export default RouteContent;
