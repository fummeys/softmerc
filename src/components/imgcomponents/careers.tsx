import type { SvgTypes } from "../../type/component";

const CareersIcon = ({ fill, size }: SvgTypes): JSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 15 15"
			fill="none"
		>
			<path
				d="M7.27783 6.96794C7.73795 6.71219 7.67833 5.72669 7.14508 4.76519C6.91633 4.35119 6.63508 4.01594 6.35383 3.78156C6.01752 4.03115 5.61013 4.16651 5.19133 4.16781C4.77188 4.16688 4.36379 4.03151 4.02695 3.78156C3.7457 4.01594 3.4652 4.35156 3.2357 4.76519C2.70208 5.72631 2.6432 6.71219 3.10445 6.96794C3.30995 7.08494 3.5267 6.99719 3.7502 6.78194C3.70836 7.01384 3.6874 7.24904 3.68758 7.48469C3.68758 8.58644 4.11508 9.47669 4.6412 9.47669C4.95845 9.47669 5.11558 9.15231 5.19095 8.65619C5.26595 9.14894 5.42345 9.47669 5.73845 9.47669C6.26233 9.47669 6.6932 8.58606 6.6932 7.48469C6.6932 7.23719 6.66995 7.00094 6.6302 6.78231C6.8552 6.99794 7.07158 7.08644 7.27783 6.96794ZM5.19058 3.79281C5.40334 3.79599 5.61461 3.75682 5.81209 3.67758C6.00957 3.59834 6.18932 3.48061 6.34088 3.33125C6.49243 3.18189 6.61277 3.00387 6.69488 2.80757C6.77699 2.61126 6.81924 2.40059 6.81916 2.1878C6.81909 1.97502 6.77669 1.76437 6.69444 1.56812C6.61219 1.37188 6.49173 1.19395 6.34007 1.04469C6.18841 0.895437 6.00858 0.777836 5.81105 0.698735C5.61351 0.619633 5.40221 0.58061 5.18945 0.583936C4.76818 0.590523 4.3664 0.762535 4.07086 1.06283C3.77533 1.36312 3.60976 1.7676 3.60991 2.18893C3.61006 2.61025 3.77591 3.01462 4.07165 3.3147C4.3674 3.61479 4.7693 3.78652 5.19058 3.79281ZM8.41333 4.81056C8.756 4.80055 9.08129 4.65738 9.32013 4.41145C9.55898 4.16552 9.69258 3.8362 9.69258 3.49337C9.69258 3.15055 9.55898 2.82122 9.32013 2.5753C9.08129 2.32937 8.756 2.1862 8.41333 2.17619C8.06389 2.17624 7.72878 2.3151 7.48172 2.56222C7.23467 2.80935 7.0959 3.1445 7.09595 3.49394C7.096 3.84338 7.23486 4.17848 7.48199 4.42554C7.72912 4.67259 8.06389 4.81061 8.41333 4.81056ZM10.0183 5.60931C9.83008 5.26881 9.59983 4.99356 9.36883 4.80119C9.09251 5.00592 8.75797 5.11695 8.41408 5.11806C8.13058 5.11806 7.86658 5.04044 7.63558 4.91181C7.82158 5.32169 7.9367 5.73681 7.95808 6.10806C7.99333 6.67656 7.81558 7.09806 7.46008 7.29494C7.38389 7.3368 7.30105 7.36522 7.2152 7.37894C7.19383 7.52594 7.1792 7.67894 7.1792 7.84019C7.1792 8.74506 7.52983 9.47594 7.9622 9.47594C8.22245 9.47594 8.3522 9.20969 8.4137 8.80244C8.47483 9.20744 8.6042 9.47594 8.8637 9.47594C9.29308 9.47594 9.64745 8.74469 9.64745 7.84094C9.64745 7.63731 9.62758 7.44344 9.59495 7.26344C9.77945 7.44081 9.9572 7.51394 10.1267 7.41644C10.5043 7.20644 10.456 6.39756 10.0183 5.60931ZM1.96783 4.81056C2.22827 4.81041 2.48283 4.73305 2.69931 4.58824C2.91579 4.44344 3.08448 4.2377 3.18404 3.99704C3.28361 3.75637 3.30958 3.49159 3.25868 3.23617C3.20778 2.98074 3.08229 2.74615 2.89807 2.56204C2.71386 2.37793 2.47919 2.25257 2.22373 2.20181C1.96828 2.15106 1.70352 2.17718 1.46291 2.27688C1.2223 2.37659 1.01666 2.54539 0.871979 2.76195C0.727299 2.97852 0.650077 3.23312 0.650077 3.49356C0.650176 3.84302 0.789042 4.17814 1.03615 4.42524C1.28325 4.67235 1.61837 4.81046 1.96783 4.81056ZM2.91845 7.29381C2.32145 6.96194 2.2667 5.97231 2.74745 4.91106C2.50982 5.04597 2.24145 5.11739 1.9682 5.11844C1.6097 5.11844 1.2812 4.99844 1.01195 4.80119C0.781327 4.99319 0.551452 5.26844 0.362452 5.60856C-0.0751733 6.39756 -0.123173 7.20681 0.254827 7.41606C0.423577 7.51281 0.601702 7.44044 0.785077 7.26381C0.751395 7.45421 0.734455 7.6472 0.734452 7.84056C0.734452 8.74506 1.08508 9.47556 1.51745 9.47556C1.7777 9.47556 1.90745 9.20931 1.96895 8.80244C2.03083 9.20744 2.1602 9.47594 2.41895 9.47594C2.84908 9.47594 3.2027 8.74469 3.2027 7.84094C3.2027 7.67856 3.1877 7.52519 3.16633 7.37819C3.07954 7.3645 2.99541 7.3362 2.91845 7.29381Z"
				fill={fill}
			/>
		</svg>
	);
};

export default CareersIcon;