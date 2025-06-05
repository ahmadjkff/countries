import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import LandPage from "./components/LandPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
