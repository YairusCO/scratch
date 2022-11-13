import Header from './Header'
import ItemList from './ItemList'
import AddedList from './ItemList/AddedList'
import { Button, Grid, Typography } from '@mui/material'

function Home() {
  return (
    <div className="Home">
      <div>

     <Header/>
      </div>
      <Grid container>
        <AddedList />
        <ItemList/>
      </Grid>
    </div>
  )
}

export default Home;
