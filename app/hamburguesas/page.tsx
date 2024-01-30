/* eslint-disable @next/next/no-img-element */
import { API_URL } from "../config.js";
import MapItems from "../mapItems";

async function getBurgers() {
	const res = await fetch(`${API_URL}/burgers`);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	return data;
}

export default async function Hamburguesas() {
	const burgerList = await getBurgers();

	return (
		<main className="w-full justify-center items-center">
			<h1 className="p-5 text-center font-bold text-3xl w-full bg-black text-white">
				Hamburguesas
			</h1>
			<section className="xl:w-full xl:mt-20 flex flex-col justify-center items-center overflow-hidden">
				{Array.isArray(burgerList) && <MapItems list={burgerList} />}
			</section>
		</main>
	);
}
