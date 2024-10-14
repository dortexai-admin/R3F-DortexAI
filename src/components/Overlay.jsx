import { Scroll } from "@react-three/drei";

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
				<Section>
					<h1>Welcome title here</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum odio itaque. Pariatur distinctio fugit praesentium dolorem adipisci unde quas.
					</p>
				</Section>

				<Section right>
					<h1>Our Mission</h1>
					<p>
						Our mission of Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, at quis quibusdam in voluptas culpa, aut suscipit cumque aperiam reiciendis fugiat consequatur eveniet sequi omnis quod distinctio debitis voluptatibus a ipsam porro! Animi adipisci ab eius ea voluptas corrupti quasi, porro dolorum cumque, molestiae quidem iure error perspiciatis asperiores ad?
					</p>
				</Section>
				<Section>
					<h1>Our Vision</h1>
					<p>
						Vision of an Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aut cumque repudiandae praesentium quia accusantium dolorum nam quis perspiciatis, asperiores at accusamus alias vero pariatur neque inventore vel minima blanditiis rem, voluptatibus ex eveniet. A natus omnis quaerat voluptatum, alias recusandae, veniam ipsa exercitationem quos laborum et labore eum assumenda.
					</p>
				</Section>

				<Section right>
					<h1>Our Hightlights</h1>
					<ul>
						<li>some features</li>
						<li>other features</li>
						<li>one more feature </li>
						<li>Last feature</li>
					</ul>
				</Section>
				<Section>
					<h1>Our Exports</h1>
					<ol>
						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Reprehenderit consectetur
									sit ipsa?
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Reprehenderit consectetur
									sit ipsa?
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Reprehenderit consectetur
									sit ipsa?
								</li>
							</ul>
						</li>

						
					</ol>
				</Section>
				
			</div>
		</Scroll>
	);
};
