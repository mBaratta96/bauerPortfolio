import React, { Fragment } from "react";
import VideoJS from "../../components/VideoJS";
import titleImage from "./images/caroAmicoTitle.webp";
import synopsis from "./images/synopsisCaroAmico.webp";
import Slide from "../../components/Slide";
import classes from "./Projects.module.scss";
import contentString from "./content.csv?raw";
import { parse } from "papaparse";
import { sortBy } from "underscore";

interface shortFilmType {
	index: string;
	title: string;
	description: string;
}

const sceneNumber = 5;

const titleSlide = {
	slide: <img src={titleImage}></img>,
	preview: synopsis,
};

const content = sortBy(
	parse(contentString, { header: true, newline: "\n" }).data as shortFilmType[],
	["index"]
).map((data, index) => {
	return (
		<Fragment key={index}>
			<h2>{data.title}</h2>
			{data.description.split("\\n").map((str, index) => (
				<p key={index} dangerouslySetInnerHTML={{ __html: str }} />
			))}
		</Fragment>
	);
});

const title = (
	<Fragment>
		Caro Amico — A short film based on the correspondence between Gustav Mahler
		and Richard Strauss. Full{" "}
		<a
			target="_blank"
			rel="noreferrer noopener"
			className={classes.link}
			href="https://vimeo.com/401617585"
		>
			here
		</a>
		.
	</Fragment>
);

const subtitle = (
	<Fragment>
		Inspired by the friendship of the two composers recorded in{" "}
		<a
			target="_blank"
			rel="noreferrer noopener"
			className={classes.link}
			href="https://www.google.it/books/edition/Carteggio_1888_1911/hP0kuQAACAAJ?hl=it"
		>
			these letters
		</a>
		, I decided to shoot a short film during the first COVID-19 lockdown. This
		is a collection of clips from that film.
	</Fragment>
);

const videos = [...Array(sceneNumber).keys()].map((sceneIndex) => {
	const path = new URL(`./videos/scene${sceneIndex + 1}.mp4`, import.meta.url)
		.href;
	const videoJsOptions = {
		controls: true,
		responsive: true,
		fill: true,
		sources: [
			{
				src: path,
				type: "video/mp4",
			},
		],
	};
	return {
		slide: <VideoJS options={videoJsOptions} />,
		preview: new URL(
			`./images/caroAmicoPreview${sceneIndex + 1}.webp`,
			import.meta.url
		).href,
	};
});

const ShortFilm = () => {
	return (
		<Fragment>
			<Slide
				media={[titleSlide, ...videos]}
				content={content}
				title={title}
				subtitle={subtitle}
			></Slide>
		</Fragment>
	);
};

export default ShortFilm;
