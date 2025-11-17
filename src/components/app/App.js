import "./App.css";
import { useEffect, useContext } from "react";
import { DataContext } from "../../services/reducers/data-reducer";
import Header from "../header/header";
import Footer from "../footer/footer";
import HomePage from "../../pages/home/home-page";
import { Route, Routes, useLocation } from "react-router-dom";
import IconPage from "../../pages/icon-page/icon-page";
import { MockedData } from "../../utils/mock-data";

export default function App() {
  const { dispatch } = useContext(DataContext);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "SET_DATA", payload: MockedData });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    })();
  }, [dispatch]);

  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:name" element={<IconPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
