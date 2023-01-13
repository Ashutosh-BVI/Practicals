import React from "react";
import EmployeList from "./components/EmployeList";
import { useState } from "react";

const employees = [
  {
    id: 1,
    name: "Goku",
    department: "Admin",
  },
  {
    id: 2,
    name: "Tony",
    department: "Engineering",
  },
  {
    id: 3,
    name: "Loki",
    department: "Marketing",
  },
];

const showAlert = (name, dept) => {
  alert(`Employe Name:- ${name} 
Department:- ${dept}`);
};

function App() {
  const [sendId, setSendId] = useState("");
  const empList = employees.map((emp, index) => (
    <h3 onClick={() => setSendId(emp.id)} key={index}>
      {emp.name}
    </h3>
  ));

  return (
    <div className="container">
      <h1>Employee List</h1>
      {empList}
      <EmployeList list={employees} showAlert={showAlert} empID={sendId} />
      <hr />
    </div>
  );
}

export default App;
