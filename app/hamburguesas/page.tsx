/* eslint-disable @next/next/no-img-element */
import { API_URL } from "../config.js";

async function getBurgers() {
	const res = await fetch(`${API_URL}/burgers?populate[img][fields][0]=url`);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const { data } = await res.json();
	return {
		props: {
			data,
		},
		revalidate: 1,
	};
}

export default async function Hamburguesas() {
	const burgerList = await getBurgers();

	interface Burger {
		id: number;
		attributes: {
			id: number;
			burgerName: string;
			img: {
				data: {
					attributes: {
						url: string;
					};
				};
			};
			description: string;
		};
	}

	return (
		<main className="w-full justify-center items-center">
			<h1 className="p-5 text-center font-bold text-3xl w-full bg-black text-white">
				Hamburguesas
			</h1>
			<section className="w-full md:mt-20 flex flex-col justify-center items-center">
				{burgerList.props.data.map((burger: Burger) => (
					<div
						className="p-5 md:h-[550px] md:my-10 w-full md:flex justify-center items-center md:gap-20 even:md:flex-row-reverse 
						odd:md:flex-row md:bg-white md:w-fit md:px-32 rounded-3xl even:md:-rotate-1 odd:md:rotate-1
						even:md:pr-20 odd:md:pl-20 odd:md:pt-0"
						key={burger.id}
					>
						<h2 className="bg-white rounded-2xl p-5 md:hidden text-center font-bold text-5xl md:mb-5">
							{burger.attributes.burgerName}
						</h2>

						<div className="md:w-[550px] flex ">
							<img
								width={500}
								className="my-10 md:m-0 md:relative h-fit z-20 "
								src={burger.attributes.img.data.attributes.url}
								alt="small burger image"
							/>
							<svg
								className="hidden md:absolute md:block md:w-[800px] z-10 md:-translate-x-[110px] md:translate-y-[-190px]"
								viewBox="0 0 1000 1000"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs>
									<clipPath id="a">
										<path
											fill="currentColor"
											d="M791 684.5Q713 869 516 841T165.5 656.5Q12 500 158 330.5T477 200q173 39 282.5 169.5t31.5 315Z"
										/>
									</clipPath>
								</defs>
								<g clipPath="url(#a)">
									<path
										fill="#252528"
										d="M791 684.5Q713 869 516 841T165.5 656.5Q12 500 158 330.5T477 200q173 39 282.5 169.5t31.5 315Z"
									/>
								</g>
							</svg>
						</div>

						<div className="md:w-[650px] h-[300px] flex flex-col md:items-start">
							<h2 className="md:mb-5 md:inline-flex hidden text-center font-bold text-5xl">
								{burger.attributes.burgerName}
							</h2>
							<p className="p-10 font-bold text-2xl bg-red-500 text-white rounded-lg text-center text-pretty md:w-[600px]">
								{burger.attributes.description}
							</p>
						</div>
					</div>
				))}
			</section>
		</main>
	);
}
