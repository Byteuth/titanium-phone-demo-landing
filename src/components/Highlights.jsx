import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg, rightImg } from "../utils/index.js";
import  VideoCarousel  from "./VideoCarousel.jsx";

const Highlights = () => {
	useGSAP(() => {
		gsap.to("#title", {
			y: 0,
			opacity: 1,
			ease: "power1.inOut",
		});
		gsap.to(".link", {
			opacity: 1,
			y: 0,
			duration: 1,
			stagger: 0.25,
		});
	}, []);

	return (
		<section
			id="highlights"
			className="w-screen overflow-hidden h-full common-padding bg-zinc"
		>
			<div className="screen-max-width">
				<div className="mb-12 w-full md:flex items-end justify-between">
					<h1 id="title" className="section-heading ">
						Get the highlight
					</h1>
					<div className="flex flex-wrap items-end gap-5">
						<p className="link">
							Watch video
							<img src={watchImg} alt="watch" className="ml-2"></img>
						</p>
						<p className="link">
							Watch event
							<img src={rightImg} alt="right" className="ml-2"></img>
						</p>
					</div>
				</div>
					<VideoCarousel/>
			</div>
		</section>
	);
};

export default Highlights;
