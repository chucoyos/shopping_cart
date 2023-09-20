import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { Box, ButtonGroup, Typography } from '@mui/material'
import { KeyboardReturn } from '@mui/icons-material'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import EmptyCart from './EmptyCart'
const Cart = () => {
	const [{ cart, setCart }] = useOutletContext()
	return (
		<Container
			sx={{
				display: 'flex',
				gap: '32px',
				flexWrap: 'wrap',
				alignItems: 'flex-start',
				'&media (max-width: 800px)': { flexDirection: 'column', gap: '0' },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '16px',
					maxWidth: '70%',
					'@media (max-width: 800px)': { maxWidth: '100%' },
				}}
			>
				<h1>My Cart ({cart.length})</h1>
				{cart.length === 0 && <EmptyCart />}
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
					{cart.map((product) => {
						return (
							<Box
								key={product.id}
								sx={{
									display: 'flex',
									gap: '16px',
									padding: '16px',
									borderBottom: '.5px solid lightgray',
								}}
							>
								<img
									style={{ width: '12%' }}
									src={product.image}
									alt={product.title}
								/>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										flex: '1',
										justifyContent: 'space-between',
									}}
								>
									<Typography variant='h6'>{product.title}</Typography>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<Box>
											<Typography variant='body1'>${product.price}</Typography>
										</Box>
										<Box sx={{ position: 'relative' }}>
											<Button
												onClick={() => {
													setCart(cart.filter((item) => item.id !== product.id))
												}}
											>
												Remove
											</Button>
										</Box>
									</Box>
								</Box>
							</Box>
						)
					})}
				</Box>
			</Box>
			{cart.length > 0 && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						marginTop: '128px',
						'@media (max-width: 820px)': {
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: '32px',
							marginTop: '32px',
						},
					}}
				>
					<Box>
						<Typography
							variant='body1'
							color='success.main'
						>
							Free shipping
						</Typography>
						<Typography
							variant='h5'
							gutterBottom
						>
							Total: ${cart.reduce((acc, curr) => acc + curr.price, 0)}
						</Typography>
						<ButtonGroup
							orientation='vertical'
							aria-label='vertical contained primary button group'
							variant='contained'
						>
							<Button variant='contained'>Proceed to checkout</Button>
							<Button variant='outlined'>
								<Link
									to='/'
									style={{ textDecoration: 'none', color: 'inherit' }}
								>
									Continue shopping
								</Link>{' '}
							</Button>
						</ButtonGroup>
						<Box sx={{ display: 'flex', marginTop: '16px', gap: '8px' }}>
							<KeyboardReturn fontSize='small' />

							<Typography
								variant='body2'
								color='primary.main'
							>
								Free refunds
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', gap: '8px' }}>
							<KeyboardReturn
								fontSize='small'
								sx={{ color: 'white' }}
							/>
							<Typography variant='body2'>60 day return policy</Typography>
						</Box>
						<Box sx={{ display: 'flex', gap: '8px' }}>
							<GppGoodOutlinedIcon fontSize='small' />

							<Typography
								variant='body2'
								sx={{ color: 'primary.main' }}
							>
								Protection plan
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', gap: '8px' }}>
							<WorkspacePremiumIcon
								fontSize='small'
								sx={{ color: 'white' }}
							/>

							<Typography variant='body2'>Get what you pay for</Typography>
						</Box>
						<Box sx={{ display: 'flex', gap: '8px' }}>
							<WorkspacePremiumIcon fontSize='small' />

							<Typography
								variant='body2'
								sx={{ color: 'primary.main' }}
							>
								12 month warranty
							</Typography>
						</Box>
					</Box>
				</Box>
			)}
		</Container>
	)
}

export default Cart
