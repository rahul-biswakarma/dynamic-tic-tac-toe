import { useRef } from "react";

interface WinnerTypeProps {
	winner: string | null;
	setToggleWinnerScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WinnerScreen = (props: WinnerTypeProps) => {
	const { winner, setToggleWinnerScreen } = props;
	return (
		<div className="w-[100vw] h-[100vh] absolute top-0 left-0 backdrop-blur-md flex flex-col justify-center items-center transition">
			{winner !== "tie" && <span className="text-[3rem]">WINNER</span>}
			{winner === "X" ? (
				<span className="text-rose-600 text-[5rem] uppercase">{winner}</span>
			) : winner === "O" ? (
				<span className="text-blue-600 text-[5rem] uppercase">{winner}</span>
			) : (
				<span className="text-amber-600 text-[5rem] uppercase">{winner}</span>
			)}

			<button
				onClick={() => {
					setToggleWinnerScreen(false);
				}}
				className="absolute top-[1rem] right-[1rem] hover:rotate-90 flex justify-center items-center w-[2rem] h-[2rem] border-none hover:text-rose-600 transition"
			>
				<span className="material-symbols-outlined font-bold text-4xl">
					close
				</span>
			</button>
		</div>
	);
};

export { WinnerScreen };
