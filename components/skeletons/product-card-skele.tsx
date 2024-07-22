import React from 'react'

const ProductCardSkele = () => {
    return (
        <div className='border rounded-xl flex items-center justify-center p-3 bg-white animate-pulse'>
            <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
            <div className="flex flex-col gap-2">
                <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
            </div>

        </div>
    )
}

export default ProductCardSkele
