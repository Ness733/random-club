import MapItems from "../mapItems";
import { useProduct } from "../services/useProduct";

export default async function Burritos() {
	const burritos = await useProduct("burritos");

	return (
		<main className="w-full">
			<h1 className="p-5 text-center font-bold text-3xl bg-black text-white">
				Burritos
			</h1>
			<section className="xl:w-full xl:mt-20 flex flex-col justify-center items-center overflow-hidden">
				{Array.isArray(burritos) && <MapItems list={burritos} />}
			</section>
		</main>
	);
}
