export default function ReadMoreArrow({ open }: { open: boolean }) {
	return (
		<svg
			width="25"
			height="49"
			viewBox="0 0 25 49"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="12.5"
				cy="36.5"
				r="12"
				transform="rotate(90 12.5 36.5)"
				fill="#CFAA72"
				stroke="#CFAA72"
				className={`${
					open ? "-translate-y-6" : "translate-y-0"
				} transition-all duration-500`}
			/>
			<path
				d="M12.5 -1.09278e-07L12.5 38M12.5 38L15 35.7792M12.5 38L10 35.7792"
				stroke="white"
				strokeWidth="0.5"
				className={`${
					open ? "-scale-y-100" : "scale-y-100"
				} transition-all duration-500 origin-center`}
			/>
		</svg>
	);
}
