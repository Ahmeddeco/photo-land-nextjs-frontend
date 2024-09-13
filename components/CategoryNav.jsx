import { getData } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const CategoryNav = async () => {
	const { data } = await getData('/categories')

	return (
		<aside className='hidden xl:flex h-full'>
			<div className='bg-primary flex flex-col w-full  rounded-xl overflow-hidden'>
				<div className='bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center'>
					Browse Categories
				</div>
				<div className='flex flex-col gap-y-6 p-6'>
					{data?.map((category) => {
						return (
							<Link
								href={`/products/${category.id}`}
								key={category.id}
								className='uppercase'
							>
								{category.attributes.title}
							</Link>
						)
					})}
				</div>
			</div>
		</aside>
	)
}

export default CategoryNav
