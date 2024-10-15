import { EnvironmentCanvas } from "./components/canvas/EnvironmentCanvas";
import { Header } from "./components/Header";
import Button from "./components/Button";
import { useCustomization } from "./constants/Customization";
function App() {
	const { currentFloor, setCurrentFloor } = useCustomization();

	const handlePrevBtn = () => {
		/* If the value of currentFloor is 0, then return */
		if (currentFloor === 1) {
			return;
		}
		setCurrentFloor(currentFloor - 1); // Decrease the value of currentFloor by 1
	};
	const handleNextBtn = () => {
		/* If the value of currentFloor is 5, then return */
		if (currentFloor === 3) {
			return;
		}
		setCurrentFloor(currentFloor + 1); // Increase the value of currentFloor by 1
	};

	return (
		<div className="relative">
			<div className="fixed flex flex-col h-full w-full">
				<Header />
				<EnvironmentCanvas />

				<div className=" fixed b-0">
					<div className="flex items-end justify-center w-screen ">
						<Button
							onClick={handlePrevBtn}
							size="lg"
							variant="outline"
						>
							Prev.
						</Button>
						<Button size="ls" variant="outline">
							{currentFloor}
						</Button>
						<Button
							onClick={handleNextBtn}
							size="lg"
							variant="outline"
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
