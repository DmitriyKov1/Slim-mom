import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import "./App.css";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePages from "./pages/HomePages";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/HomePages" element={<HomePages />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
