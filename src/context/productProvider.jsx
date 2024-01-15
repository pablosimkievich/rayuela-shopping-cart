import { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export const useProductContext = () => useContext(ProductContext)

export const ProductProvider = ({children}) => {
    const [ searchQuery, setSearchQuery] = useState('')

    const updateSearchQuery = (query) => {
        setSearchQuery(query)
    }
    return (
        <ProductContext.Provider value={{ searchQuery, updateSearchQuery }} >
            {children}
        </ProductContext.Provider>
    )
}

