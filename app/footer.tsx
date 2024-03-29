export function Footer() {
	return (
		<footer className="p-5 h-fit bg-black text-white">
			<div className="flex flex-col justify-left items-left pb-5 xl:pb-10 items-center">
				<h1 className="text-2xl xl:text-3xl pb-5">Sociales</h1>
				<a
					href="https://www.instagram.com/randomclub_sf/"
					target="_blank"
				>
					<svg
						className="w-20 h-20 2xl:mt-10 xl:mt-5 place-self-center 2xl:w-20 2xl:h-20 xl:w-15 xl:h-15"
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="100"
						height="100"
						viewBox="0,0,256,256"
					>
						<g
							fill="#ffffff"
							fillRule="nonzero"
							stroke="none"
							strokeWidth="1"
							strokeLinecap="butt"
							strokeLinejoin="miter"
							strokeMiterlimit="10"
							strokeDasharray=""
							strokeDashoffset="0"
							fontFamily="none"
							fontWeight="none"
							fontSize="none"
							textAnchor="none"
							style={{ mixBlendMode: "normal" }}
						>
							<g transform="scale(5.12,5.12)">
								<path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
							</g>
						</g>
					</svg>
				</a>
			</div>

			<div className="flex flex-col justify-center items-center lg:mt-0">
				<p className="text-center bottom-0">
					Copyright © 2024 Random Club | Design & Development{" "}
					<a
						className="text-red-500 hover:text-red-700 visited:text-red-500"
						href="https://github.com/Ness733"
					>
						Nestor Rosales
					</a>
					.{" "}
				</p>
			</div>
		</footer>
	);
}
