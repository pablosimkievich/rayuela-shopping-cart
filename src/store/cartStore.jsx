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
        let toyObject = {
            id: Number(id),
            img: img,
            name: name,
            price: Number(price),
            quantity: 1 
        }
        let cartItems = get().cart
        let getToyUnitsQ = get().getToyUnitsQ
        let getTotalAmount = get().getTotalAmount
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === toyObject.id) {
                cartItems[i].quantity++ 
                set({cart: cartItems})
                getTotalAmount()
                getToyUnitsQ()
                return  
            }
        }
        cartItems.push(toyObject)
        set({cart: cartItems})
        getTotalAmount()
        getToyUnitsQ()
        return
    },
    getTotalAmount: () => {
        let cartItems = get().cart
        let totalAmount = cartItems?.map(item=> item.price * item.quantity).reduce((x, y) => x + y, 0)
        return set({totalAmount: totalAmount})
    }, 
    getToyUnitsQ: () => {
        let cartItems = get().cart
        let toyUnitsQ = cartItems?.map(item => item.quantity).reduce((x, y) => x + y, 0)
        return set({toyUnitsQ: toyUnitsQ})
    },
    removeCartItem: (theToyId) => {
        let cartItems = get().cart
        let getTotalAmount = get().getTotalAmount
        let getToyUnitsQ = get().getToyUnitsQ
        let filteredCart = cartItems.filter( item => {
            return theToyId !== item.id
        })
        set({cart: filteredCart})
        getTotalAmount()
        getToyUnitsQ()
        return
    },
    updateCartItemQ: async (toyId, newQuantity) => {
        let cartItems = get().cart
        let getToyUnitsQ = get().getToyUnitsQ
        let getTotalAmount = get().getTotalAmount
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === Number(toyId)) {
                cartItems[i].quantity = Number(newQuantity) 
            }
        }
        set({cart: cartItems})
        getTotalAmount()
        getToyUnitsQ()
        // let cart = get().cart
        // console.log(cart)
        return
    },
    clearStore: () => {
        return set({
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
 

