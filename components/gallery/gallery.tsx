'use client'
import React, { FC } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Image as ImgType } from '@/type'
import Image from 'next/image'
import GalleryTab from './gallerytab'

interface GalleryProps {
  images: ImgType[]
}
const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <TabGroup as='div' className={"flex flex-col-reverse"}> {/*yeh as a div ka kam kr rha hai. */}
      <div className='mx-auto mt-10 hidden sm:block w-full max-w-2xl lg:max-w-none '>
        <TabList className={"grid grid-cols-4 gap-6"}>
          {images.map((img) =>
            <GalleryTab key={img.id} image={img} />)}
        </TabList>
      </div>
      <TabPanels>
        {images.map((img) =>
          <TabPanel key={img.id}>
            <div className='aspect-square w-full h-full relative sm:rounded-md'>
              <Image
                fill
                src={img.url}
                alt=""
              />
            </div>
          </TabPanel>
        )}
      </TabPanels>
    </TabGroup>
  )
}

export default Gallery
