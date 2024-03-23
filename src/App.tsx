import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { detailsLoader } from "./pages/details/detailsLoader";
import DetailsPage from "./pages/details/DetailsPage";
import HomePage from "./pages/home/HomePage";
import Root from "./pages/Root";
import { searchLoader } from "./pages/search/searchLoader";
import SearchPage from "./pages/search/SearchPage";
import { homeLoader } from "./pages/home/homeLoader";


const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			children: [
				{
					index: true,
					element: <HomePage />,
					loader: homeLoader,
				},
				{
					path: '/search',
					element: <SearchPage />,
					loader: searchLoader,
				},
				{
					path: '/packages/:name',
					element: <DetailsPage />,
					loader: detailsLoader,
				}
			]
		}
]);

const App = () => {
	return <RouterProvider router={router} />
}

export default App
