import ValidateBoard from "../utils/validateBoard";

export default function Cell(props: any) {
	const {
		cellIndex,
		colIndex,
		isEven,
		setIsEven,
		board,
		setBoard,
		cell,
		winner,
		setWinner,
	} = props;

	function handleClick(
		colIndex: number,
		cellIndex: number,
		isEven: boolean,
		setIsEven: any,
		board: any,
		setBoard: any
	) {
		let tempBoard = board;
		if (winner === null) {
			if (isEven && board[colIndex][cellIndex] === "") {
				board[colIndex][cellIndex] = "X";
				setIsEven(!isEven);
				setBoard(tempBoard);
				let winner = ValidateBoard(board);
				setWinner(winner);
			} else if (board[colIndex][cellIndex] === "") {
				board[colIndex][cellIndex] = "O";
				setIsEven(!isEven);
				setBoard(tempBoard);
				let winner = ValidateBoard(board);
				setWinner(winner);
			}
		}
	}

	return (
		<button
			onClick={() => {
				handleClick(colIndex, cellIndex, isEven, setIsEven, board, setBoard);
			}}
			className="relative bg-white w-full h-full cursor-pointer flex justify-center items-center text-center"
		>
			{cell === "X" ? (
				<p className="text-rose-500 text-[3rem]">{cell}</p>
			) : (
				<p className="text-blue-500 text-[3rem]">{cell}</p>
			)}
		</button>
	);
}
