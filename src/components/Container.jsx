import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import data from "../data.js";
import { useState } from "react";

const Container = () => {
	const [index, setIndex] = useState(0);
	const { imgUrl, text, definition } = data[index];

	const checkNumber = (number) => {
		if (number > data.length - 1) {
			return 0;
		}
		if (number < 0) {
			return data.length - 1;
		}
		return number;
	};
	const next = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};
	const prev = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};
	return (
		<>
			<div className='flex justify-center md:py-20 sm:py-32 relative'>
				<img
					src={imgUrl}
					alt={text}
					className='md:w-2/5 md:h-/4 sm:w-3/5 sm:h-3/4'
				/>
				<div className='absolute sm:top-48 sm:left-6 md:top-48 md:left-64'>
					<h4 className='font-medium'>visual art forms</h4>
					<h1 className='font-bold sm:text-4xl md:text-6xl'>
						{text.toUpperCase()}
					</h1>
				</div>
				<div className=' absolute md:bottom-28 md:right-56 sm:bottom-36 sm:right-4 z-10 flex flex-col bg-slate-800 text-base font-medium tracking-tight sm:w-80 sm:text-sm md:text-base justify-start p-2'>
					<h2 className='text-white'>Definition</h2>
					<p className='text-slate-400'>{definition}</p>
				</div>
			</div>
			<div className='w-full mx-auto max-w-screen-xl flex-wrap p-4 flex justify-between align-center'>
				<IoIosArrowRoundBack size={40} role='button' onClick={prev} />
				<div className='space-x-4'>
					<a href='' className='font-bold'>
						facebook
					</a>
					<a href='' className='font-bold'>
						instagram
					</a>
					<a href='' className='font-bold'>
						linkedin
					</a>
				</div>

				<IoIosArrowRoundForward size={40} role='button' onClick={next} />
			</div>
		</>
	);
};

export default Container;
