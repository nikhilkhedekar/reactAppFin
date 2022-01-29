import { combineReducers, createStore } from "redux";

export const ADDITEM = 'ADDITEM';
export const REMOVEITEM = 'REMOVEITEM'

export const addItemDispatcher = (item) => {
    return {
        type: ADDITEM,
        item: item,
    }
}

export const removeItemDispatcher = (id) => {
    return {
        type: REMOVEITEM,
        id: id,
    }
}

export const initialState = {
    items: [],
    totalPrice: 0,
}

export const cartReducer = (state = initialState, action) => {
    if (action.type === ADDITEM) {
        const updatedTotalPrice = state.totalPrice + action.item.productPrice * action.item.productQuantity;
        const existingCartItemIndex = state.items.findIndex(product => product.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                productQuantity : existingCartItem.productQuantity + action.item.productQuantity,
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }
    if (action.type === REMOVEITEM) {
        const existingCartItemIndex = state.items.findIndex(product => product.id === action.id)
        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalPrice = state.totalPrice - existingItem.productPrice
        let updatedItems
        if (existingItem.productQuantity === 1) {
            updatedItems = state.items.filter(product => product.id !== action.id)
        } else {
            const updatedItem = {
                ...existingItem,
                productQuantity : existingItem.productQuantity - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }
    return initialState
}

export const store = createStore(cartReducer)