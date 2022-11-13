import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import FolderIcon from '@mui/icons-material/Folder'
import CakeIcon from '@mui/icons-material/Cake'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/material/styles'


const Demo = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
}))

const  AddedList = ({shoppingList}) => {
	
	return (
		<Grid className="added-list" data-testid=" AddedList">
			<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
				List
			</Typography>
			<Demo>
				<List >
					{shoppingList.map((value, idx) =>
						<ListItem key={idx}
							secondaryAction={
								<IconButton edge="end" aria-label="delete">
									<DeleteIcon />
								</IconButton>
							}
						>
							<ListItemAvatar>
								<Avatar>
									<CakeIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={value}
								
							/>
						</ListItem>
					)}
				</List>
			</Demo>
		</Grid>
	)
}

export default  AddedList
