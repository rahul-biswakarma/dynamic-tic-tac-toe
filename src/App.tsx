import React, { useEffect, useState } from "react";

import UI from "./components/GameUI";
import { WinnerScreen } from "./components/Winner";

export default function App() {
	// States
	const [isEven, setIsEven] = useState<boolean>(true);
	const [winner, setWinner] = useState<string | null>(null);
	const [toogleWinnerScreen, setToggleWinnerScreen] = useState<boolean>(false);
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);

	useEffect(() => {
		if (winner !== null) setToggleWinnerScreen(true);
	}, [winner]);

	return (
		<div className="flex justify-center items-center h-[100vh]">
			<UI
				isEven={isEven}
				setIsEven={setIsEven}
				board={board}
				setBoard={setBoard}
				winner={winner}
				setWinner={setWinner}
			/>
			{toogleWinnerScreen && (
				<WinnerScreen
					winner={winner}
					setToggleWinnerScreen={setToggleWinnerScreen}
				/>
			)}
		</div>
	);
}
