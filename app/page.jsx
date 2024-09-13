import useFetch from '@/data/useFetch'

export default async function HomePage() {
	const { data } = useFetch('/products?populate=*')
	console.log(data)

	return (
		<main className='text-7xl font-bold underline container h-screen w-screen flex  items-center justify-center'>
			<h1>HomePage</h1>
		</main>
	)
}
