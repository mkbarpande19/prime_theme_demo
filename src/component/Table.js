import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Table = ({ data, columns }) => {
  return (
    <DataTable
      value={data}
      resizableColumns
      showGridlines
      tableStyle={{ minWidth: "50rem" }}
    >
      {columns.map((k) => {
        return <Column field={k} header={k.toUpperCase()} />;
      })}
    </DataTable>
    // <div>Table</div>
  );
};

export default Table;
