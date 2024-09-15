'use client'
import { FiX } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const CategoryNavMobile = ({ setCatNavMobile }) => {
	// fetch data in client side

	const [categories, setCategories] = useState(null)
	useEffect(() => {
		async function fetchCategories() {
			let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
			let { data } = await res.json()
			setCategories(data)
		}
		fetchCategories()
	}, [])

	return (
		<nav className='w-full h-full bg-primary p-8 '>
			{/* close icon */}

			<button
				onClick={() => setCatNavMobile(false)}
				className='flex w-full justify-end mb-8 cursor-pointer'
			>
				<FiX className='text-3xl' />
			</button>
			<div className='flex flex-col gap-y-8 '>
				{categories?.map((category) => {
					return (
						<Link
							onClick={() => setCatNavMobile(false)}
							href={`/products/${category.id}`}
							key={category.id}
							className='uppercase fontm'
						>
							{category.attributes.title} Cameras
						</Link>
					)
				})}
			</div>
		</nav>
	)
}
export default CategoryNavMobile
