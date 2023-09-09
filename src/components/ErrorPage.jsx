import { Button } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				marginTop: '20vh',
			}}
		>
			<Typography variant='h1'>404</Typography>
			<img
				src='https://i.imgur.com/qIufhof.png'
				alt='404'
				style={{ width: '20%' }}
			/>
			<Typography variant='h6'>
				You didn&apos;t break the internet but we can&apos;t find what your
				looking for
			</Typography>
			<Link to='/'>
				{' '}
				<Button variant='contained'>Go Home</Button>
			</Link>
		</Container>
	)
}

export default ErrorPage
