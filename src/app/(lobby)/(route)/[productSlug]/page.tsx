import Info from '@/components/Info'
import Gallery from '@/components/gallery/Gallery'

const ProductDetails = async ({
  searchParams,
}: {
  searchParams: { productId: string }
}) => {
  const product = await fetch(`https://dummyjson.com/products/${searchParams.productId}`)
  const response = await product.json()

  return (
    <div className='p-4 sm:p-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:items-start lg:gap-x-8'>
        {/* @ts-expect-error */}
        <Gallery images={response?.products?.images} />
        <Info product={response?.products!} />
      </div>
    </div>
  )
}

export default ProductDetails
