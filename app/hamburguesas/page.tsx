import MapItems from "../mapItems";
import { useProduct } from "../services/useProduct";

export default async function Hamburguesas() {
	const burgerList = await useProduct("burgers");

	return (
		<main className="w-full">
			<h1 className="p-5 text-center font-bold text-3xl w-full bg-black text-white">
				Hamburguesas
			</h1>
			<section className="xl:w-full xl:mt-20 flex flex-col justify-center items-center overflow-hidden">
				{Array.isArray(burgerList) && <MapItems list={burgerList} />}
			</section>
		</main>
	);
}
