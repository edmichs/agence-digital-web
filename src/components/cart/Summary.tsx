'use client'

import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


import { Button } from '@/components/ui/Button'
import useCart from '@/hooks/useCart'
import { formatPrice } from '@/lib/utils'

const Summary = () => {
  const session = useSession()
  const router = useRouter()
  const cart = useCart()

  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  const { mutate: onCheckout, isPending } = useMutation({
    mutationFn: async () => {
      if (!session.data?.user) {
        return router.push('/sign-in')
      }

      const productIds = cart.items.map((item) => item.id)
    },
    
    onSuccess(data) {
      cart.removeAll()
    },
  })



  return (
    <div
      className='
        mt-16
        rounded-lg
        bg-gray-50
        px-4
        py-6
        sm:p-6
        lg:col-span-5
        lg:mt-0
        lg:p-8
      '
    >
      <h2 className='text-lg font-medium text-gray-900'>Cart Summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Cart total</div>
          {formatPrice(totalPrice)} €
        </div>
        <Button
          disabled={cart.items.length === 0 || isPending}
          isLoading={isPending}
          onClick={() => onCheckout()}
          className='w-full mt-6 hover:before:-translate-x-[500px]'
        >
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default Summary
