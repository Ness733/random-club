import MapItems from "../mapItems";
import { useProduct } from "../services/useProduct";

export default async function Sandwiches() {
	const sandwichList = await useProduct("sandwiches");

	return (
		<main className="w-full justify-center items-center">
			<h1 className="p-5 text-center font-bold text-3xl w-full bg-black text-white">
				Sandwiches
			</h1>
			<section className="xl:w-full xl:mt-20 flex flex-col justify-center items-center overflow-hidden">
				{Array.isArray(sandwichList) && (
					<MapItems list={sandwichList} />
				)}
			</section>
		</main>
	);
}
