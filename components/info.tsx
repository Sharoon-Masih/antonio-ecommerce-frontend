import { Product } from '@/type'
import React, { FC } from 'react'
import CurrencyFormatter from './ui/currency-frmt'
import Button from './ui/button'
import { ShoppingCart } from 'lucide-react'

interface InfoProps {
    data: Product
}
const Info: FC<InfoProps> = ({ data }) => {
    return (
        <>
            <h1 className='text-3xl lg:text-4xl font-semibold'>{data.name}</h1>
            <div className='mt-3 flex items-center text-lg lg:text-xl'>
                <CurrencyFormatter value={data.price} />
            </div>
            <hr className='my-5' />
            <div className='flex text-base font-semibold  gap-3'>
                <p>Size:</p>
                <p>{data.size.name}</p>
            </div>
            <div className='mt-6  text-base font-semibold flex gap-3'>
                <p>Color:</p>
                <div className='w-6 h-6 rounded-full border border-gray-600' style={{ backgroundColor: data.color.value }}></div>
            </div>
            <div className='mt-10'>
                <Button className='rounded-full flex items-center justify-center gap-3 px-3 py-2'>
                    add to cart
                    <ShoppingCart/>
                </Button>
            </div>
        </>
    )
}

export default Info
