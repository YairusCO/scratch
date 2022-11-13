import Header from './Header'
import './Header.scss'
import { inject, observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

export default inject(({}) => ({
	//prop: store.action
}))(observer(withTranslation()(Header)))
