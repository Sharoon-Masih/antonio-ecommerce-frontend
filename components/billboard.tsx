import { Billboard as BillboardType } from '@/type'
import React from 'react'

interface BillboardProps {
    data:BillboardType
}
const Billboard:React.FC<BillboardProps> = ({data}) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 overflow-hidden rounded-xl'>
        <div
        className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden p-3' 
        style={{backgroundImage:`url(${data?.imageUrl})`}}>
            <div className='flex items-center justify-center flex-col gap-y-8 h-full w-full text-center'>
              <div className='font-bold text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl '>
                {data?.label}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billboard