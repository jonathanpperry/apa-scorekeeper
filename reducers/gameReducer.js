// reducers/gameReducer.js

const initialState = {
  tableNumber: "",
  format: "8-ball", // Default to 8-ball
  matchType: "Singles", // Default to Singles
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GAME_DETAILS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
