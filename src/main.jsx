import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CssBaseline />
		<Router />
	</React.StrictMode>
)
