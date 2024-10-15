import React, { useEffect, useRef } from "react";
import { OrbitControls, ScrollControls, CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Prototype3 } from "./Prototype3";
import { Overlay } from ".././Overlay";
import { useCustomization } from "../../constants/Customization";

export const EnvironmentCanvas = () => {

	const {
		currentFloor,
		setCurrentFloor,
	} = useCustomization();

	const cameraControlRef = useRef(null);
	const handleView = (position, target, enableTransition) => {
		cameraControlRef.current?.setLookAt(
			position.x,
			position.y,
			position.z,
			target.x,
			target.y,
			target.z,
			enableTransition
		);
	};

	useEffect(() => {
		if (currentFloor === 1) {
			handleView(
				{ x: 2, y: 0, z: 0 }, // position
				{ x: 0, y: 0, z: 0 }, // target
				true // enableTransition
			);
			
		} else if (currentFloor === 2) {
			handleView(
				{ x: -4, y: 2, z: 2 }, // position
				{ x: -2, y: 2, z: -2 }, // target
				true // enableTransition
			);
		} else if (currentFloor === 3) {
			handleView(
				{ x: 0, y: 4, z: -4 }, // position
				{ x: -4, y: 4, z: -4 }, // target
				true // enableTransition
			);
		}
	}, [currentFloor]);

	return (
		<Canvas shadows camera={{ position: [3, 0, 0], fov: 50 }}>
			<color attach="background" args={["#1e1e1e"]} />
			<ambientLight intensity={0.5} />
			<CameraControls ref={cameraControlRef} panSpeed={0} rotate={false} zoom={false} />
			{/* maxSpeed | enabled={false} */}
			{/* <OrbitControls /> */}
			<ScrollControls pages={7} damping={0.1}>
				<Overlay />
				<Prototype3 />
			</ScrollControls>
		</Canvas>
	);
};
