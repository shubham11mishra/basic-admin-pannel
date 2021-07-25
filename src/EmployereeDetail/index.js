import React from "react";

const EmpDetails = (props) => {
 
  

  if (props.isDataAvailabel === true) {
   
    const { firstName, lastName, description, address } = props;
    return (
      <div id="info-wrapper">
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>

        <div id="">
          <div>
            <b>User selected:</b> {firstName} {lastName}
          </div>
          <div>
            <b>Description: </b>
            <textarea cols="50" rows="5" value={description}></textarea>
          </div>
          <div>
            <b>Address:</b> {address.streetAddress}
          </div>
          <div>
            <b>City:</b> {address.city}
          </div>
          <div>
            <b>State:</b> {address.state}
          </div>
          <div>
            <b>Zip:</b> {address.zip}
          </div>
        </div>
      </div>
    
    );
  } else {
    return (
      <div id="info-wrapper">
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
      </div>
    );
  }
};

export default EmpDetails;
