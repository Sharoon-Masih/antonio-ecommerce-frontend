'use client'
import { usePreviewModal } from '@/hooks/use-preview-modal'
import React from 'react'
import Modal from './model/modal'
import Image from 'next/image'
import Gallery from './gallery/gallery'
import Info from './info'

const PreviewModal = () => {
  const modal = usePreviewModal()
  const productData = modal.data
  return (
    <div>
      <Modal
        open={modal.isOpen}
        onClose={modal.onClose}
      >
        <div className='grid grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 w-full'>
        <div className='sm:col-span-4 lg:col-span-5'>
          <Gallery images={productData?.images!}/>
        </div>
        <div className='sm:col-span-8 lg:col-span-7 '>
          <Info data={productData!}/>
        </div>
        </div>

      </Modal>
    </div>
  )
}

export default PreviewModal
