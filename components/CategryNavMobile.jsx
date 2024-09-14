import { FiX } from 'react-icons/fi'

const CategryNavMobile = ({ setCatNavMobile }) => {
	return (
		<nav className='w-full h-full bg-primary p-8 '>
			{/* close icon */}
			<div
				onClick={() => setCatNavMobile(false)}
				className='flex justify-end mb-8 cursor-pointer'
			>
				<FiX className='text-3xl' />
			</div>
			CategryNavMobile
		</nav>
	)
}

export default CategryNavMobile
