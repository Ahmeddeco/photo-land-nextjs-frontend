import Product from '@/components/Product'
import { getData } from '@/lib/data'

const SearchPage = async ({ searchParams }) => {
	const { data } = await getData(
		`/products?populate=*&filters[title][$contains]=${searchParams.query}`
	)
	console.log(data)

	return (
		<main className=''>
			<div className='container'>
				<div className=''>
					{/* products grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10'>
						{data?.map((product) => {
							return <Product product={product} key={product.id} />
						})}
					</div>
				</div>
			</div>
		</main>
	)
}

export default SearchPage
