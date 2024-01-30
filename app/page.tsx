export default function Home() {
	return (
		<main className="w-full">
			<h1 className="p-5 text-center font-bold text-3xl bg-black text-white">
				Inicio
			</h1>
			<section className="flex flex-col justify-center items-center">
				<div className="w-fit m-5 lg:w-1/2">
					<div className="font-bold text-center text-pretty rounded-3xl p-5 text-xl 2xl:p-10 bg-white 2xl:m-10">
						<h1 className="my-5">¡Bienvenido a Random Club! </h1>
						<p className="">
							En esta sección pronto podrás leer información sobre
							la preparación de nuestros productos. Mientras
							tanto, podés revisar nuestro menú en sus diferentes
							categorías.
						</p>
						<p></p>
						<p className="my-5">
							Si estas en Santa Fe (ciudad) podes realizar tu
							pedido a nuestro WhatsApp directamente haciendo
							click en el ícono, o a través de PedidosYa haciendo
							click{" "}
							<a
								className="text-red-500 hover:text-red-700 visited:text-red-500"
								href="https://www.pedidosya.com.ar/restaurantes/santa-fe/random-club-9d904b8d-9c58-4510-af01-ecb0963b95c0-menu"
							>
								acá
							</a>
							.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
