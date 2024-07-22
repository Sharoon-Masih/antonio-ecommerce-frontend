'use client'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import React, { FC, Fragment, ReactNode } from 'react'
import IconBtn from '../ui/icon-btn';
import { X } from 'lucide-react';

interface ModalProps {
	open:boolean;
	onClose:() => void;
	children:ReactNode
} 
const Modal:FC<ModalProps> = ({open,onClose,children}) => {
return (
<Transition show={open} appear as={Fragment}>
<Dialog onClose={onClose} as='div' className='relative z-40 '>
	{/* bg shade */}
	<div className='fixed inset-0 bg-black bg-opacity-25 '/>
	<div className='fixed inset-0 overflow-y-auto'>
		<div className='flex min-h-full items-center justify-center p-4 text-center'>
			<TransitionChild
			as={Fragment}
			enter='ease-out duration-300'
			enterFrom='opacity-0 scale-95'
			enterTo='opacity-100 scale-100'
			leave='ease-in duration-300'
			leaveFrom='opacity-100 scale-100'
			leaveTo='opacity-0 scale-95 '>
			   <DialogPanel className='w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle'>
				<div className='relative flex w-full items-center overflow-hidden bg-white px-4 pt-9 pb-4 sm:py-6 '>
				<div className='absolute right-4 top-4'>
                   <IconBtn icon={<X size={15}/>} onClick={onClose}/>
				</div>
				{children}
				</div>
			   </DialogPanel>     
			</TransitionChild>
		</div>
	</div>
</Dialog>
</Transition>
)
}

export default Modal
