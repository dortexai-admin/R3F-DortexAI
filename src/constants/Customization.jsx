import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
	const [currentFloor, setCurrentFloor] = useState(0);
	const [targetPos, setTargetPos] = useState([0, 0, 0]);

	return (
		<CustomizationContext.Provider
			value={{
				

				currentFloor,
				setCurrentFloor,
				targetPos,
				setTargetPos,
			}}
		>
			{props.children}
		</CustomizationContext.Provider>
	);
};

export const useCustomization = () => {
	const context = useContext(CustomizationContext);
	return context;
};
