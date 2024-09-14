'use client'

import React, { useContext, useState } from 'react'
import { SlBag } from 'react-icons/sl'
import { FiMenu } from 'react-icons/fi'
import SearchForm from './SearchForm'
import CategryNavMobile from './CategryNavMobile'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import Cart from './Cart'
import { CartContext } from '@/context/CartContext'

const Header = () => {
	const { isOpen, setIsOpen } = useContext(CartContext)
	const [catNavMobile, setCatNavMobile] = useState(false)
	return (
		<header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>
			<div className='container'>
				<div className='flex gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
					{/* menu */}
					<div
						onClick={() => setCatNavMobile(true)}
						className='text-3xl xl:hidden cursor-pointer '
					>
						<FiMenu />
					</div>
					{/* CategryNavMobile */}
					<div
						className={`${
							catNavMobile ? 'left-0' : '-left-full'
						} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200 `}
					>
						<CategryNavMobile setCatNavMobile={setCatNavMobile} />
					</div>
					{/* logo */}
					<Link href='/'>
						<Image src={Logo} alt='logo' />
					</Link>
					{/* search form - show on desktop only */}
					<div className='hidden w-full xl:flex xl:max-w-4xl '>
						<SearchForm />
					</div>
					{/* phone & cart */}
					<div className='flex items-center gap-x-3'>
						{/* phone */}
						<div className='hidden xl:flex uppercase'>
							Need help ? 011 526 40 142
						</div>
						{/* cart icon */}
						<div
							onClick={() => setIsOpen(!isOpen)}
							className='relative cursor-pointer '
						>
							<SlBag className='text-2xl' />
							{/* amount */}
							<div className='bg-accent text-primary absolute w-6 h-6 rounded-full top-3 -right-1 text-xs flex items-center justify-center font-bold tracking-tighter'>
								2
							</div>
						</div>
						{/* cart */}
						<div
							className={`${
								isOpen ? 'right-0' : '-right-full'
							} bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
						>
							<Cart />
						</div>
					</div>
				</div>
				{/* search form - show on mobile only */}
				<div className='xl:hidden'>
					<SearchForm />
				</div>
			</div>
		</header>
	)
}

export default Header
