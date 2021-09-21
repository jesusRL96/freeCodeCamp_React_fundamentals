import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <ul>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <li key={id} className="item">
              {name}
              <button
                type="button"
                className="btn btn-secundary"
                onClick={() => removeItem(id)}
              >
                Remove Item
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="btn btn-secundary"
        onClick={() => setPeople([])}
      >
        Remove all
      </button>
    </>
  );
};

export default UseStateArray;
