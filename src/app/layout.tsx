import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigations/Header";

const AlbertSans = Albert_Sans({
	variable: "--font-albert-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Carrhae Capital LLP",
	description:
		"Precision in Liquid Emerging Markets, We combine localised research and structured portfolio management to capture the persistent dispersion in emerging markets.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-title" content="Carrhae Capital" />
				<link
					href="https://fastly-cloud.typenetwork.com/projects/8622/fontface.css?6821d4df"
					rel="stylesheet"
					type="text/css"
				></link>
			</head>
			<body className={`${AlbertSans.variable} antialiased relative`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
