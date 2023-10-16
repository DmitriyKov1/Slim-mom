import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import "./App.css";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePages from "./pages/HomePages";
import { Suspense } from "react";
import Loader from "../src/Components/Loader/Loader";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePages />} />
            <Route path="/RegistrationPage" element={<RegistrationPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
