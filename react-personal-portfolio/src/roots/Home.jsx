import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<h1>Sara's Personal Portfolio</h1>
			<Link to={"/projects"}><button>Projects</button></Link>
			<br></br>
			<Link to={"/contact"}><button>Contact</button></Link>
			<br></br>
			<Link to={"/about"}><button>About</button></Link>
		</div>
	);
};