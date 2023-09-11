import PropTypes from 'prop-types'
const Product = ({ product }) => {
	return (
		<div className='product'>
			<h3>{product.title}</h3>
		</div>
	)
}

Product.propTypes = {
	product: PropTypes.object,
}

export default Product
