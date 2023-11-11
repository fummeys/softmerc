import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Header from "./components/partials/header";
import Footer from "./components/partials/footer";

export default function App(): JSX.Element {
	return (
		<>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</>
	);
}
