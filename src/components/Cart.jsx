import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { Box, ButtonGroup } from '@mui/material'
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
				<h1>Total: ${cart.reduce((acc, curr) => acc + curr.price, 0)}</h1>
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
			</Box>
		</Container>
	)
}

export default Cart
