import React, { Fragment, Suspense } from "react";
import classes from "./Preview.module.scss";
import { useSpring, animated } from "react-spring";
// useImage for more efficient image loading
import { useImage } from "react-image";
import { ImSpinner2 } from "react-icons/im";

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
			const Image = () => {
				const { src } = useImage({
					srcList: new URL(image, import.meta.url).href,
				});
				return <animated.img style={{ scale }} src={src} />;
			};
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
					<Suspense
						fallback={
							<div>
								<ImSpinner2 size="2em" />
							</div>
						}
					>
						<Image />
					</Suspense>
				</div>
			);
		}
	);
	return <Fragment>{previewContent}</Fragment>;
};

export default Preview;
