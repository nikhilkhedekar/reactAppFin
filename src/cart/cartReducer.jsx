import React, { useReducer } from 'react'

import CartContext from "./cartContext";

const initialState = {
    item: [],
    totalPrice: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalPrice = state.totalPrice + action.item.price * action.item.quantity
        const existingItemIndex = state.item.findIndex(item => item.id === action.item.id);
        const existingItem = state.item[existingItemIndex];
        let updatedItems;
        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.item.quantity
            }
            updatedItems = [...state.item];
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems = state.item.concat(action.item)
        }
        return{
            item: updatedItems,
            totalPrice: updatedTotalPrice,
        }
    }
    if(action.type === 'REMOVE'){
        const existingItemIndex = state.item.findIndex(item => item.id === action.id)
        const existingItem = state.item[existingItemIndex]
        const updatedTotalPrice = state.totalPrice - existingItem.price;
        let updatedItems;
        if(existingItem === 1){
            updatedItems = state.item.filter(item => item.id !== action.id)
        }else{
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1,
            }
            updatedItems = [...state.item];
            updatedItems[existingItemIndex] = updatedItem; 
        }
        return{
            item: updatedItems,
            totalPrice: updatedTotalPrice,
        }
    } 
    return initialState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, initialState);

    const onAddHandelr = (item) => {
        dispatchCartState({
            type: 'ADD',
            item: item
        })
    }
    const onRemoveHandler = (id) => {
        dispatchCartState({
            type: 'REMOVE',
            id: id
        })
    }

    const cartContext = {
        items: cartState.item,
        totalPrice: cartState.totalPrice,
        addItem: onAddHandelr,
        removeItem: onRemoveHandler,
    }
    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider 