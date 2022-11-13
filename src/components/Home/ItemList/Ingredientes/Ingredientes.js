import React from 'react'
import {
	Grid,
	Typography,
	CardActions,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Button,
} from '@mui/material'

import img from './cake.jpg'
const Ingredientes = ({handleClick, product, idx, t }) => {
	const { item } = product
	return (
		<Grid className="ingredientes" data-testid="Ingredientes">
			<Card>
				<CardHeader title={item} />
				<CardMedia component="img" height="194" image={img} alt="Paella dish" />
				<CardActions>
					<Button size="large" color="primary" onClick={ ()=>{
handleClick(item)
					}} >
						add
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default Ingredientes
