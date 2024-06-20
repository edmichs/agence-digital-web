import Filter from '@/components/Filter'
import { Heading } from '@/components/Heading'
import ProductsList from '@/components/ProductsList'
import _ from "lodash"

const Products = async ({
  searchParams,
}: {
  searchParams: { category: string }
}) => {
  let products
  let totalProducts

  if (searchParams.category) {
    const productsWithCategory = await fetch(`https://dummyjson.com/products/category/${searchParams.category}&order=desc&limit=10`) 
    products = await productsWithCategory.json();
  } else {
    const productsWithoutCategory = await fetch('https://dummyjson.com/products')

    products = await productsWithoutCategory.json()
  }
  const response = await fetch('https://dummyjson.com/products/categories')
  const categories = await response.json()

  return (
    <div className='flex flex-col py-6 sm:py-10 px-4 sm:px-6 lg:px-8'>
      <Heading
        title="Products"
        description='Explore all products from around the world'
      />
      <Filter categories={categories} className='mt-8 sm:mt-10 mb-4 sm:mb-6' />
      <ProductsList initialProducts={products} totalData={products.total} />
    </div>
  )
}

export default Products
