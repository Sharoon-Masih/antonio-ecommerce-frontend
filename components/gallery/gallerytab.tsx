import { cn } from '@/lib/utils'
import { Image as Imgtype } from '@/type'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import React, { FC } from 'react'

interface GalleryTabProps {
    image: Imgtype
}
const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
return (
<Tab className={"relative aspect-square rounded-md flex items-center justify-center bg-white"}>
{({ selected }) => //yeh selected as anonymous func get hai hai or isme jo "selected" props hai wo yeh btata haka like agr 3 tab hai in our there will be imgs in form of tab button. so agr 3 img hain toh jispa click krenga wo select hojayegi toh baiscally selected prop yeh btata haka tab selected hai ya nhi.
    <div>
        <span className='h-full w-full aspect-square absolute rounded-md inset-0 overflow-hidden'>
            <Image 
            src={image.url} 
            fill 
            alt='' 
            className='object-cover object-center'/>
        </span>
        <span
        className={cn('absolute ring-offset-2 ring-2 inset-0 rounded-md',
            selected ? 'ring-black' :  'ring-transparent' //yaha be yehi ho rha hai kay wo check kr rha hai agr selected hoga toh ringblack hojaga else transparent.
        )}
        ></span>
    </div>
}
</Tab>
)
}

export default GalleryTab
