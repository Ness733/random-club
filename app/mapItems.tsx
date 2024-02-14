/* eslint-disable @next/next/no-img-element */

interface Item {
	id: number;
	name: string;
	image: string;
	description: string;
	active: boolean;
	// Add other properties as needed
}

interface MapItemsProps {
	list: Item[];
}

const MapItems: React.FC<MapItemsProps> = ({ list }) => {
	return (
		<div className="my-10 flex flex-col gap-5 justify-center items-center">
			{list.map((item) => (
				<div
					className="mt-10 xl:h-[550px] xl:my-10 mx-5 xl:flex justify-center items-center 2xl:gap-24 even:xl:flex-row-reverse
          odd:xl:flex-row xl:bg-white 2xl:w-fit xl:w-fit rounded-3xl even:xl:-rotate-1 odd:xl:rotate-1
          even:xl:px-10 odd:2xl:pl-20 odd:2xl:pt-0 odd:xl:px-5 even:2xl:p-10 odd:xl:gap-20 shadow-2xl shadow-black border xl:border-2 border-black custombg-wave"
					key={item.id}
				>
					<h2 className="bg-transparent rounded-t-3xl p-5 xl:hidden text-center font-bold text-5xl xl:mb-5 text-white">
						{item.name}
					</h2>
					<div className="2xl:w-[550px] flex xl:w-[500px] bg-gradient-to-b from-transparent to-transparent xl:from-transparent xl:to-transparent sm:justify-center">
						<img
							width={400}
							className="my-5 xl:m-0 xl:relative h-fit z-20"
							src={item.image}
							alt="small burger image"
						/>
						<svg
							className="hidden xl:absolute 2xl:h-full xl:hidden xl:m-0 2xl:w-[750px] xl:w-[700px] z-10 2xl:-translate-x-[21%] 2xl:translate-y-[-80px]
              xl:-translate-x-[60px] xl:translate-y-[-140px]"
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
					<div className="xl:w-[650px] h-fit flex flex-col xl:items-start">
						<h2 className="xl:mb-5 xl:inline-flex hidden text-center font-bold text-5xl text-white">
							{item.name}
						</h2>
						<p className="p-10 font-bold text-xl bg-transparent text-white rounded-b-3xl xl:rounded-3xl text-center text-pretty xl:w-[600px]">
							{item.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default MapItems;
