import Nav from './components/Nav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = () => {
	const router = createBrowserRouter([{ path: '/', element: <Nav /> }])
	return <RouterProvider router={router} />
}

export default Router
