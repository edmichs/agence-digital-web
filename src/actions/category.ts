export async function getProductCategories () {
    const categories = await fetch('https://dummyjson.com/products/categories');
    console.log(categories);


    return await categories.json();
}

