import Image from "next/image";
import React, { useState } from "react";

export default function Rating() {
	const [rateValue, setRateValue] = useState(0);
	const [isSubmit, setIsSubmit] = useState(false);

	const handleSubmit = () => {
		if (rateValue) {
			setIsSubmit(true);
		}
	};

	return (
		<div className="w-96 h-96 whitespace-nowrap overflow-hidden transition-all">
			<div
				className="inline-block break-words align-top whitespace-normal transition-all h-96 w-96"
				style={{
					transform: isSubmit
						? "translateX(-100%)"
						: "translateX(0%)",
				}}
			>
				<div
					className="w-96 h-96 p-5 rounded-3xl text-white flex flex-col gap-8"
					style={{
						background: "#222731",
					}}
				>
					<div>
						<Image
							src="/icon-star.svg"
							alt="star"
							width={30}
							height={30}
						/>
					</div>
					<h1 className="text-2xl font-bold">How did we do?</h1>
					<p className="text-gray-400 text-sm">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the text ever
						since the 1500s,
					</p>
					<div className="grid grid-cols-5 gap-5">
						{[1, 2, 3, 4, 5].map((value) => {
							return (
								<div
									key={value}
									className={`grid place-content-center  h-12 w-12 rounded-full cursor-pointer  transition-all ${
										value === rateValue
											? "bg-orange-500  text-white"
											: "text-gray-400 hover:bg-white hover:text-orange-500  bg-zinc-900"
									}`}
									onClick={() => setRateValue(value)}
								>
									{value}
								</div>
							);
						})}
					</div>
					<button
						className="w-full bg-orange-500 rounded-3xl py-3 hover:bg-white hover:text-orange-500 transition-all"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</div>
			<div
				className="inline-block whitespace-normal transition-all h-96 w-96"
				style={{
					transform: isSubmit
						? "translateX(-100%)"
						: "translateX(0%)",
				}}
			>
				<div
					className="w-96 h-96 p-5 rounded-3xl text-white flex flex-col items-center gap-8"
					style={{
						background: "#222731",
					}}
				>
					<Image
						src="/illustration-thank-you.svg"
						alt="Thank you"
						className="mx-auto object-center object-cover"
						width={150}
						height={150}
						priority
					/>
					<span className="text-center bg-zinc-900  px-5 py-2 rounded-3xl text-orange-500">
						You select {rateValue} out of 5
					</span>

					<h1 className="text-2xl font-bold text-center">
						Thank you!
					</h1>
					<p className="text-sm text-gray-400 text-center">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout.
					</p>
				</div>
			</div>
		</div>
	);
}
