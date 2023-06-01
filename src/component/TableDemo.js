import React from "react";
import { Users } from "./MockData";
import Table from "./Table";

const TableDemo = () => {
  const columns = Object.keys(Users[0]);
  console.log("columns", columns);
  return <Table data={Users} columns={columns} />;
};

export default TableDemo;
