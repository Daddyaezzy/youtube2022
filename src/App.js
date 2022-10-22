import Register from "./Pages/Register";
import Home from "./Pages/Home";
import "./style.scss";
import { createContext } from "react";
import { useState } from "react";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={<Home toggleTheme={toggleTheme} theme={theme} />}
              />
              <Route
                path="login"
                element={<Login toggleTheme={toggleTheme} theme={theme} />}
              />
              <Route
                path="register"
                element={<Register toggleTheme={toggleTheme} theme={theme} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
