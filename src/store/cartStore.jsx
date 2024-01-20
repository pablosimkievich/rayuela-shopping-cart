import { create } from 'zustand'
import axios from "axios"


export const useCartStore = create((set, get) => ({
    totalAmount: 0,
    toyUnitsQ: 0,
    cartItmes: [],
    addToCart: async (id) => {
        const json = await axios(`https://rayuela.onrender.com/api/products/${id}`)
        const theToy = json.data
        console.log(theToy)
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
 

