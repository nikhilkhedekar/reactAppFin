import { createContext } from 'react'

const CartContext = createContext({
    items: [],
    totalPrice: 0,
    addItem: () => {},
    removeItem: () => {}
})

export default CartContext  