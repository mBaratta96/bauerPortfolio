import React, { Fragment } from "react";
import classes from "./Preview.module.scss";
import { useSpring, animated } from "react-spring";

interface previewProps {
	setSlide: React.Dispatch<React.SetStateAction<number>>;
	children: string[];
}

const maxNumItems = 10;
const columnOffset = 2;

const getInitialColumn = (imagesLength: number): number => {
	return Math.floor(maxNumItems / 2 - imagesLength / 2 + columnOffset);
};

const Preview = (props: previewProps): JSX.Element => {
	const { setSlide, children: images } = props;
	const initialColumn = getInitialColumn(images.length);
	const previewContent = images.map(
		(image: string, index: number): JSX.Element => {
			const [{ scale }, set] = useSpring(() => ({
				scale: 1,
				delay: 50,
			}));
			return (
				<div
					key={index}
					className={classes.image}
					onMouseEnter={() => set({ scale: 1.1 })}
					onMouseLeave={() => set({ scale: 1 })}
					onClick={() => setSlide(index)}
					style={{
						gridColumnStart: initialColumn + index,
					}}
				>
					<animated.img
						style={{ scale }}
						src={new URL(image, import.meta.url).href}
					></animated.img>
				</div>
			);
		}
	);
	return <Fragment>{previewContent}</Fragment>;
};

export default Preview;
