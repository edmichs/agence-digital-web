'use server'

export const getProducts = async (query?: string | null | undefined) => {
    const products = await fetch(`https://dummyjson.com/products/search?${query}`)

    return await products.json()
}
