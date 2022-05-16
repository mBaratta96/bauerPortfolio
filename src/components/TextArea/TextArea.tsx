import React, { CSSProperties } from "react";
// import { animated, SpringValue } from "react-spring";
import classes from "./TextArea.module.scss";

interface TextAreaProps {
	children: JSX.Element | string;
	className?: string;
	style?: CSSProperties;
}

const TextArea = (props: TextAreaProps) => {
	const { children: content, className, style } = props;
	const rootClass = `${className ? className + " " : ""}${classes.root}`;
	return (
		<div className={rootClass} style={style}>
			<div className={classes.wrapper}>{content}</div>
			<div className={classes.borderLeft} />
			<div className={classes.borderTop} />
			<div className={classes.borderRight} />
			<div className={classes.borderBottom} />
		</div>
	);
};

export default TextArea;
