import { Scroll } from "@react-three/drei";
import content from "../constants/index";

const Section = (props) => {
	return (
		<section
			className={`h-screen flex flex-col justify-center p-10 ${
				props.right ? "items-end" : "items-start"
			}`}
		>
			<div className="w-1/2 flex items-center justify-center">
				<div className="max-w-sm w-full">
					<div className="bg-white rounded-lg px-8 py-12">
						{props.children}
					</div>
				</div>
			</div>
		</section>
	);
};

export const Overlay = () => {
	return (
		<Scroll html>
			<div className="w-screen">

				{content.map((item, index) => (
					<Section key={index} right={index % 2 === 0}>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
					</Section>
				))}

			</div>
		</Scroll>
	);
};
