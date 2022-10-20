import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => {
      document.documentElement.style.setProperty('--bodyColor', curr === "light" ? "#000000" : "#ffffff");
      return (curr === "light" ? "dark" : "light");
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      <div className="todo-app" id={theme}>
        <TodoList />
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          <div className="credits">
            <label> Ingrid Fonoy😄</label>
          </div>
        </div>
      </div>
    </ThemeContext.Provider> 
  );
}

export default App;
