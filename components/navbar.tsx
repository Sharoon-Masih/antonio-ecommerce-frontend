import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './main-nav'
import getCategory from '@/actions/get-category'
import NavAction from './nav-action'

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategory()
return (
<div className='border-b'>
    <Container>
        <div className='h-16 px-4 sm:px-6 lg:px-8 items-center flex relative'>
            <Link href={'/'} className=' ml-4 lg:ml-0 flex gap-x-2'>
                <p className='text-xl font-bold'>
                    SHOPPY
                </p>
            </Link>
            <MainNav data={categories}/>
            <NavAction/>
        </div>
    </Container>
</div>
)
}

export default Navbar