import {CellState} from "./CellState";
import {Cell} from "./Cell";

export class Table {
    private readonly size: number = 3;

    private active: CellState;
    get Active(): CellState {
        return this.active;
    }
    get Opposite(): CellState {
        return this.active === CellState.Circle ? CellState.Cross : CellState.Circle;
    }
    private changeActive(): void {
        this.active = this.Opposite;
    }

    private readonly cells: Cell[];
    get Cells(): ReadonlyArray<Cell> {
        return this.cells;
    }

    constructor() {
        this.active = CellState.Circle;
        this.cells = [...Array(this.size * this.size).keys()].map(i => new Cell());
    }

    public makeMove(index: number): boolean {
        if (!this.cells[index].trySetState(this.Active))
            return false;

        this.changeActive();
        return this.checkWinCondition(index);
    }

    private checkWinCondition(index: number): boolean {
        const indexState: CellState = this.cells[index].State;
        const checkArray: boolean[] = this.cells.map((cell) =>
            cell.State === indexState);
        return this.checkRow(index, checkArray)
            || this.checkColumn(index, checkArray)
            || this.checkDiagonals(checkArray);
    }

    private checkRow(index: number, grid: boolean[]): boolean {
        const rowIndex: number = Math.floor(index / this.size);
        return grid.slice(rowIndex * this.size, rowIndex * this.size + this.size).every(x => x);
    }

    private checkColumn(index: number, grid: boolean[]): boolean {
        const columnIndex: number = index % this.size;
        let result: boolean = true;
        for (let rowIndex: number = 0; rowIndex < this.size; rowIndex++) {
            result = result && grid[rowIndex * this.size + columnIndex];
        }
        return result
    }

    private checkDiagonals(grid: boolean[]): boolean {
        return grid.filter((_, i) =>
                Math.floor(i / this.size) === i % this.size)
            .every(x => x)
            || grid.filter((_, i) =>
                this.size - Math.floor(i / this.size) - 1 === i % this.size)
            .every(x => x);
    }
}