import React, {useState, useEffect} from "react";
import {SortableContainer} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import Row from "./Row";
import {Thead} from "./Thead";

const TableBodySortable = SortableContainer(({children}) => (
    <tbody>
    {children}
    </tbody>
));

export function List({docs, loading}) {

    const [items, setItems] = useState(docs);

    useEffect(() => {
        setItems(docs);
    }, [docs]);

    const onSortEnd = ({oldIndex, newIndex}) => {
        setItems(arrayMove(items, oldIndex, newIndex));
    };

    return (
        <div>
            {!!items && !!items.length && <table className="table text-center">
                <thead>
                <Thead/>
                </thead>
                <TableBodySortable onSortEnd={onSortEnd} useDragHandle
                                   displayRowCheckbox={false}>
                    {items.map((row, index) => {
                        return (
                            <Row
                                index={index}
                                key={row.docId}
                                data={row}
                            />
                        )
                    })}
                </TableBodySortable>
            </table>}
        </div>
    )
}
