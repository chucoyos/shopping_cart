import Nav from './components/Nav'
import ErrorPage from './components/ErrorPage'
import Products from './components/Products'
import ShowProduct from './components/ShowProduct'
import Cart from './components/Cart'
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
				{ path: '/cart', element: <Cart /> },
			],
		},
	])
	return <RouterProvider router={router} />
}

export default Router
