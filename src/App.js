import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <HeaderSection />
      <Outlet />
    </>
  );
}

export default App;
