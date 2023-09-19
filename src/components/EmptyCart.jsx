import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Paper sx={{ padding: '32px' }}>
				<ProductionQuantityLimitsIcon fontSize='large' />
				<Typography variant='h5'>Your cart is empty</Typography>
				<Typography variant='body1'>
					You have no items in your cart. Start adding items by clicking the
					button below.
				</Typography>
				<Button
					variant='contained'
					sx={{ marginTop: '16px' }}
					component={Link}
					to='/'
				>
					Continue shopping
				</Button>
			</Paper>
		</Container>
	)
}
export default EmptyCart
