import { create } from 'zustand'
import axios from "axios"


export const useCartStore = create((set, get) => ({
    totalAmount: 0,
    toyUnitsQ: 0,
    cart: [],
    addToCart: async (toyId) => {
        const json = await axios(`https://rayuela.onrender.com/api/products/${toyId}`)
        const theToy = json.data
        const { id, img, name, price } = theToy
        const toyObject = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: 1 
        }
        const cartItems = get().cart
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === toyObject.id) {
                cartItems[i].quantity++ 
                return
            }
        }
        cartItems.push(toyObject)
        console.log(cartItems)
    },
    getTotalAmount: () => {

    }, 
    getToyUnitsQ: () => {

    },
    incrementItemQ: () => {

    },
    decrementItemQ: () => {

    },
    removeCartItem: () => {

    },
    clearStore: () => {

    }
}))
 

