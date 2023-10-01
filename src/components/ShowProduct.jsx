import useFetch from '../useFetch'
import Loading from './Loading'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import { useOutletContext } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

const ShowProduct = () => {
	const [like, setLike] = useState(false)
	const [isAdded, setIsAdded] = useState(false)
	const { cart, setCart } = useOutletContext()
	const handleLike = () => {
		setLike(!like)
	}
	let { id } = useParams()
	const {
		data: product,
		loading,
		error,
	} = useFetch(`https://fakestoreapi.com/products/${id}`)
	return (
		<Container
			sx={{
				padding: '32px 0',
				backgroundColor: '#f5f5f5',
				width: '100%',
			}}
		>
			{loading && <Loading />}
			{error && <h1>{error}</h1>}
			{product && (
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: '32px',
						width: '80%',
						alignItems: 'center',
						textAlign: 'center',
						backgroundColor: '#fff',
						borderRadius: '8px',

						'@media (max-width: 800px)': {
							flexWrap: 'wrap',
							justifyContent: 'center',
						},
					}}
				>
					<Box
						sx={{
							display: 'flex',
							gap: '16px',
						}}
					>
						<Typography
							variant='h5'
							component={'h1'}
							mb={4}
							sx={{
								alignSelf: 'center',
								width: '100%',
								color: '#6750A4',
							}}
						>
							{product.title}
						</Typography>
						<span
							onClick={handleLike}
							style={{ marginTop: '6px' }}
						>
							{like ? (
								<FavoriteTwoToneIcon
									sx={{
										color: '#6750A4',
									}}
								/>
							) : (
								<FavoriteBorderIcon
									sx={{
										color: '#6750A4',
									}}
								/>
							)}
						</span>
					</Box>
					<img
						src={product.image}
						alt={product.title}
						style={{ width: '250px' }}
					/>

					<Box
						mt={4}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							gap: '16px',
							borderRadius: '8px',
							padding: '16px',
							backgroundColor: '#EADDFF',
							color: '#21005D',
						}}
					>
						<Typography
							variant='body1'
							style={{ textAlign: 'start' }}
						>
							{product.description}
						</Typography>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'end',
								justifyContent: 'space-between',
								width: '100%',
								flexWrap: 'wrap',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-start',
									'@media (max-width: 800px)': {
										alignItems: 'center',
									},
								}}
							>
								<Typography variant='body1'>
									Category: {product.category}
								</Typography>
								<Box
									sx={{
										display: 'flex',
										gap: '16px',
										alignItems: 'center',
									}}
								>
									<Typography variant='h5'>${product.price}</Typography>
									<Typography
										variant='body1'
										sx={{
											color: 'success.main',
										}}
									>
										Free Shipping
									</Typography>
								</Box>
								<Box
									sx={{
										display: 'flex',
										gap: '16px',
										'@media (max-width: 800px)': {
											flexDirection: 'column',
											marginTop: '16px',
										},
									}}
								>
									<Typography
										variant='body1'
										sx={{
											mt: '4px',
										}}
									>
										{product.rating.rate}
									</Typography>
									<Rating
										name='read-only'
										value={product.rating.rate}
										readOnly
									/>
									<Typography variant='body1'>
										( {product.rating.count} )
									</Typography>
								</Box>
							</Box>
							<Box>
								<Button
									variant='contained'
									sx={{
										marginRight: '8px',
										'@media (max-width: 800px)': {
											marginBottom: '16px',
											marginTop: '16px',
											marginRight: '0px',
										},
									}}
								>
									<Link
										to='/'
										style={{
											textDecoration: 'none',
											color: 'inherit',
										}}
									>
										CONTINUE SHOPPING
									</Link>
								</Button>
								{!isAdded ? (
									<Button
										variant='contained'
										onClick={() => {
											const cartProduct = cart.find(
												(item) => item.id === product.id
											)

											if (!cart.includes(cartProduct)) {
												product.quantity = 1
												setCart([...cart, product])
												setIsAdded(true)
											} else {
												alert('This product is already in your cart')
											}
										}}
									>
										ADD TO CART
									</Button>
								) : (
									<Button
										variant='contained'
										endIcon={<ShoppingCartCheckoutIcon />}
									>
										<Link
											to='/cart'
											disabled
											style={{
												textDecoration: 'none',
												color: 'inherit',
											}}
										>
											VIEW CART
										</Link>
									</Button>
								)}
							</Box>
						</Box>
					</Box>
				</Container>
			)}
		</Container>
	)
}

export default ShowProduct
