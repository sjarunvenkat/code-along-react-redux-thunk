import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserList from "./components/UserList";
import FetchButton from "./components/FetchButton";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FetchButton />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
