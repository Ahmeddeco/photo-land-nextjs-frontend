'use client'

import { CartContext } from '@/context/CartContext'
import { useContext } from 'react'
import { IoClose } from 'react-icons/io5'

const Cart = () => {
	const { setIsOpen } = useContext(CartContext)

	return (
		<aside className='w-full h-full px-4 text-white'>
			<div className=''>
				{/* close icon */}
				<div
					className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'
					onClick={() => setIsOpen(false)}
				>
					<IoClose />
				</div>
			</div>
		</aside>
	)
}

export default Cart
