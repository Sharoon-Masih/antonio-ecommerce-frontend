import React, { useEffect } from 'react'
import CurrencyFormatter from './ui/currency-frmt'
import Button from './ui/button'
import { useCartModal } from '@/hooks/use-cart-modal'
import { useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'
import axios from 'axios'

const Summary = () => {
    const cartModal = useCartModal();
    const searchParams = useSearchParams();
    const totalPrice = cartModal.items.reduce((prev, curr) => prev + Number(curr.price), 0)

    useEffect(() => { //yeh basic iss liya kia hai taka yeh pta chl jaye kay agr searchParams ma "sucess" hai toh payment completed or cart be empty hojaye else payment not processed.
        if (searchParams.get('success')) {
            toast.success('payment completed');
            cartModal.removeAll();
        }
        if (searchParams.get('canceled')) {
            toast.error('something went wrong');
        }
    }, [searchParams, cartModal.removeAll]) //or yeh srf tab tab run hoga jab serachparams ya .removeAll method execute hoga.

    const onCheckout = async () => { //yeh tab invoke hoga jab checkout pa click kreinga.

        // below we are sending post req at checkout endpoint to create product in Database.
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: cartModal.items.map((item) => item.id) //yeh iss lia map kia bcuz we have return only array with product Ids not the whole product array.
        })

        window.location = response.data.url; //or yaha par basic jo current Url hoga usko jo response.data ma "url" get hoga usse replace krdeinga. which means ka jasa hi agr response ata hai toh usma jo url hoga uspa navigate hojayenga.

    }
    return (
        <div
            className='
    mt-16
    py-6
    px-4
    bg-gray-100
    lg:col-span-5
    lg:mt-0
    sm:p-6
    lg:p-8
    text-gray-900'>
            <h2 className='text-lg  font-medium'>
                Order summary
            </h2>
            <div className='
     flex
     items-center
     justify-between
     mt-6
     border-t'>
                <div className='
        text-base 
        font-medium text-gray-900
        pt-4'>
                    Order total
                </div>
                <CurrencyFormatter value={totalPrice} />
            </div>
            <Button className='mt-6 w-full ' onClick={onCheckout}>Checkout</Button>
        </div>
    )
}

export default Summary
