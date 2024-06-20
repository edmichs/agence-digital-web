'use client'

import ProductCard from '@/components/cards/ProductCard'
import { ProductType } from '@/types/types'
import _ from 'lodash'

interface PopularProps {
  products: any
}
const PopularProducts = ({products}: PopularProps) => {

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {_.map(products, (product : ProductType, index : number ) => {
        console.log("products popular", product)

        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}

export default PopularProducts
