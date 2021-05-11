import React from "react";
import {SortableElement, SortableHandle} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => (
    <span className="move" >{'::::'}</span>)
);

const Row = SortableElement(({ data }) => {
    return (
        <tr >
            <td style={{ width: '5%' }}>
                <DragHandle />
            </td>
            <td>
                {data.docType}
            </td>
            <td>
                {data.companyId}
            </td>
            <td>
                {data.date}
            </td>
            <td>
                {data.docId}
            </td>
            <td>
                {data.sign}{data.amount}
            </td>
        </tr>
    )
});

export default Row;
