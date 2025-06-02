import Image from "next/image";

import Logo from "@/assets/svgs/7_footer/carrhae-capital-footer-logo.svg";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-alt-navy py-14 md:py-9 px-8 md:px-20 min-h-28 relative z-50 text-white font-sans">
			<div className="flex md:flex-row flex-col items-center justify-between w-full">
				<div className="md:order-1 order-2 md:pt-0 pt-8">
					<Image
						src={Logo}
						width={221}
						height={51}
						alt="Carrhae Capital LLP Logo"
						className="w-[182px] md:w-[221px] md:h-auto"
					/>
				</div>
				<div className="text-center md:text-right text-xs md:text-sm md:order-2 order-1">
					<p>
						©{year} Carrhae Capital LLP | Carrhae Capital LLP 2011 is a Limited
						Liability Partnership Registered in England and Wales. REG OC36515.
					</p>
					<p>
						All Rights Reserved Authorised and Regulated by the Financial
						Conduct Authority
					</p>
				</div>
			</div>
		</footer>
	);
}
