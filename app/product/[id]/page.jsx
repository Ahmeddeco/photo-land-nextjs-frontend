export default function ProductPage({ params }) {
	return (
		<main className='text-7xl font-bold underline container h-screen w-screen flex  items-center justify-center'>
			Product Page ID is : {params.id}
		</main>
	)
}
