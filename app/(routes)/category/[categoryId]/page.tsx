import getColor from '@/actions/get-color';
import getProduct from '@/actions/get-product';
import getSingleCategory from '@/actions/get-singleCategory';
import getSize from '@/actions/get-size';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import ProductCardSkele from '@/components/skeletons/product-card-skele';
import Container from '@/components/ui/container';
import Filter from '@/components/ui/filter';
import MobileFilter from '@/components/ui/mobilefilter';
import ProductCard from '@/components/ui/product-card';
import React, { FC, Suspense } from 'react'

export const revalidate = 0;

interface CategoryPageProps {
    params: { categoryId: string };
    searchParams: { sizeId: string, colorId: string }
}
const CategoryPage: FC<CategoryPageProps> = async ({ params, searchParams }) => {

    const product = await getProduct({
        categoryId: params.categoryId,
        sizeId: searchParams.sizeId,
        colorId: searchParams.colorId
    })

    const sizes = await getSize();
    const colors = await getColor();
    const category = await getSingleCategory(params.categoryId)
    console.log(category)
    return (
        <div className='bg-white'>
            <Container>
                <Billboard data={category.billboard} />
                <div className='px-4 sm:px-6 lg:px-8 pb-24'>
                    <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
                    {/* mobile filters */}
                        <div className='block lg:hidden'>
                        <MobileFilter sizes={sizes} colors={colors}/>
                       </div>
                       {/* large screeen filters */}
                        <div className='hidden lg:block border-r w-fit pr-2 '>
                            <Filter
                                name="Sizes"
                                valueKey="sizeId"
                                data={sizes} />
                            <Filter
                                name="Colors"
                                valueKey="colorId"
                                btnColor={true}
                                data={colors} />
                        </div>
                        <div className='mt-6 lg:col-span-4 lg:mt-0'>

                        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                            {product.map((item) =><Suspense fallback={<ProductCardSkele/>} key={item.id}>
                                <ProductCard data={item} key={item.id} />
                            </Suspense> )}
                        </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage
