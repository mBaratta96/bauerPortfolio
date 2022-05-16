import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import classes from "./Home.module.scss";
import TextArea from "../../components/TextArea";
import { Link } from "react-router-dom";
import { parse } from "papaparse";
import contentString from "./content.csv?raw";
import { sortBy } from "underscore";
import coverLetter from "./letter.pdf";
import resume from "./resume.pdf";

interface contentType {
	index: string;
	header: string;
	link: string;
	description: string;
}

const links = sortBy(
	parse(contentString, { header: true }).data as contentType[],
	["index"]
).map((row, index) => (
	<p key={index}>
		<Link to={`/${row.link}`} className={classes.textHeader}>
			{row.header}
		</Link>{" "}
		— {row.description}
	</p>
));

const Home = () => {
	const content = (
		<div>
			<h1 style={{ textAlign: "center" }}>Marco Baratta</h1>
			<h2 style={{ textAlign: "center" }}>
				Bauer - Corso in Videomaking: Produzioni Audiovisive - Portfolio
			</h2>
			<p style={{ textAlign: "center", fontStyle: "italic" }}>
				I have a sentimental inclination towards hope - Orson Welles
			</p>
			<div className={classes.documents}>
				<p>
					<a
						href={coverLetter}
						className={classes.textHeader}
						target="_blank"
						rel="noopener noreferrer"
						title="Motivational Letter"
					>
						Motivational Letter
					</a>
				</p>
				<p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={resume}
						className={classes.textHeader}
					>
						Curriculum Vitae
					</a>
				</p>
			</div>
			<div className={classes.textLinks}>
				{links[0]}
				<h2 style={{ textAlign: "center" }}>My Projects</h2>
				{[links[1], links[2]]}
			</div>
			<div className={classes.contact}>
				<div className={classes.social}>
					<a href="https://github.com/mBaratta96">
						<FiGithub size="2em" />
					</a>
					<a href="https://www.linkedin.com/in/mbaratta96/">
						<FiLinkedin size="2em" />
					</a>
					<a href="https://www.instagram.com/marco_baratta_/">
						<FiInstagram size="2em" />
					</a>
				</div>
				<p>marcobaratta96@gmail.com</p>
			</div>
		</div>
	);
	return (
		<div className={classes.root}>
			<div className={classes.textWrapper}>
				<TextArea>{content}</TextArea>
			</div>
		</div>
	);
};

export default Home;
