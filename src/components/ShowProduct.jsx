import PropTypes from 'prop-types'
import useFetch from '../useFetch'
import Product from './Product'
import Loading from './Loading'
import { useParams } from 'react-router-dom'

const ShowProduct = () => {
	let { id } = useParams()
	const {
		data: product,
		loading,
		error,
	} = useFetch(`https://fakestoreapi.com/products/${id}`)
	return (
		<div>
			{loading && <Loading />}
			{error && <h1>{error}</h1>}
			{product && (
				<>
					<Product product={product} />
				</>
			)}
		</div>
	)
}
ShowProduct.propTypes = {
	product: PropTypes.object,
}
export default ShowProduct
