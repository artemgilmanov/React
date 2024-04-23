const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return [...state, action.payload];
    case 'DELETE_NAME':
      return state.filter((personeName) => personeName != action.payload);
    case 'CLEAR_NAMES':
      return [];
    default:
      return state;
  }
}

let newState = reducer(initialState, {
  type: 'ADD_NAME',
  payload: 'SomeName1',
});

console.info(newState);

newState = reducer(newState, {
  type: 'ADD_NAME',
  payload: 'SomeName2',
});

console.info(newState);

newState = reducer(newState, {
  type: 'DELETE_NAME',
  payload: 'SomeName2',
});

console.info(newState);

newState = reducer(newState, {
  type: 'CLEAR_NAMES',
});

console.info(newState);

newState = reducer(initialState, {
  type: 'ADD_NAME',
  payload: 'SomeName3',
});

console.info(newState);
