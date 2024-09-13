import { getData } from '@/lib/data'

export default async function HomePage() {
	const products = await getData('/products?populate=*')
	// console.log(products)

	return (
		<main className='text-7xl font-bold underline container h-screen w-screen flex  items-center justify-center'>
			<h1>{products.data[2].attributes.title}</h1>
		</main>
	)
}
