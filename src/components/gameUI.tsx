import Cell from "./Cell";

export default function UI(props: any) {
	const { isEven, setIsEven, board, setBoard, winner, setWinner } = props;

	return (
		<section className="flex flex-col bg-black gap-[5px] w-max h-[60vh] w-[60vh]">
			{board.map((col: any, colIndex: number) => {
				return (
					<div
						key={`col-${colIndex}`}
						className="flex gap-[5px] w-full h-full"
					>
						{col.map((cell: any, cellIndex: number) => {
							return (
								<Cell
									key={`cell-${colIndex}-${cellIndex}`}
									cellIndex={cellIndex}
									colIndex={colIndex}
									isEven={isEven}
									setIsEven={setIsEven}
									board={board}
									setBoard={setBoard}
									cell={cell}
									winner={winner}
									setWinner={setWinner}
								/>
							);
						})}
					</div>
				);
			})}
		</section>
	);
}
