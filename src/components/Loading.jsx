import Container from '@mui/material/Container'
import Skeleton from '@mui/material/Skeleton'
import Paper from '@mui/material/Paper'
const Loading = () => {
	return (
		<Container>
			<Paper
				sx={{
					display: 'flex',
					padding: '32px',
					gap: '16px',
				}}
			>
				<Skeleton
					animation='wave'
					variant='rectangular'
					width={200}
					height={250}
					sx={{
						borderRadius: '8px',
					}}
				/>
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'center',
						gap: '16px',
					}}
				>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width='80%'
						height={15}
					/>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width='60%'
						height={10}
					/>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width='50%'
						height={10}
					/>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width='40%'
						height={10}
					/>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width='30%'
						height={10}
					/>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width='20%'
						height={10}
					/>
					<Skeleton
						animation='wave'
						variant='rectangular'
						width='10%'
						height={10}
					/>
				</Container>
			</Paper>
		</Container>
	)
}

export default Loading
