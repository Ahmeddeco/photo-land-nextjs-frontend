'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ProductPage({ params }) {
	const id = params.id

	// Fetch Data
	const [productData, setProductData] = useState(null)
	useEffect(() => {
		async function fetchProduct() {
			let res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/products?populate=*&filters[id][$eq]=${id}`
			)
			let data = await res.json()
			setProductData(data)
		}
		fetchProduct()
	}, [id])
	if (!productData) return <div>Loading...</div>

	console.log(productData)

	return (
		<main className='mb-16 pt-44 lg:pt-10 xl:pt-0'>
			<div className='container'>
				{/* text */}
				<div className=''>
					<div className=''>
						<Image
							alt='camera'
							src={`http://127.0.0.1:1337${productData.data[0].attributes.image.data.attributes.url}`}
							width={916}
							height={916}
						/>
					</div>
				</div>
				{/* related products */}
			</div>
		</main>
	)
}
