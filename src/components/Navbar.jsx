import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
	const [dark, setDark] = useState(false);

	const theme = () => {
		setDark(!dark);
	};

	return (
		<div className='flex justify-between align-center p-10 '>
			<div role='button' onClick={theme}>
				{dark ? (
					<MdOutlineDarkMode size={40} />
				) : (
					<MdOutlineLightMode size={40} />
				)}
			</div>
			<div role='button'>
				<GiHamburgerMenu size={32} />
			</div>
			<h4 className='font-bold text-lg'>Contact</h4>
		</div>
	);
};

export default Navbar;
