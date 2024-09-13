import React from 'react'
import CategoryNav from './CategoryNav'
import MainSlider from './MainSlider'
import Image from 'next/image'
import PromoImg1 from '@/public/promo_img1.png'
import PromoImg2 from '@/public/promo_img2.png'
import Link from 'next/link'

const Hero = () => {
	return (
		<section className='mb-10 pt-36 lg:pt-0'>
			<div className='container '>
				<div className='flex flex-col gap-y-10 xl:flex-row xl:gap-x-10 '>
					{/* sidebar */}
					<div className='w-full lg:w-2/6  h-auto'>
						<CategoryNav />
					</div>
					{/* main slider */}
					<div className='w-full lg:w-6/12 max-w-lg lg:max-w-[734px] mx-auto h-auto'>
						<MainSlider />
					</div>
					{/* promos */}
					<div className='flex flex-col gap-10 w-full lg:w-4/12 max-w-lg mx-auto  h-auto '>
						{/* promo 1*/}
						<div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relative p-6'>
							{/* text */}
							<div className='flex flex-col max-w-48 h-full justify-center'>
								<div className='text-2xl uppercase font-light leading-tight mb-4'>
									Save 35% all dslr camera
								</div>
								<Link
									href='#'
									className='uppercase text-accent hover:text-accent-hover transition-all'
								>
									Shop now
								</Link>
							</div>
							{/* image */}
							<Image
								src={PromoImg1}
								alt='promo'
								className='absolute z-20 -top-2 -right-4'
							/>
						</div>
						{/* promo 2*/}
						<div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relative p-6'>
							{/* text */}
							<div className='flex flex-col max-w-48 h-full justify-center'>
								<div className='text-2xl uppercase font-light leading-tight mb-4'>
									Save 25% mirrorless camera
								</div>
								<Link
									href='#'
									className='uppercase text-accent hover:text-accent-hover transition-all'
								>
									Shop now
								</Link>
							</div>
							{/* image */}
							<Image
								src={PromoImg2}
								alt='promo'
								className='absolute z-20 top-4 -right-6'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
