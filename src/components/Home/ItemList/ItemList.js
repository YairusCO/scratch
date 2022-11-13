import { Button, Grid, Typography } from '@mui/material'
import Ingredients from './Ingredientes'
const ItemList = ({itemList, addToShoppingList}) => {
	return (
		<Grid item xs={6} container className="item-list" data-testid="ItemList">
			{itemList.product?.map((product, idx) => {
						return <Ingredients product={product} idx={idx} key={idx} handleClick={addToShoppingList}/>
					})}
		</Grid>
	)
}

export default ItemList
