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
        let toyUnitsQ = get().toyUnitsQ
        let getTotalAmount = get().getTotalAmount
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === toyObject.id) {
                cartItems[i].quantity++ 
                set({toyUnitsQ: toyUnitsQ++ + 1})
                getTotalAmount()
                // console.log(cartItems)
                // console.log(toyUnitsQ)
                return
            }
        }
        cartItems.push(toyObject)
        set({toyUnitsQ: toyUnitsQ++ + 1})
        getTotalAmount()
        // console.log(cartItems)
        // console.log(toyUnitsQ)
    },
    getTotalAmount: () => {
        let cartItems = get().cart
        let totalAmount = cartItems?.map(item=> item.price * item.quantity).reduce((x, y) => x + y, 0)
        set({totalAmount: totalAmount})
        // console.log(totalAmount)
    }, 
    incrementItemQ: () => {

    },
    decrementItemQ: () => {

    },
    removeCartItem: () => {

    },
    clearStore: () => {
        set({}, true)
    }
}))
 

