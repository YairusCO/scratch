import AddedList from './AddedList'
import './AddedList.scss'
import { inject, observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

export default inject(({listStore}) => ({
	shoppingList: listStore.shoppingList
}))(observer(withTranslation()(AddedList)))
