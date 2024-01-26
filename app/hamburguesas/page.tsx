/* eslint-disable @next/next/no-img-element */
import { API_URL, STRAPI_URL } from "../config.js";

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
		<main className="w-full">
			<h1 className="p-5 text-center font-bold text-3xl w-full bg-black text-white">
				Hamburguesas
			</h1>
			{burgerList.props.data.map((burger: Burger) => (
				<div
					className="w-full p-5 flex flex-col justify-center items-center"
					key={burger.id}
				>
					<h2 className="p-5 text-center font-bold text-5xl">
						{burger.attributes.burgerName}
					</h2>
					<img
						className="w-full md:w-96 py-5"
						src={burger.attributes.img.data.attributes.url}
						alt="small burger image"
					/>
					<p className="p-5 font-bold text-2xl bg-red-500 text-white rounded-lg text-center text-pretty md:w-1/5">
						{burger.attributes.description}
					</p>
				</div>
			))}
		</main>
	);
}
