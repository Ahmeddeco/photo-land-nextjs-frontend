import CategoryNav from '@/components/CategoryNav'
import Product from '@/components/Product'
import { getData } from '@/lib/data'

export default async function ProductPage({ params }) {
	const id = params.id
	const { data } = await getData(
		`/products?populate=*&filters[categories][id][$eq]=${id}`
	)

	return (
		<div className='mb-16 pt-40 lg:pt-0 '>
			<div className='container'>
				<div className='flex gap-x-10'>
					<div className='lg:w-2/12 hidden lg:block'>
						<CategoryNav />
					</div>
					<main className='lg:w-10/12 w-full'>
						{/* title */}
						<h1 className='uppercase pb-4 font-bold text-2xl'>
							{data[0]?.attributes.categories.data[0].attributes.title} cameras
						</h1>
						{/* product grid */}
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10'>
							{data?.map((product) => {
								return <Product product={product} key={product.id} />
							})}
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}
