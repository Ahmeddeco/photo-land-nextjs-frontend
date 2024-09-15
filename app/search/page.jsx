import CategoryNav from '@/components/CategoryNav'
import Product from '@/components/Product'
import { getData } from '@/lib/data'

const SearchPage = async ({ searchParams }) => {
	const { data } = await getData(
		`/products?populate=*&filters[title][$contains]=${searchParams.query}`
	)

	return (
		<main className='mb-10 pt-40 lg:pt-4 xl:pt-0'>
			<div className='container'>
				<div className='flex gap-x-10 h-dvh'>
					{/* Category Nav */}
					<div className='w-2/12'>
						<CategoryNav />
					</div>
					<div className='w-10/12'>
						{/* title */}
						<div className='text-xl py-3 uppercase text-center lg:text-left'>
							{data?.length > 0
								? `${data.length} results for ${searchParams.query}`
								: `no results found for  ${searchParams.query}`}
						</div>
						{/* products grid */}
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10'>
							{data?.map((product) => {
								return <Product product={product} key={product.id} />
							})}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default SearchPage
