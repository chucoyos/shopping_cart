import useFetch from '../useFetch'
import { useOutletContext } from 'react-router-dom'
import Container from '@mui/material/Container'
import Product from './Product'
import Loading from './Loading'
const Products = () => {
	const [url] = useOutletContext()
	const { data, loading, error } = useFetch(url)
	// data && console.log(data)
	// loading && console.log('loading...')
	// error && console.log('error message: ', error)
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				flexWrap: 'wrap',
				gap: '20px',
				backgroundColor: '#f5f5f5',
				padding: '32px',
				borderRadius: '8px',
			}}
		>
			{loading && (
				<>
					<Loading />
					<Loading />
				</>
			)}
			{error && <h1>{error}</h1>}
			{data &&
				data.map((product) => (
					<Product
						key={product.id}
						product={product}
					/>
				))}
		</Container>
	)
}

export default Products
