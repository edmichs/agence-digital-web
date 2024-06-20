'use client'


import { Suspense, useRef } from 'react'

import ProductCard from '@/components/cards/ProductCard'
import _ from "lodash"
import { ProductType } from '@/types/types'
import ProductCardSkeleton from '@/components/skeletons/ProductCardSkeleton';

interface ProductsListProps {
  initialProducts: any
  totalData: number
}

const ProductsList: React.FC<ProductsListProps> = ({
  initialProducts,
}) => {
  const lastPostRef = useRef<HTMLElement>(null)

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {_.map(initialProducts.products, (product: ProductType, index : number) => {
       
          return (
                <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
              <ProductCard product={product} />
            </Suspense>
           
          )
       
      })}
      
    </div>
  )
}

export default ProductsList
