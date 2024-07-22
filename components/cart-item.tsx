'use client'
import { Product } from '@/type'
import React, { FC } from 'react'
import { X } from 'lucide-react'
import { useCartModal } from '@/hooks/use-cart-modal'
import Image from 'next/image'
import IconBtn from './ui/icon-btn'
import CurrencyFormatter from './ui/currency-frmt'

interface CartItemProps {
    data: Product
}
const CartItem: FC<CartItemProps> = ({ data }) => {
    const cartModal = useCartModal()
return (
<li className='flex py-6 border-b'>
<div className='w-24 h-24 overflow-hidden rounded-md sm:w-48 sm:h-48 relative'>
    <Image
        src={data.images[0].url}
        fill
        alt={data.name}
        className='object-center object-cover' />
</div>
<div className='flex flex-col gap-2 items-start flex-1 ml-4 sm:ml-6 relative'>
    <div className='absolute right-0 top-0 '>
        <IconBtn
            icon={<X size={15} />}
            onClick={() => { cartModal.removeItem(data.id) }} 
            className='p-1'/>
    </div>
    <div className='pr-9 sm:grid sm:grid-cols-2 relative gap-x-6 sm:pr-0'>
        <div className='flex justify-between'>
            <p className='text-xl sm:text-2xl font-semibold truncate'>{data.name}</p>
        </div>
        <div className='flex mt-1 text-gray-500'>
            <p>{data.color.name}</p>
            <p className='ml-4 border-gray-200 border-l pl-4 '>{data.size.name}</p>
        </div>
    </div>
    <CurrencyFormatter value={data.price}/>
</div>
</li>
)
}

export default CartItem
