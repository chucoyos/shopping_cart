import Paper from '@mui/material/Paper'
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
	const [{ cart }] = useOutletContext()
	return (
		<Container
			sx={{
				display: 'flex',
				gap: '32px',
				flexWrap: 'wrap',
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
							<Paper
								key={product.id}
								sx={{ display: 'flex', gap: '16px', padding: '16px' }}
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
									}}
								>
									<h3>{product.title}</h3>
									<p>${product.price}</p>
								</Box>
							</Paper>
						)
					})}
				</Box>
			</Box>
			{cart.length > 0 && (
				<Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							'@media (max-width: 800px)': {
								width: '100%',
								justifyContent: 'center',
								alignItems: 'center',
								marginBottom: '32px',
							},
						}}
					>
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
