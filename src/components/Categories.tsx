'use client'

import { ArrowRight } from 'lucide-react'
import { Suspense } from 'react'
import {  ProductType } from '@/types/types'
import _ from 'lodash'
import ProductCard from './cards/ProductCard'
import ProductCardSkeleton from './skeletons/ProductCardSkeleton'

interface CategoryProps {
  products: any
}
const Categories =  ({products} : CategoryProps) => {

  return (
    <section
      id='categories'
      aria-labelledby='categories-heading'
      className='space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28'
    >
      <div className='flex items-end justify-between'>
        <div className='flex flex-col space-y-4'>
          <h2 className='text-3xl md:text-5xl text-start text-emerald-600 font-bold leading-[1.1]'>
            Featured Products 
          </h2>
          <h3 className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            Find the best products from all categories
          </h3>
        </div>
        <a
          href='/products'
          className='hidden md:flex gap-1 text-emerald-700 hover:translate-x-1 hover:text-emerald-600 transition-all'
        >
          View All <ArrowRight />
        </a>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {_.map(_.slice(products.products, 0, 4), (product : ProductType, index : number) => {
          return  <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
          <ProductCard product={product} />
        </Suspense>
        })}
      </div>
    </section>
  )
}

export default Categories
