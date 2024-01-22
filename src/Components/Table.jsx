import React from "react";
import { Table } from "@web3uikit/core";

const TableNew = ({ data, header, style }) => {
  return (
    <div>
      <Table
        columnsConfig={style}
        data={data}
        header={header}
        isColumnSortable={[false, true, false, false]}
        maxPages={3}
        onPageNumberChanged={function noRefCheck() {}}
        onRowClick={function noRefCheck() {}}
        pageSize={5}
      />
    </div>
  );
};

export default TableNew;
