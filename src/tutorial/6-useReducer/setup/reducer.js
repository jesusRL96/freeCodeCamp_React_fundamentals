export const reducer = (state, action) => {
  console.log(state, action);
  const newPeople = [...state.people, action.payload];
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: newPeople,
      isModalOpened: true,
      modalContent: "Item added",
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpened: true,
      modalContent: "Item removed",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpened: false,
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpened: true,
      modalContent: "please enter a value",
    };
  }
  throw new Error("no matching action type");
};
