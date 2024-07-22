'use client'
import { Product } from '@/type'
import Image from 'next/image'
import React, { FC, MouseEventHandler } from 'react'
import IconBtn from './icon-btn'
import { Expand, ShoppingCart } from 'lucide-react'
import CurrencyFormatter from './currency-frmt'
import { useRouter } from 'next/navigation'
import { usePreviewModal } from '@/hooks/use-preview-modal'
import { useCartModal } from '@/hooks/use-cart-modal'

interface ProductCardProps {
    data: Product
}
const ProductCard: FC<ProductCardProps> = ({ data }) => {

    const router = useRouter();

    const handleCardClick = (id: string) => {
        router.push(`/product/${id}`)
    }

    const expandItem = usePreviewModal();
    const cartModal = useCartModal();

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        expandItem.onOpen(data)
    } //basic yeh jo onPreview function bnaya hai wo isi lia bnaya hai kiu kay ab jo productCard hai uss pura par onClick event laga hai which means kay agr preview ka Btn pa click kreinga toh wo event toh trigger hoga hi but uskay sth sth product-card pa bhi click hojayega, toh iss issue ko khatam krnay ka liya.

    //humna yeh function create kia jiski type MouseEventHandler rakhi jiska mtlb kay koi be mouse say event occur hoga like onClick,onMouseOver toh yeh usko catch krega or agay yeh be define krdia kay kis HTML element pa yeh MouseEventHandler hoga which Button in our case.

    //or then jab type define krni kiu zarori thi? toh wo iss liya zarori thi kiu kay humay as a 'event' argument chaiya tha taka hum uss event object sa .stopPropagation ka method extract kia taka jo event bubbling ka concept hai usko stop kr skein.

    // bcuz as we know jo event bubbling ka concept hai wo yeh kehta haka like agr parent pa eventListener laga hai or usme jo child hai uspa be eventlistener laga hai. toh jasa hi agr child pa event occur hoga toh wo check krega event listener ka liya agr usko miljayega toh trigger krdega.

    //That's kind of like event bubbling.

    // The ball is the event.
    // The stairs are the elements in your webpage.
    // When you click on the ball (the event happens on an element), it doesn't just stay there. It bounces up to the next stair (parent element), then the next, and so on until it reaches the top (the webpage itself).

    // So, event bubbling means that when something happens on an element, it also happens on its parent, grandparent, and so on, until it reaches the top of the webpage.

    const onCartClick:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cartModal.addItem(data)
    }
    return (
        <div className='border rounded-xl flex flex-col space-y-4 p-3 bg-white cursor-pointer group' onClick={() => handleCardClick(data.id)}>
            <div className='w-full h-[200px] overflow-hidden relative rounded-md bg-gray-100 aspect-square'>
                <Image
                    src={data.images?.[0]?.url}
                    fill
                    alt={data.name}
                    className='object-center object-cover aspect-square'
                />
                <div className='opacity-0 group-hover:opacity-100 absolute transition bottom-5 left-[50%] right-[50%]'>
                    <div className='flex gap-x-6 justify-center'>
                        <IconBtn
                            onClick={onPreview}
                            icon={<Expand size={20} className='text-gray-600 w-9 h-9 p-2' />} />
                        <IconBtn
                            onClick={onCartClick}
                            icon={<ShoppingCart size={20} className='text-gray-600 w-9 h-9 p-2' />} />
                    </div>
                </div>
            </div>
            {/* product info */}
            <div>
                <h2 className='text-lg font-bold'>{data.name}</h2>
                <p className='text-sm text-gray-500 font-medium'>{data.category.name}</p>
            </div>
            <CurrencyFormatter value={data.price} />
        </div>
    )
}

export default ProductCard
