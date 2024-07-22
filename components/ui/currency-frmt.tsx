'use client'
import React, { FC, useEffect, useState } from 'react'
interface CurrencyFormatterProps {
    value: number
}

const CurrencyFormatter:FC<CurrencyFormatterProps> = ({value}) => {

const [isMounted,SetisMounted] = useState(false)

useEffect(()=>{
    SetisMounted(true)
},[])

if(!isMounted){
    return null
}

const CurrencyFrmt = new Intl.NumberFormat('en-US',{
    currency:"USD",
    style:"currency"
}) 
return (
    <strong className='font-bold'>
      {CurrencyFrmt.format(value)}
    </strong>
  )
}

export default CurrencyFormatter
