import ItemList from './ItemList'
import './ItemList.scss'
import { inject, observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

export default inject(({listStore}) => ({
	itemList: listStore.itemList,
	addToShoppingList: listStore.addToShoppingList
}))(observer(withTranslation()(ItemList)))
