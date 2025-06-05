import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { fetchCountries } from "../functionalities/fetchCountries";

interface DropDownProps {
  setCountries: React.Dispatch<React.SetStateAction<never[]>>;
}

export default function DropDown({ setCountries }: DropDownProps) {
  const [region, setRegion] = useState<string | null>(null);

  const handleRegionChange = (selectedRegion: string) => {
    setRegion(selectedRegion);
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries(
          `https://restcountries.com/v3.1/${region ? `region/${region}` : "all"}?fields=name,population,region,capital,flags`
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
  }, [region]);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center dark:bg-Blue-900 dark:text-White gap-x-1.5 rounded-md bg-white px-8 py-5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 dark:ring-Blue-900 ring-inset hover:bg-gray-50 dark:hover:bg-Blue-950">
          {region ? region : "Filter by Region"}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems className="dark:bg-Blue-900 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div className="py-1">
          {regions.map((reg) => (
            <MenuItem key={reg}>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } dark:text-White block w-full text-left px-4 py-2 text-sm`}
                  onClick={() => handleRegionChange(reg)}
                >
                  {reg}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
