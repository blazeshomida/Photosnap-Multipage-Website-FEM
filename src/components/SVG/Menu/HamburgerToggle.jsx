import Styles from './HamburgerMenu.module.scss'

const HamburgerToggle = ({toggleMenu}) => {
	
	

	return (

		<button
		onClick={toggleMenu}
		className={Styles['hamburger-menu']}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="6"
			>
				<g fill-rule="evenodd">
					<path d="M0 0h20v1H0zM0 5h20v1H0z" />
				</g>
			</svg>
			<span className="visually-hidden">Menu</span>
		</button>
	);
};

export default HamburgerToggle;
