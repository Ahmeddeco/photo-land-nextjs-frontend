'use client'

import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const SearchForm = () => {
	const [seatchTerm, setSeatchTerm] = useState('')
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsAnimating(false)
		}, 1000)
		return () => clearTimeout(timeout)
	})

	const router = useRouter()

	const handleSearchInput = (e) => {
		setSeatchTerm(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(seatchTerm)

		if (seatchTerm.length > 0) {
			router.push(`/search?query=${seatchTerm}`)
			document.querySelector('input').value = ''
			setSeatchTerm('')
		} else {
			// if input is empty set animation to true
			setIsAnimating(true)
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={`${
				isAnimating ? 'animate-shake	' : 'animate-none'
			} relative w-full`}
		>
			<input
				onChange={handleSearchInput}
				className='input'
				type='text'
				name=''
				placeholder='Search for a product...'
			/>
			<button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
				<FiSearch className='text-xl' />
			</button>
		</form>
	)
}

export default SearchForm
