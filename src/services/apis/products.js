import { get } from '../http/http'

export const getProducts = async() => {
    try {
        const products = await get({url:'/api/products'})
        return products
    } catch (error) {
        console.error(error)
        throw error
    }
}

