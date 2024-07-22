'use client'
import { Color, Size } from '@/type'
import React, { FC, useState } from 'react'
import Button from './button';
import { CrossIcon, PlusIcon, X } from 'lucide-react';
import { Dialog, DialogPanel } from '@headlessui/react';
import Filter from './filter';

interface MobileFilterProps {
    sizes:Size[];
    colors:Color[];
}
const MobileFilter:FC<MobileFilterProps> = ({sizes,colors}) => {

  const [open,setopen] = useState(false);
  const onOpen = () => setopen(true);
  const onClose = () => setopen(false);
  return (
    <>
    <Button className='flex items-center justify-center gap-2' onClick={onOpen}>
      fllters
      <PlusIcon/>
    </Button>
    <Dialog as='div' open={open} onClose={onClose} className="relative z-40 lg:hidden">
      {/* background shade */}
      <div className='bg-black fixed inset-0 bg-opacity-25'></div> {/*acha basic jo inset property hai yeh agr apply hogi toh hi background shade appear hoga ab asal may yeh without iska iss lia shade nhi nazar aa rha bcuz humna position nhi set ki kay liketop,left,right,bottom sa kya space ho iss lia wo apply toh ho rha hai par viewport ma nhi toh iss lia humna jab inset-0 kia toh wo yeh define krta hai kay top,left,right,bottom sab pa space 0 rahega which means kay ab wo viewport ma show hoga. otherwise hum top=0,left=0,right=0,bottom=0 yun be krstay hain.*/}
      <div className='fixed  inset-0  flex z-40'>
        <DialogPanel>
          <div className='bg-white h-full relative max-w-xs overflow-y-auto ml-auto flex flex-col w-[280px] pb-6 py-4 shadow-xl'>
            {/* close btn */}
            <Button className='absolute top-2 right-2 border-gray-300 border-2 rounded-md flex justify-center items-center p-1 bg-white' onClick={onClose}>
              <X size={18} color='black'/>
            </Button>
          {/* adding filter */}
          <div className='p-4'>
            <Filter
            name='Sizes'
            valueKey='sizeId' 
            data={sizes}/>
            <Filter
            name='Colors'
            valueKey='colorId'
            data={colors}
            btnColor/>
          </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
    </>
  )
}

export default MobileFilter
