import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './routes/Home';
import ReactMapBoxGl from './routes/ReactMapBoxGl';
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/react-mapbox-gl',
				element: <ReactMapBoxGl />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
