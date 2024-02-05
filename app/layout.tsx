/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "../public/assets/logo vector.webp";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Random Club",
	viewport: "width=device-width, initial-scale=1",
	description: "Delivery en Santa Fe, Capital",
	openGraph: {
		images: "https://res.cloudinary.com/dzbu8lu05/image/upload/v1706637781/n4dpcsvc1fmskhva4ymc.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex relative flex-col items-center mb-0 2xl:pb-20 custombg-blocks">
					<div className="w-full bg-black h-fit flex items-center justify-center">
						<img
							src={Logo.src}
							width={200}
							alt="banner logo"
							className="p-5 2xl:p-10 2xl:w-1/6"
						/>
					</div>
					<nav className="w-full h-fit justify-center bg-red-600 text-white">
						<ul className="flex gap-5 overflow-auto p-5 font-bold text-xl xl:place-content-center">
							<li>
								<Link href="/">Inicio</Link>
							</li>
							<li>
								<Link href="/hamburguesas">Hamburguesas</Link>
							</li>
							<li>
								<Link href="/burritos">Burritos</Link>
							</li>
							<li>
								<Link href="/sandwiches">Sandwiches</Link>
							</li>
							<li>
								<Link href="/guarniciones">Guarniciones</Link>
							</li>
						</ul>
					</nav>
					{children}
				</main>
				<div className="fixed bottom-[55px] right-0 z-30">
					<a
						className="xl:bottom-10 xl:right-10 flex items-center justify-center p-4"
						href="https://wa.me/543425277458"
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="70"
							height="70"
							viewBox="0 0 48 48"
						>
							<path
								fill="#fff"
								d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
							></path>
							<path
								fill="#fff"
								d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
							></path>
							<path
								fill="#cfd8dc"
								d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
							></path>
							<path
								fill="#40c351"
								d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
							></path>
							<path
								fill="#fff"
								fillRule="evenodd"
								d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				</div>
				<Footer />
			</body>
		</html>
	);
}
