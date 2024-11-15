import React from 'react';
import {Cell as CellClass} from "../classes/Cell";
import '../styles.css';


const Cell = ({cell = new CellClass()}: {cell: CellClass}) => {
    return (
        <div className="mark">
            {cell.print()}
        </div>
    )
}

export default Cell;