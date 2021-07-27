import React, { useState, useEffect } from "react";
import axios from "axios";
import EDetail from "../EmployereeDetail";
import data from "../uttils/mock.json";
const EmployeeTable = () => {
  const [employees, setEmpoloyees] = useState([]);
  const [employeeslist, setEmpoloyeesList] = useState([]);
  const [isDataAvailabel, setisDataAvailabel] = useState(false);
  const [employeeDetail, setEmployeeDetail] = useState("");
  useEffect(() => {
    setEmpoloyees(data);
    setEmpoloyeesList(data);
    // axios.get("../uttils/mock.json").then((res) => {
    //   setEmpoloyees(res.data);
    //   setEmpoloyeesList(res.data);
    //   console.log(res.data);
    // });
  }, []);

  const fetchEmployeeDetail = (employeeId) => {
    setEmployeeDetail(employees.find((item) => item.id === employeeId));

    setisDataAvailabel(true);
  };

  const searchEmployeee = (q) => {
    const updatedValues = employees.filter((name) => {
      if (
        name.firstName.toLowerCase().includes(q) ||
        name.lastName.toLowerCase().includes(q)
      ) {
        return name;
      }
    });
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
            onKeyDown={(e) => {
              if (e.keyCode == 13) {
                e.preventDefault();
                return false;
              }
            }}
            onChange={(e) => {
              e.preventDefault();
              return searchEmployeee(e.target.value);
            }}
          />
        </form>

        <div id="table-wrapper">
          <div id="table-headers">
            <table>
              <thead>
                <tr>
                  <th className="column1">Id</th>
                  <th className="column2">FirstName</th>
                  <th className="column3">LastName</th>
                  <th className="column4">Email</th>
                  <th className="column5">Phone</th>
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
                        className="data-row"
                      >
                        <td className="column1">{employee.id}</td>
                        <td className="column2">{employee.firstName}</td>
                        <td className="column3">{employee.lastName}</td>
                        <td className="column4">{employee.email}</td>
                        <td className="column5">{employee.phone}</td>
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
