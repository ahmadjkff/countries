import { useEffect, useState } from "react";
import searchIcon from "../assets/search.png";
import DropDown from "../common/DropDown";
import { fetchCountries } from "../functionalities/fetchCountries";

interface LandPageHeaderProps {
  setCountries: React.Dispatch<React.SetStateAction<never[]>>;
}

const LandPageHeader = ({ setCountries }: LandPageHeaderProps) => {
  const [search, setSearch] = useState<string | undefined>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm: string = e.target.value;
    console.log(searchTerm);
    setSearch(searchTerm);
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries(
          `https://restcountries.com/v3.1/${search ? `name/${search}` : "all"}?fields=name,population,region,capital,flags`
        );
        const filteredCountries = data?.filter(
          (c: any) => c.name.common !== "Israel"
        );

        setCountries(filteredCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    getCountries();
  }, [search]);

  return (
    <div className="flex justify-between items-center ">
      <div className="relative">
        <img
          src={searchIcon}
          alt="search icon"
          className="absolute top-1/2 left-4 -translate-y-1/2"
          width={20}
        />
        <input
          type="text"
          placeholder="Search for a country"
          className="w-[30rem] pl-18 py-3 border-Grey-50 border rounded-md shadow-2xl dark:bg-Blue-900 dark:text-White dark:border-Blue-900"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <DropDown setCountries={setCountries} />
    </div>
  );
};

export default LandPageHeader;
