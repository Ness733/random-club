export default function Home() {
	return (
		<main className="w-full">
			<h1 className="p-5 text-center font-bold text-3xl bg-black text-white">
				Inicio
			</h1>
			<section className="flex flex-col justify-center items-center">
				<div className="w-fit m-5 lg:w-1/2">
					<p className="font-bold text-center text-pretty rounded-3xl p-5 text-xl 2xl:p-10 bg-white 2xl:m-10">
						En esta sección podrás leer información sobre la
						preparación de nuestros productos. Mientras tanto, podés
						revisar nuestro menú en sus diferentes categorías.
					</p>
				</div>
			</section>
		</main>
	);
}
