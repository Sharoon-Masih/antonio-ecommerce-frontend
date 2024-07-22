import { Product } from '@/type'
import React, { FC, Suspense } from 'react'
import ProductCard from './ui/product-card'
import NoResult from './ui/noresult'
import ProductCardSkele from './skeletons/product-card-skele'

interface ProductProps {
  title: string,
  items: Product[]
}
const ProductList: FC<ProductProps> = ({ title, items }) => {
  return (
    <div className='space-y-8 '>
      <h3 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{title}</h3>
      {items.length === 0 && <NoResult />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {items.map((item) => <Suspense fallback={<ProductCardSkele />} key={item.id}>
          <ProductCard data={item}  />
        </Suspense>)}
      </div>
    </div>
  )
}

export default ProductList
