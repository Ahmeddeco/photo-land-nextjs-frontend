import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({ product }) => {
	return (
		<Link href={`/product/${product.id}`}>
			<div className='group grad w-full h-[362px] rounded-xl overflow-hidden relative'>
				{/* badge */}
				<div className='bg-accent absolute text-primary text-base font-semibold uppercase top-4 right-4 px-2 rounded-full z-10'>
					{product.attributes.isNew ? 'new' : ''}
				</div>
				{/* image */}
				<div className='w-full h-[200px] flex items-center justify-center relative'>
					<Image
						src={`${process.env.NEXT_PUBLIC_HOST_URL}${product.attributes.image.data.attributes.url}`}
						alt='img'
						width={160}
						height={160}
						className='group-hover:scale-90 transition-all'
					/>
				</div>
				{/* text */}
				<div className='px-6 pb-8 flex flex-col'>
					{/* category title */}
					<div className='text-sm text-accent capitalize mb-2'>
						{product.attributes.categories.data[0].attributes.title}
					</div>
					{/* title */}
					<div className='text-xl mb-4 lg:mb-9'>
						{product.attributes.title.substring(0, 35)}...
					</div>
					{/* price */}
					<div className='text-lg text-accent'>${product.attributes.price}</div>
				</div>
			</div>
		</Link>
	)
}

export default Product
