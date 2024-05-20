// Import necessary components
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Projects } from "./roots/Projects.jsx";
import { About } from "./roots/About.jsx";
import  Contact  from "./roots/Contact.jsx";
import {Home} from "./roots/Home.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
