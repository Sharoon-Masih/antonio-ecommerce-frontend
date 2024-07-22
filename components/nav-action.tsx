'use client'
import React, { useEffect, useState } from 'react'
import Button from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { useCartModal } from '@/hooks/use-cart-modal'
import { useRouter } from 'next/navigation'

const NavAction = () => {
// As it is a client component so later on we will render cart here which can cause hydration errors, therefore for handling i have done the work below:

const [isMounted,SetisMounted] = useState(false);
const {items} = useCartModal();
const router = useRouter();
useEffect(() => {
  SetisMounted(true);
}, [])

if(!isMounted){
    return null;
}
return (
<div className='ml-auto flex items-center gap-x-4'>
    <Button 
    className='flex items-center rounded-full px-4 py-2 bg-black'
    onClick={()=>{router.push('/cart')}}>
        <ShoppingBag
        size={20}
        color='white'/>
        <span className='ml-2 text-white font-medium text-sm'>{items.length}</span>
    </Button>
</div>
)
}

export default NavAction