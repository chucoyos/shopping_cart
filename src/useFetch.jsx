import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const dataFetching = async () => {
			try {
				const response = await axios.get(url)
				setData(response.data)
				setError(null)
			} catch (error) {
				setError(error.message)
				setData(null)
			} finally {
				setLoading(false)
			}
		}
		dataFetching()
	}, [url])
	return { data, loading, error }
}

export default useFetch
