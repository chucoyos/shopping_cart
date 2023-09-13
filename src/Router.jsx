import Nav from './components/Nav'
import ErrorPage from './components/ErrorPage'
import Products from './components/Products'
import ShowProduct from './components/ShowProduct'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Nav />,
			errorElement: <ErrorPage />,
			children: [
				{ path: '/', element: <Products /> },
				{ path: '/products/:id', element: <ShowProduct /> },
			],
		},
	])
	return <RouterProvider router={router} />
}

export default Router
