// reducers/userReducer.js

const initialState = {
  player1: {
    fullName: "",
    membershipNumber: "",
    skillLevel: "",
  },
  player2: {
    fullName: "",
    membershipNumber: "",
    skillLevel: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYER_INFO":
      // Updates player 1 or player 2 info based on the payload
      return {
        ...state,
        [action.payload.player]: {
          ...state[action.payload.player],
          ...action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
