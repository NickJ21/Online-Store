import { createContext } from "react";

//research what are JS arrow functions
const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {},
})

export default DataContext;