import React from "react";

const UserInfo = (props) => ({firstName, lastName, email, phoneNumber}) => {
  return (
    <div>
      <p>FirstName:{props.Samuel} </p>
      <p>LastName:{props.Seun}</p>
      <p>Email Address:{props.email}</p>
      <p>Phone Number:{props.number}</p>
    </div>
  );
};



export default UserInfo;