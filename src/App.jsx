import { useEffect, useState, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import SingleMovie from "./pages/singleMovie/Index";
import LogIn from "./pages/logIn/Index";
import SignUp from "./pages/signUp/Index";
function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LogIn setToken={setToken} />} />
        <Route path="/signUp" element={<SignUp />} />
        {token && <Route path="/home" element={<Home />} />}
        <Route path="movie/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
