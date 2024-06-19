import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 lg:grid-cols-12">
				<div className="col-span-7 place-self-center">
					<h1 className="text-white mb-4 text-4xl lg:text-6cl font-extrabold">
						Hi, I'm Adrian
					</h1>
					<p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nisi molestiae omnis blanditiis tempora aspernatur minus
						iste magni numquam perspiciatis deserunt sapiente
						praesentium voluptatem esse vel, magnam voluptas harum
						cumque quia.
					</p>
					<div>
						<Link
							href="/#contact"
							className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
						>
							Hire Me
						</Link>
						<Link
							href="/"
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
						>
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</Link>
					</div>
				</div>
				<div className="col-span-5 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src="/images/profile-img.png"
							alt="hero image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
