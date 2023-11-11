import { createBrowserRouter } from "react-router-dom";

import { Index } from "../components/mains";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/mission",
		element: <Index />
	},
	{
		path: "/proficiency",
		element: <Index />
	},
	{
		path: "/career",
		element: <Index />
	},
	{
		path: "/contact",
		element: <Index />
	},
	{
		path: "*",
		element: (
			<div>
				<h1>404 page not found</h1>
			</div>
		),
	},
]);

export { router };
