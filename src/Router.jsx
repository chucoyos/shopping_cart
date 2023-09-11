import Nav from './components/Nav'
import ErrorPage from './components/ErrorPage'
import Products from './components/Products'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Nav />,
			errorElement: <ErrorPage />,
			children: [{ path: '/', element: <Products /> }],
		},
	])
	return <RouterProvider router={router} />
}

export default Router
