import { Button, Container, Typography } from '@mui/material'

const Checkout = () => {
	return (
		<Container
			style={{
				display: 'flex',
				flexDirection: 'column',
				backgroundImage:
					'url(https://media.giphy.com/media/ZYRAHvl8pCGMoaS8Cl/giphy.gif)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100vh',
			}}
		>
			<Typography
				variant='h2'
				sx={{ textAlign: 'center', marginTop: '16px' }}
			>
				Congratulations, your order will arrive shortly!
			</Typography>
			<Typography
				variant='h4'
				sx={{ textAlign: 'center', marginTop: '32px' }}
			>
				Thank you for shopping with us!
			</Typography>
			<Button
				variant='contained'
				sx={{ marginTop: '32px', alignSelf: 'center' }}
				href='/'
			>
				Continue shopping
			</Button>
		</Container>
	)
}
export default Checkout
