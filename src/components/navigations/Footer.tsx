import Image from "next/image";

import Logo from "@/assets/svgs/7_footer/carrhae-capital-footer-logo.svg";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-alt-navy py-9 px-20 min-h-28 relative z-50 text-white font-sans">
			<div className="flex items-center justify-between w-full">
				<div>
					<Image
						src={Logo}
						width={221}
						height={51}
						alt="Carrhae Capital LLP Logo"
					/>
				</div>
				<div className="text-right text-sm">
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
