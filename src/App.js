import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import ErrorPage from "./pages/ErrorPage/ErrorPage";


import IsAnon from "./components/IsAnon/IsAnon";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={ <HomePage />} />

        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
