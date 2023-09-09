import * as React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import useFetch from '../useFetch'

export default function Nav() {
	const { data, loading, error } = useFetch(
		'https://fakestoreapi.com/products/'
	)
	data && console.log(data)
	loading && console.log('loading...')
	error && console.log(error)
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					padding: '16px 0',
				}}
			>
				<Typography sx={{ minWidth: 100 }}>Contact</Typography>
				<Typography sx={{ minWidth: 100 }}>Profile</Typography>
				<Tooltip title='Categories'>
					<Typography
						onMouseOver={handleClick}
						size='small'
						sx={{ ml: 2 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
					>
						Categories
					</Typography>
				</Tooltip>
				<Badge
					badgeContent={1}
					color='primary'
				>
					<ShoppingCartOutlinedIcon sx={{ ml: 2 }} />
				</Badge>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				sx={{
					overflow: 'visible',
					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					mt: 1.5,
					'& .MuiAvatar-root': {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
					'&:before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: 'background.paper',
						transform: 'translateY(-50%) rotate(45deg)',
						zIndex: 0,
					},
				}}
			>
				<MenuItem onClick={handleClose}>Electronics</MenuItem>
				<MenuItem onClick={handleClose}>Jewelry</MenuItem>
				<MenuItem onClick={handleClose}>Men clothing</MenuItem>
				<MenuItem onClick={handleClose}>Women clothing</MenuItem>
				<MenuItem onClick={handleClose}>Close</MenuItem>
			</Menu>
		</>
	)
}
