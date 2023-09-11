import useFetch from '../useFetch'
import { useOutletContext } from 'react-router-dom'
const Products = () => {
	const [url] = useOutletContext()
	const { data, loading, error } = useFetch(url)
	data && console.log(data)
	loading && console.log('loading...')
	error && console.log('error message: ', error)
	return (
		<div>
			<h2>Products</h2>
			{loading && <h3>Loading...</h3>}
			{error && <h3>{error}</h3>}
			{data && data.map((product) => <h3 key={product.id}>{product.title}</h3>)}
		</div>
	)
}

export default Products
