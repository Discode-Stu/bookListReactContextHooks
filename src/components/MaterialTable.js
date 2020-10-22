import React from "react";
import MaterialTable from "material-table";

const MaterTable = () => {
  const data = [
    { name: "Daniel", age: 34 },
    { name: "Steph", age: 24 },
    { name: "Peter", age: 38 },
    { name: "Abdul", age: 4 },
  ];
  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Age",
      field: "age",
    },
  ];
  return (
    <div>
      <MaterialTable
        title="Material Table"
        data={data}
        columns={columns}
        options={{
        //   search: false,
        //   paging: false,
        //   filtering: true,
          //! FIND ALL AT THE MATERIAL-TABLE.COM FEATURES SIDEBAR TAB
        }}
      />
    </div>
  );
};

export default MaterTable;
