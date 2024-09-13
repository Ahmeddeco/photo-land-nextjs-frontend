import { getData } from '@/lib/data'
import ProductSlider from './ProductSlider'

const LatestProducts = async () => {
	const { data } = await getData('/products?populate=*&filters[isNew]=true')
	return (
		<section className='mb-16'>
			<div className='container'>
				<h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
			</div>
			<ProductSlider data={data} />
		</section>
	)
}

export default LatestProducts
