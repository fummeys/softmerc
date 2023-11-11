import type { SvgTypes } from "../../type/component";

const MissionIcon = ({ size, fill }: SvgTypes ): JSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 15 15"
			fill="none"
			>
			<path
				d="M12.2778 8.66667H10.8334V7.22222H12.2778C12.675 7.22222 13 7.54722 13 7.94444C13 8.34167 12.675 8.66667 12.2778 8.66667ZM12.2778 11.5556H10.8334V10.1111H12.2778C12.675 10.1111 13 10.4361 13 10.8333C13 11.2306 12.675 11.5556 12.2778 11.5556ZM7.94449 6.5C7.15005 6.5 6.50005 7.15 6.50005 7.94444H5.0556V10.8333H6.50005C6.50005 11.6278 7.15005 12.2778 7.94449 12.2778H10.1112V6.5H7.94449Z"
				fill={fill}
			/>
			<path
				d="M0.722222 1.44439C0.722222 1.84161 1.04722 2.16661 1.44444 2.16661H3.97222C4.57167 2.16661 5.05556 2.6505 5.05556 3.24995C5.05556 3.84939 4.57167 4.33328 3.97222 4.33328H2.88889C1.29278 4.33328 0 5.62606 0 7.22217C0 8.81828 1.29278 10.1111 2.88889 10.1111H4.33333V8.66661H2.88889C2.09444 8.66661 1.44444 8.01661 1.44444 7.22217C1.44444 6.42772 2.09444 5.77772 2.88889 5.77772H3.97222C5.36611 5.77772 6.5 4.64383 6.5 3.24995C6.5 1.85606 5.36611 0.722168 3.97222 0.722168H1.44444C1.04722 0.722168 0.722222 1.04717 0.722222 1.44439Z"
				fill={fill}
			/>
		</svg>
	);
};

export default MissionIcon;