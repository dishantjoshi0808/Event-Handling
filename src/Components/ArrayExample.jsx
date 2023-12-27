import React from "react";

function ArrayExample() {
  const simpleArray = ["A", "B", "C", "D"];
  
  const arrayOfObjects = [
    { id: 1, name: "AAA" },
    { id: 2, name: "BBB" },
    { id: 3, name: "CCC" }
  ];

  return (
    <div>
      <h2>Array:</h2>
      <ul>
        {simpleArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Array of Objects:</h2>
      <ul>
        {arrayOfObjects.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayExample;
