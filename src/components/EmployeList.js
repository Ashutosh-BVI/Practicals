import React from "react";

function EmployeList({ list, showAlert, empID }) {
  //   console.log(list);
  //   console.log(empID);

  const empDept = list.map((emp, index) =>
    emp.id === empID ? (
      <h3 onClick={() => showAlert(emp.name, emp.department)} key={index}>
        {emp.name}
      </h3>
    ) : (
      ""
    )
  );

  return <div className="container">{empDept}</div>;
}

export default EmployeList;
