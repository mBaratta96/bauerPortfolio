import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import classes from "./Header.module.scss";

interface HeaderLinkProps {
	children: string;
	route?: string;
	submenu?: boolean;
}

const onHoverColor = "#706f7180";
const defaultColor = "#c5c3c600";

const convertToLink = (s: string) => s.replace(/\s+/g, "").toLowerCase();

const HeaderLink = (props: HeaderLinkProps) => {
	const { children: title, route, submenu } = props;
	const [{ backgroundColor }, setColor] = useSpring(() => ({
		backgroundColor: defaultColor,
		config: config.stiff,
	}));
	const AnimatedLink = animated(Link);
	return (
		<AnimatedLink
			to={`/${route ?? convertToLink(title)}`}
			onMouseOver={() => setColor({ backgroundColor: onHoverColor })}
			onMouseLeave={() => setColor({ backgroundColor: defaultColor })}
			style={{ backgroundColor }}
			className={classes.link}
		>
			{submenu ? <h4>{title}</h4> : <h3>{title}</h3>}
		</AnimatedLink>
	);
};

export default HeaderLink;
