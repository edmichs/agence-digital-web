'use client'

import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

import IconButton from '@/components/ui/IconButton'
import { formatPrice } from '@/lib/utils'
import useCart from '@/hooks/useCart'
import { ProductType } from '@/types/types'

interface ProductCardProps {
  product: ProductType 
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cart = useCart()
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    cart.addItem(product)
  }

  return (
    <div className='group/card shadow-lg border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-4 h-full'>
      <Link
        href={`${product.id}/productId=${product.id}`}
      >
        {/* Images and Actions */}
        <div className='aspect-square m-3 rounded-2xl bg-gray-100 relative'>
          <Image
            // @ts-ignore
            src={product.thumbnail}
            fill
            sizes='200'
            // @ts-ignore
            alt={product.title}
            className='aspect-square object-cover rounded-2xl'
          />
        </div>
        <div className='px-4 space-y-3 pb-6'>
          <div className='space-y-1'>
            {/* Product Name */}
            <p className='text-sm text-gray-500'>{product.category?.name}</p>
            <p
              className='font-semibold group-hover/card:text-emerald-800 text-lg truncate'
              title={product.title}
            >
              {product.title}
            </p>
          </div>
          <div className='flex items-center justify-between'>
            {/* Price */}
            <div className='font-semibold text-emerald-700'>
              {product.price} €
            </div>
            <div className='flex justify-center group/icon'>
              <IconButton
                aria-label='add-to-cart'
                className='bg-emerald-50 group-hover/icon:bg-emerald-500'
                onClick={onAddToCart}
                icon={
                  <ShoppingCart
                    size={20}
                    className='text-emerald-600 group-hover/icon:text-emerald-50'
                  />
                }
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
