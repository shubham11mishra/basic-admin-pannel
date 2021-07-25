import React, { useState, useEffect } from "react";
import axios from "axios";
import EDetail from "../EmployereeDetail";
const EmployeeTable = () => {
  const [employees, setEmpoloyees] = useState([]);
  const [employeeslist, setEmpoloyeesList] = useState([]);
  const [isDataAvailabel, setisDataAvailabel] = useState(false);
  const [employeeDetail, setEmployeeDetail] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      )
      .then((res) => {
        setEmpoloyees(res.data);
        setEmpoloyeesList(res.data);
      });
  }, []);

  const fetchEmployeeDetail = (employeeId) => {
    setEmployeeDetail(employees.find((item) => item.id === employeeId));

    setisDataAvailabel(true);
  };
  console.log(employees);
  const searchEmployeee = (q) => {
    const updatedValues = employees.filter((name) =>{
      if( name.firstName.toLowerCase().includes(q) ||  name.lastName.toLowerCase().includes(q)){
        return name;
      }
    }
     
    );
    setEmpoloyeesList(updatedValues);
  };
  return (
    <>
      <div id="table-section">
        <form action="/">
          <img src="./img/search-icon.svg" alt="Search Icon" />
          <input
            type="text"
            placeholder="Enter something"
            name="search-box"
            id="search-box"
            onChange={(e) => searchEmployeee(e.target.value)}
          />
        </form>

        <div id="table-wrapper">
          <div id="table-headers">
            <table>
              <thead>
                <tr>
                  <th class="column1">Id</th>
                  <th class="column2">FirstName</th>
                  <th class="column3">LastName</th>
                  <th class="column4">Email</th>
                  <th class="column5">Phone</th>
                </tr>
              </thead>
            </table>
          </div>

          <div id="table-data">
            <table>
              <tbody>
                {employeeslist.length &&
                  employeeslist.map((employee, index) => {
                    return (
                      <tr
                        onClick={() => fetchEmployeeDetail(employee.id)}
                        key={index}
                        class="data-row"
                      >
                        <td class="column1">{employee.id}</td>
                        <td class="column2">{employee.firstName}</td>
                        <td class="column3">{employee.lastName}</td>
                        <td class="column4">{employee.email}</td>
                        <td class="column5">{employee.phone}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div />
      </div>
      <EDetail {...employeeDetail} isDataAvailabel={isDataAvailabel} />
    </>
  );
};

export default EmployeeTable;
