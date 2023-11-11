import "../../assets/css/header.css";

import logo from "../../assets/img/svg/logo.svg";
import Homeicon from "../imgcomponents/home";
import MissionIcon from "../imgcomponents/missions";
import ProficiencyIcon from "../imgcomponents/proficiency";
import CareersIcon from "../imgcomponents/careers";
import ContactIcon from "../imgcomponents/contact";
import LogoComponent from "../imgcomponents/logo";
import bars from "../../assets/img/svg/bars.svg";
import close from "../../assets/img/svg/close.svg";
import { cloneElement } from "react";

const Header = (): JSX.Element => {
	const location = window.document.location.pathname;

	return (
		<header className="w-full h-max xl:px-[10%] py-2 flex flex-row">
			<nav className="desktopNav w-1/4">
				<img src={logo} alt="logo" width={102} height={20} />
			</nav>

			<nav className="desktopNav w-1/2 xl:flex justify-between items-center">
				<a className={location === "/" ? "navlink-active" : "navlink"} href="/">
					<span>
						<Homeicon
							fill={location === "/" ? "#ffffff" : "#656464"}
							size={15}
						/>
					</span>
					<span className="ps-2">Home</span>
				</a>

				<a
					className={location === "/mission" ? "navlink-active" : "navlink"}
					href="/mission"
				>
					<span>
						<MissionIcon
							fill={location === "/mission" ? "#ffffff" : "#656464"}
							size={15}
						/>
					</span>
					<span className="ps-2">Our Mission</span>
				</a>

				<a
					className={location === "/proficiency" ? "navlink-active" : "navlink"}
					href="/proficiency"
				>
					<span>
						<ProficiencyIcon
							fill={location === "/proficiency" ? "#ffffff" : "#656464"}
							size={15}
						/>
					</span>
					<span className="ps-2">Our Proficiency</span>
				</a>

				<a
					className={location === "/career" ? "navlink-active" : "navlink"}
					href="/career"
				>
					<span>
						<CareersIcon
							fill={location === "/career" ? "#ffffff" : "#656464"}
							size={15}
						/>
					</span>
					<span className="ps-2">Our Careers</span>
				</a>
			</nav>

			<nav className="desktopNav w-1/4 xl:flex justify-end items-center">
				<a
					className={location === "/contact" ? "navlink-active" : "navlink"}
					href="/contact"
				>
					<span>
						<ContactIcon
							fill={location === "/contact" ? "#ffffff" : "#656464"}
							size={15}
						/>
					</span>
					<span className="ps-2">Contact us</span>
				</a>
			</nav>

			<nav className="mobileNav">
				<div className="w-full flex justify-between items-center flex-row px-6">
					<span>
						<LogoComponent />
					</span>
					<span>
						<img src={bars} width={21} />
					</span>
				</div>
			</nav>

			<nav className="mobileNav-Menu">
				<div className="w-full flex justify-between items-center px-6 ">
					<span>
						<img src={logo} alt="logo" width={102} height={20} />
					</span>
					<span>
						<img src={close} alt="logo" width={20} height={20} />
					</span>
				</div>
				<ul className="mobileNavlink">
					<li>
						<span>Home</span>
					</li>
					<li>
						<span>Our mission</span>
					</li>
					<li>
						<span>Our Proficiencies</span>
					</li>
					<li>
						<span>Our Careers</span>
					</li>
					<li>
						<span className="live">Contact Us</span>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
