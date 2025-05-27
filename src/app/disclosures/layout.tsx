interface DisclosuresLayoutProps {
	heading: string;
	activeUrl: string;
	children: React.ReactNode;
}

export default function DisclosuresLayout({
	children,
}: DisclosuresLayoutProps) {
	return children;
}
