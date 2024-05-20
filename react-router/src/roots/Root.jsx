import React from "react";
import { Link } from "react-router-dom";

export const Root = () => {
	return (
		<div>
			<h1>Root Page</h1>
			<Link to={"/projects"}>Go to Projects page</Link>
			<br></br>
			<Link to={"/about"}>Go to About page</Link>
		</div>
	);
};