'use client'
import { cn } from '@/lib/utils'
import { Category } from '@/type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MainNavProps {
    data: Category[]
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathName = usePathname()
    const routes = data.map((route: any) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathName === `/category/${route.id}`
    }))
return (
<div>
<nav className='flex items-center mx-6 space-x-4 lg:space-x-6 overflow-x-auto'>
    {routes.map((route) =>
        <Link
            key={route.label}
            className={cn('text-sm font-medium transition-colors hover:text-black truncate', route.active ? 'text-black' : 'text-neutral-500')}
            href={route.href}>
            {route.label}
        </Link>)}
</nav>
</div>
)
}

export default MainNav