import React from "react";

const BackendErrorMessages = ({ backendErrors }) => {
  console.log("backendErrors", backendErrors);
  const errorMessages = Object.keys(backendErrors).map(name => {
    const messages = backendErrors[name].join();
    return `${name} ${messages}`;
  });
  console.log("errpoeMessages", errorMessages);
  return (
    <ul>
      {errorMessages.map(err => (
        <li key={err}>{err}</li>
      ))}
    </ul>
  );
};
export default BackendErrorMessages;
