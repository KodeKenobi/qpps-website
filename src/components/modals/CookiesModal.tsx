"use client";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { AnimatePresence, motion } from "motion/react";

export interface Cookie extends RequestCookie {
	type: "essential" | "analytics" | "marketing" | "functional";
}

interface CookiesModalProps {
	cookiesValues: RequestCookie[];
}

const cookiesArray: Cookie[] = [
	{
		name: "allow_analytics_cookies",
		type: "functional",
		value: "false",
	},
	{
		name: "allow_functional_cookies",
		type: "functional",
		value: "false",
	},
	{
		name: "allow_marketing_cookies",
		type: "functional",
		value: "false",
	},
	{
		name: "agree_cookies_disclaimer",
		type: "functional",
		value: "true",
	},
];

export default function CookiesModal({ cookiesValues }: CookiesModalProps) {
	const store = useCookies();
	const [open, setOpen] = useState<boolean>(false);
	const [customize, setCustomize] = useState<boolean>(false);
	const [cookies, setCookies] = useState<Cookie[]>(cookiesArray);

	const activeCookies = cookiesArray.some((cookie) =>
		cookiesValues.some((value) => value.name === cookie.name)
	);

	const handleAcceptAll = () => {
		console.log("Handle Accept All");

		cookies.forEach((cookie) => {
			store.set(cookie.name, "true", {
				expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
			});
		});

		setOpen(false);
	};

	const handleRejectAll = () => {
		cookies.forEach((cookie) => {
			store.set(cookie.name, "false", {
				expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
			});
		});

		setOpen(false);
	};

	const handleCustomize = () => {
		console.log("customize");
		setCustomize(!customize);
	};

	const handleSubmitCustomCookieConfig = () => {
		console.log("Custom cookie configuration submitted!");
		cookies.forEach((cookie) => {
			store.set(cookie.name, cookie.value, {
				expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
			});
		});
		setOpen(false);
	};

	const handleCheckCookie = (key: string, value: string) => {
		const updatedCookies = cookies.map((cookie) => {
			if (cookie.name === key) {
				return { ...cookie, value: value };
			}
			return cookie;
		});

		setCookies(updatedCookies);
	};

	useLayoutEffect(() => {
		if (activeCookies) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	}, [activeCookies]);

	return (
		<motion.div
			initial={{
				y: "100%",
			}}
			animate={
				open
					? {
							y: 0,
					  }
					: {
							y: "100%",
					  }
			}
			transition={{
				duration: 0.5,
				ease: "easeInOut",
			}}
			className="shadow-2xl overflow-y-auto shadow-black/30 z-50 fixed bottom-0 left-1/2 -translate-x-1/2 bg-navy font-light text-white py-9 px-32 text-center"
			style={{
				maxHeight: "calc(100% - 116px)",
			}}
		>
			<AnimatePresence mode="wait">
				{customize ? (
					<motion.div
						animate={{
							gridTemplateRows: "1fr",
						}}
						exit={{
							gridTemplateRows: "0fr",
						}}
						transition={{
							duration: 0.5,
						}}
						className="mx-auto w-3/4 min-h-0 grid overflow-hidden"
					>
						<div className="min-h-0">
							<h2 className="font-serif text-2xl">
								Choose your cookie preferences
							</h2>

							<div className="flex items-center justify-center flex-col text-center space-y-8 mt-6">
								<div className="flex items-center justify-center space-y-2.5 flex-col">
									<CheckButton
										value={"allow_analytics_cookies"}
										cookies={cookies}
										handleCheck={handleCheckCookie}
										disabled
									/>
									<p className="uppercase tracking-widest font-semibold text-sm">
										ESSENTIAL
									</p>
									<p className="text-xs">
										Our website can’t operate properly without essential
										cookies. We only collect the minimum personal information
										needed to provide services on basispoint.group. You can
										disable these cookies in your browser but parts of
										carrhaecap.com may not work.
									</p>
								</div>
								<div className="flex items-center justify-center space-y-2.5 flex-col">
									<CheckButton
										value={"allow_analytics_cookies"}
										cookies={cookies}
										handleCheck={handleCheckCookie}
									/>
									<p className="uppercase tracking-widest font-semibold text-sm">
										ANALYTICS
									</p>
									<p className="text-xs">
										We use analytical cookies to measure how you use our website
										and help improve carrhaecap.com.
									</p>
								</div>
								<div className="flex items-center justify-center space-y-2.5 flex-col text-sm">
									<CheckButton
										value={"allow_marketing_cookies"}
										cookies={cookies}
										handleCheck={handleCheckCookie}
									/>
									<p className="uppercase tracking-widest font-semibold text-sm">
										MARKETING
									</p>
									<p className="text-xs">
										We use marketing cookies to display personalised messages on
										the carrhaecap.com website and to show you advertisements
										from us and selected third parties on other sites you may
										visit. We work with approved partners to deliver relevant
										content and to measure the effectiveness of these
										advertisements.
									</p>
								</div>
								<div className="flex items-center justify-center space-y-2.5 flex-col">
									<CheckButton
										value={"allow_functional_cookies"}
										cookies={cookies}
										handleCheck={handleCheckCookie}
									/>
									<p className="uppercase tracking-widest font-semibold">
										Functional
									</p>
									<p className="text-xs">
										These cookies let us save the choices you make and some of
										the information you provide when browsing basispoint.group.
										They don’t track your browsing activity on other websites.
										Without functional cookies, carrhaecap.com may not work
										reliably.
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				) : (
					<motion.div
						animate={{
							gridTemplateRows: "1fr",
						}}
						exit={{
							gridTemplateRows: "0fr",
						}}
						transition={{
							duration: 0.5,
						}}
						className="mx-auto w-3/4 min-h-0 grid overflow-hidden"
					>
						<div className="min-h-0">
							<h2 className="font-serif text-2xl">
								Welcome to Carrhae Capital
							</h2>

							<p className="mt-8 mx-auto">
								Our website uses essential cookies that are required for the
								website to function properly. Our website also uses analytical,
								functionality and marketing cookies.
							</p>
							<p className="mt-4">
								For more information please see our{" "}
								<Link
									href="/disclosures/cookies-policy"
									target="_blank"
									className="underline"
								>
									Cookie Policy
								</Link>
								.
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="flex justify-between gap-x-24 mt-10">
				{customize ? (
					<>
						<CookiesButton
							label="Accept"
							onClick={() => handleSubmitCustomCookieConfig()}
						/>
						<CookiesButton label="Reject" onClick={() => setCustomize(false)} />
					</>
				) : (
					<>
						<CookiesButton
							label="Accept All"
							onClick={() => handleAcceptAll()}
						/>
						<CookiesButton
							label="Reject All"
							onClick={() => handleRejectAll()}
						/>
					</>
				)}
				<CookiesButton
					label="Customize"
					onClick={() => handleCustomize()}
					active={customize}
				/>
			</div>
		</motion.div>
	);
}

const CookiesButton = ({
	label,
	onClick,
	active = false,
}: {
	label: string;
	onClick?: () => void;
	active?: boolean;
}) => {
	return (
		<button
			onMouseDown={onClick}
			className={`cursor-pointer font-sans text-sm relative pb-2 px-0 text-left ${
				active ? "opacity-100" : "opacity-35 hover:opacity-100"
			} transition-opacity duration-300`}
		>
			<span className="uppercase tracking-widest font-semibold">{label}</span>
			<i className="w-11 h-px bg-gold/35 block absolute bottom-0 left-0" />
		</button>
	);
};

const CheckButton = ({
	value,
	cookies,
	handleCheck,
	disabled = false,
}: {
	value: string;
	cookies: Cookie[];
	handleCheck: (key: string, value: string) => void;
	disabled?: boolean;
}) => {
	const [checked, setChecked] = useState<boolean>(false);

	useEffect(() => {
		const cookie = cookies.find((cookie) => cookie.name === value);
		if (cookie) {
			setChecked(cookie.value === "true");
		}
	}, [value, cookies]);

	const handleToggle = () => {
		if (!disabled) {
			setChecked(!checked);
			handleCheck(value, !checked ? "true" : "false");
		}
	};

	return (
		<div
			onMouseDown={() => handleToggle()}
			className={`mx-auto w-6 h-6 aspect-square rounded-full border border-gold flex items-center justify-center relative transition-colors duration-300 ${
				!disabled
					? checked
						? "bg-gold cursor-pointer"
						: "bg-transparent cursor-pointer"
					: "bg-gold cursor-auto"
			}`}
		>
			{!disabled ? (
				checked && (
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-1 border-l border-b border-white -rotate-[40deg]" />
				)
			) : (
				<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-1 border-l border-b border-white -rotate-[40deg]" />
			)}
		</div>
	);
};
