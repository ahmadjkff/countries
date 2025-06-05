import { useState } from "react";
import Cards from "./Cards";
import LandPageHeader from "./LandPageHeader";

function LandPage() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="bg-Grey-50 py-10 px-40 dark:bg-Blue-950">
      <LandPageHeader setCountries={setCountries} />
      <Cards countries={countries} />
    </div>
  );
}

export default LandPage;
