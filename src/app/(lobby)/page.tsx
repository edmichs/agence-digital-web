import { getProducts } from '@/actions/search-products'
import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import Products from '@/components/Products'

export default async function Lobby() {
  const products  = await getProducts()

  console.info("categories", products)

  return (
    <main>
      <div className='max-w-7xl mx-auto'>
        <Categories products={products}/>
        <Products products={products}/>
      </div>
    </main>
  )
}
