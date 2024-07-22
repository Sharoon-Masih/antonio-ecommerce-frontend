import getBillboard from '@/actions/get-billboard'
import getProduct from '@/actions/get-product'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import React from 'react'

const HomePage =async () => { 
  const billboard = await getBillboard("64dda9fe-cdd9-4017-8034-a3021050a69b")
  const products = await getProduct({isFeatured:true})
  return (
   <Container>
    <div className='space-y-10 pb-10'>
      <Billboard data={billboard}/>
    </div>
    <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pb-10'>
      <ProductList title='Featured' items={products}/>
    </div>
   </Container>
  )
}

export default HomePage