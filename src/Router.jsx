import Nav from './components/Nav'
import ErrorPage from './components/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = () => {
	const router = createBrowserRouter([
		{ path: '/', element: <Nav />, errorElement: <ErrorPage /> },
	])
	return <RouterProvider router={router} />
}

export default Router
