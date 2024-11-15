import React, {useState} from 'react'
import Cell from './Cell';
import {printCellState} from '../classes/CellState';
import "../styles.css";
import {Table as TableClass} from "../classes/Table";


const Table = () => {
    const [trigger, triggerUpdate] = useState<boolean>(false);
    function refresh() {
        triggerUpdate(!trigger);
    }
    const [isPreviousWin, setIsPreviousWin] = useState(false);
    const [table] = useState<TableClass>(new TableClass());
    return (
        <div>
            <div className="caption">
                {printCellState(table.Active)} turn
            </div>
            <div className="grid">
                {table.Cells.map((i, index) =>
                    <div className="Cell" key={index} onClick={() => {
                        setIsPreviousWin(table.makeMove(index));
                        refresh();
                    }}>
                        <Cell cell={table.Cells[index]}/>
                    </div>
                )}
            </div>
            <div className={isPreviousWin ? "congrats" : "congrats-hidden"}>
                {printCellState(table.Opposite)} win!
            </div>
        </div>
    )
}

export default Table
