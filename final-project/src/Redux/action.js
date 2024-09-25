export const fetchProducts = (products) => {
    return {
        type: "FETCH_PRODUCTS",
        payload: products
    }
}

export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

export const removeFromCart = (productId) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: productId
    }
}

export const updateQuantity = (productId, quantity) => {
    return {
        type: "UPDATE_QUANTITY",
        payload: { id: productId, quantity: quantity }
    }
}