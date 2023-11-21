import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line to import Bootstrap styles
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app container-fluid">
        <div className="d-flex flex-row">
          <div className="">
            <NoteList />
          </div>
          <div className="">
            <NoteForm />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
