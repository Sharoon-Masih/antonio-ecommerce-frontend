'use client'
import CartItem from '@/components/cart-item';
import Summary from '@/components/summary';
import Container from '@/components/ui/container';
import { useCartModal } from '@/hooks/use-cart-modal'
import { ShoppingBasketIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const CartPage = () => {
    const [isMounted,SetisMounted] = useState(false);
    const cartModal = useCartModal();

    useEffect(()=>{
        SetisMounted(true);
    },[])

    if(!isMounted){
        return null;
    }

return (
<div className='bg-white'>
    <Container>
        <div className='px-4 sm:px-6 lg:px-8 py-16'>
            <h1 className='text-3xl font-bold'>Shopping Cart</h1>
            {cartModal.items.length <= 0 && <div className='px-4 pt-20 flex flex-col items-center justify-center gap-2'>
                <ShoppingBasketIcon size={100} />
                <p className='text-base font-medium text-neutral-500'>No item added to cart.</p> 
            </div>}
            <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                <div className='lg:col-span-7'>
                    <ul>
                        {cartModal.items?.map((item) =>
                            <CartItem
                                key={item.id}
                                data={item}
                            />)}
                    </ul>
                </div>
                {cartModal.items.length > 0 && <Summary/>}
            </div>
        </div>
    </Container>
</div>
)
}

export default CartPage
