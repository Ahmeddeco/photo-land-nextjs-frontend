import { getData } from '@/lib/data'
import React from 'react'
import ProductSlider from './ProductSlider'

const RelatedProducts = async ({ categoryTitle }) => {
	// get products by category title
	const { data } = await getData(
		`/products?populate=*&filters[categories][title]=${categoryTitle}`
	)
	// console.log(data)

	return (
		<section className='mb-16'>
			<div className='container'>
				<h2 className='h2 mb-6 text-center lg:text-left '>Related Products</h2>
				<ProductSlider data={data} />
			</div>
		</section>
	)
}

export default RelatedProducts
