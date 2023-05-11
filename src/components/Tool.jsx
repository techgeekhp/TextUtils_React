import React from "react";

function Tool({name, age}) {
  return (
    <div>
      <h1>Tools</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  );
}
Tool.defaultProps = {
  name: "raz",
  age: 10,
};
export default Tool;
