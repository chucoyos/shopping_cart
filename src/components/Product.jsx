import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'
const Product = ({ product }) => {
	return (
		<Link
			to={`/products/${product.id}`}
			style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
		>
			<Paper
				sx={{
					display: 'flex',
					padding: '32px',
					width: '98%',
					gap: '16px',
					'@media (max-width: 800px)': {
						flexWrap: 'wrap',
						justifyContent: 'center',
					},
				}}
			>
				<img
					src={product.image}
					alt={product.title}
					style={{ width: '250px' }}
				/>

				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'center',
					}}
				>
					<Typography
						variant='h6'
						sx={{
							'@media (max-width: 800px)': {
								alignSelf: 'center',
							},
						}}
					>
						{product.title}
					</Typography>
					<Typography variant='body1'>{product.description}</Typography>
					<Typography variant='body1'>Category: {product.category}</Typography>
					<Typography variant='body1'>${product.price}</Typography>
					<Typography variant='body1'>Votes: {product.rating.count}</Typography>
					<Rating
						name='read-only'
						value={product.rating.rate}
						readOnly
					/>
				</Container>
			</Paper>
		</Link>
	)
}

Product.propTypes = {
	product: PropTypes.object,
}

export default Product
