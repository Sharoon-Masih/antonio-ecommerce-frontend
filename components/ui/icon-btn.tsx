'use client'
import { cn } from '@/lib/utils'
import React, { FC, MouseEventHandler } from 'react'

interface IconBtnProp {
onClick?:MouseEventHandler<HTMLButtonElement> //iska meaning haka basic jo onClick hai wo ek eventhandler hoga, or kis Htmlelement pa attach hoga wo agay in bracket may <> define kia hai and in our case  it is button.
icon:React.ReactElement //ReactElement ka mtlb hai wo element jo JSX return kray usko ReactElement kehtay hain.
className?:string

}
const IconBtn:FC<IconBtnProp> = ({icon,className,onClick}) => {
  return (
    <button 
    onClick={onClick}
    className={cn(
        'rounded-full flex items-center justify-center bg-white hover:scale-110  transition shadow-md',
        className
    )}>
        {icon}
    </button>
  )
}

export default IconBtn
