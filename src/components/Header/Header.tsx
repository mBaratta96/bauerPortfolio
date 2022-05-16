import React, { useState } from "react";
import classes from "./Header.module.scss";
import HeaderLink from "./HeaderLink";

const Header = () => {
	const [displayProjects, setDisplayProjects] = useState(false);
	const projects = displayProjects && (
		<div className={classes.projects}>
			<HeaderLink submenu={true}>Caro Amico</HeaderLink>
			<HeaderLink submenu={true}>Mirrorland</HeaderLink>
		</div>
	);
	return (
		<div className={classes.root}>
			<HeaderLink route="">Home</HeaderLink>
			<HeaderLink>Inspiration</HeaderLink>
			<div
				onMouseOver={() => setDisplayProjects(true)}
				onMouseLeave={() => setDisplayProjects(false)}
			>
				<h3 style={{ marginLeft: "10px" }}>Projects</h3>
				{projects}
			</div>
		</div>
	);
};

export default Header;
