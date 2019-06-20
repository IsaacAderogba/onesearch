const initialState = [];

if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    let retrievedItem = JSON.parse(window.localStorage.getItem(i));
    initialState.push(retrievedItem);
  }
}

export default initialState;
