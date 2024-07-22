'use client'
import PreviewModal from '@/components/preview-modal'
import React, { useEffect, useState } from 'react'

const PreviewModelProvider = () => {
    const [isMounted,SetisMounted] = useState(false)

    useEffect(()=>{
        SetisMounted(true)
    })

    if(!isMounted){
        return null;
    }
  return (
   <>
   <PreviewModal/>
   </>
  )
}

export default PreviewModelProvider
