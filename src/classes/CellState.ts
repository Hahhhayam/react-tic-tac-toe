export enum CellState {
    None,
    Circle,
    Cross,
}

export function printCellState(cellState: CellState) {
    switch (cellState) {
        case CellState.Circle:
            return "O";
        case CellState.Cross:
            return "X";
        default:
            return "";
    }
}