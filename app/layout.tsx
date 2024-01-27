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
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex min-h-screen flex-col items-center mb-0 custombg md:pb-20">
					<div className="w-full bg-black h-fit flex items-center justify-center">
						<img
							src={Logo.src}
							width={200}
							alt="banner logo"
							className="p-5 md:p-10 md:w-1/6"
						/>
					</div>
					<nav className="w-full h-fit justify-center bg-red-600 text-white">
						<ul className="flex gap-5 p-5 font-bold text-xl md:place-content-center">
							<li>
								<Link href="/">Inicio</Link>
							</li>
							<li>
								<Link href="/hamburguesas">Hamburguesas</Link>
							</li>
							<li>
								<Link href="/burritos">Burritos</Link>
							</li>
						</ul>
					</nav>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
