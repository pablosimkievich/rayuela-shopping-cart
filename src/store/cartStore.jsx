import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import axios from "axios"


export const useCartStore = create(persist((set, get) => ({
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
            }
        }
        cartItems.push(toyObject)
        set({toyUnitsQ: toyUnitsQ++ + 1})
        getTotalAmount()
    },
    getTotalAmount: () => {
        let cartItems = get().cart
        let totalAmount = cartItems?.map(item=> item.price * item.quantity).reduce((x, y) => x + y, 0)
        set({totalAmount: totalAmount})
    }, 
    incrementItemQ: () => {

    },
    decrementItemQ: () => {

    },
    removeCartItem: () => {
        
    },
    updateToyUnitsQ: () => {
        let addToCart = get().addToCart
        addToCart()
    },
    clearStore: () => {
        set({
            cart: [],
            totalAmount: 0,
            toyUnitsQ: 0
        })
    }
}),
{
    name: "cart",
    storage: createJSONStorage( () => localStorage )
}))
 

