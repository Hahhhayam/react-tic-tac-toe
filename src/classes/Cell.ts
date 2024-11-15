import {CellState, printCellState} from "./CellState";


export class Cell {
    private state: CellState = CellState.None;
    get State(): CellState {
        return this.state;
    }

    trySetState(value: CellState): boolean {
        if (this.state !== CellState.None)
            return false;

        this.state = value;
        return true;
    }

    print(): string {
        return printCellState(this.state);
    }

    reset(): void{
        this.state = CellState.None;
    }
}
