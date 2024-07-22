import getProduct from '@/actions/get-product';
import getSingleProduct from '@/actions/get-singleproduct';
import Gallery from '@/components/gallery/gallery';
import Info from '@/components/info';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React, { FC } from 'react'

interface SingleProductPageProps {
  params: {
    productId: string
  }
}
const SingleProductPage: FC<SingleProductPageProps> = async ({ params }) => {
  const productData = await getSingleProduct(params.productId)

  const allSuggestedProduct = await getProduct({
    categoryId: productData.category.id
  })

  const filteredSuggestedProduct = allSuggestedProduct.filter((product)=> product.id !== params.productId) //yeh iss lia kia haka taka jo product currently open hai wo related product ma show na ho, baki uska ilawa saray show hon.
  return (
    <div className='bg-white'> {/*yeh wali div iss lia lgaty hain ta kay jo overall viewport hai wo white hojya mtlb kay agr direct container apply kreinga toh uski max width just 1280px hi which means kay within that area srf kam hoga baki sides work ma nhi hongi.toh issi lia jab yeh apply kia toh iska mtlb haka pura page bg-white hoga. */}
      <Container>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 py-10'>
            <div><Gallery images={productData.images}/></div>
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              <Info data={productData}/>
            </div>
          </div>
          <hr />
          <div className='my-10'>
            <ProductList items={filteredSuggestedProduct} title='Related' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SingleProductPage
