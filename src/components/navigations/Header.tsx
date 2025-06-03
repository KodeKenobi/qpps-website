"use client";

import Image from "next/image";
import Logo from "../../../public/svgs/_nav-bar/carrhae-capital-nav-logo.svg";
import Link from "next/link";
import Button from "../buttons/Button";
import usePositionStore from "@/store/usePositionStore";
import { handleScrollTo } from "@/utils/handleScrollTo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useMobileNavStore from "@/store/useMobileNavStore";
import LinkedInLogo from "../../../public/svgs/5_contact/carrhae-capital-section5-contact-icon-linkedin.svg";

export default function Header() {
	const { navs, position } = usePositionStore();
	const { open, setOpen } = useMobileNavStore();
	const [trans, setTrans] = useState<boolean>(true);
	const pathname = usePathname();

	const transStyle = "bg-transparent backdrop-blur-none";
	const nonTransStyle = "bg-white/80 backdrop-blur-md";

	useEffect(() => {
		if (pathname === "/") {
			setTrans(true);

			if (position) {
				if (position !== "hero") {
					setTrans(false);
				} else {
					setTrans(true);
				}
			} else {
				setTrans(true);
			}
		} else if (pathname.includes("disclosures")) {
			setTrans(false);
		}
	}, [trans, position, pathname]);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
				trans ? transStyle : nonTransStyle
			}`}
		>
			<div className="flex items-center justify-between border-b border-slate/40 py-6 md:py-0">
				<div className="pl-6 md:pl-4 lg:pl-20">
					<Link href="/#hero">
						<Image
							src={Logo}
							alt="Carrhae Capital Logo"
							width={220}
							height={51}
							className="max-w-[167px] md:max-w-[220px]"
						/>
					</Link>
				</div>
				<div className="hidden md:flex items-center justify-end h-full">
					<nav className="border-r border-slate/40 h-full">
						<ul className="justify-end items-center h-full  text-xs font-light uppercase tracking-widest text-slate flex md:pr-8 lg:pr-[57px] md:gap-x-4 lg:gap-x-12 xl:gap-x-[69px]">
							{navs.map((nav) => (
								<li key={nav.url} className="h-full py-[50px] relative">
									<button
										onMouseDown={() => handleScrollTo(nav.url)}
										className={`uppercase cursor-pointer ${
											position === nav.url ? "font-semibold italic" : ""
										}`}
									>
										{nav.label}
									</button>
									<span
										className={`w-2/3 h-0.5 bg-slate absolute -bottom-[0.8px] left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${
											position === nav.url ? "opacity-100" : "opacity-0"
										}`}
									/>
								</li>
							))}
						</ul>
					</nav>
					<div className="flex items-center justify-end h-full md:pr-16 md:pl-8 lg:pr-[114px] lg:pl-[57px]">
						<Link href="https://google.com/" target="_blank">
							<Button
								onClick={() => {}}
								color={"var(--color-navy)"}
								label={"Login"}
							/>
						</Link>
					</div>
				</div>
				<div className="md:hidden pr-8">
					<button
						onMouseDown={() => setOpen(!open)}
						aria-label="Mobile Menu"
						className={`mobile-nav  ${open ? "active" : ""}`}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>
			<nav
				className={`mobile-nav-menu pt-14 md:hidden ${
					open ? "open" : "closed"
				}`}
			>
				<nav className="flex flex-col items-center justify-start h-full gap-y-8">
					<ul className="text-2xl font-light uppercase tracking-widest text-slate flex flex-col min-h-[185px] gap-y-[12%] h-full text-center">
						{navs.map((nav) => (
							<li key={nav.url} className="relative">
								<button
									onMouseDown={() => {
										handleScrollTo(nav.url);
										setOpen(false);
									}}
									className={`uppercase cursor-pointer ${
										position === nav.url ? "font-semibold italic" : ""
									}`}
								>
									{nav.label}
								</button>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex items-center justify-center mt-auto pt-8">
					<Link href="https://linkedin.com/" target="_blank">
						<Image
							src={LinkedInLogo}
							alt="LinkedIn Logo"
							width={18}
							height={18}
						/>
					</Link>
				</div>
				<div className="flex items-center justify-center border-t border-t-slate/50 py-7 text-white mt-9">
					<Link
						href={"/disclosures/legal-regulatory"}
						onMouseDown={() => setOpen(false)}
					>
						<Button color={"white"} label={"LEGAL & REGULATORY"} />
					</Link>
				</div>
			</nav>
		</header>
	);
}
