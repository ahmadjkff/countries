import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/back.png";
import { useEffect, useState } from "react";
import { fetchCountries } from "../functionalities/fetchCountries";
import { numberFormat } from "../functionalities/numberFormat";

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<any>(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries(
          `https://restcountries.com/v3.1/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
        );

        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    getCountries();
  }, []);

  if (!country) return <>Loading</>;

  return (
    <div className="py-20 px-40 dark:bg-Blue-950 dark:text-White">
      <Link
        to={".."}
        className="relative px-14 py-1.5 border border-Grey-400 rounded-md shadow-xl dark:border-Blue-900"
      >
        <img
          src={backIcon}
          alt="back icon"
          className="absolute top-1/2 left-6 -translate-y-1/2"
          width={25}
        />
        Back
      </Link>

      <div className="flex py-20 gap-40">
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-[600px] min-h-[400px]"
        />
        <div className="pt-10">
          <h2 className="text-3xl font-extrabold">{country.name.common}</h2>
          <div className="flex pt-20 gap-10">
            <div className="flex flex-col gap-2 w-60">
              <p className="font-semibold">
                Population:
                <span className="font-normal text-Grey-400 ml-2">
                  {numberFormat(country.population)}
                </span>
              </p>
              <p className="font-semibold">
                Region:
                <span className="font-normal text-Grey-400 ml-2">
                  {country.region}
                </span>
              </p>
              <p className="font-semibold">
                Sub Region:
                <span className="font-normal text-Grey-400 ml-2">
                  {country.subregion}
                </span>
              </p>
              <p className="font-semibold">
                Capital:
                <span className="font-normal text-Grey-400 ml-2">
                  {country.capital}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 w-60">
              <p className="font-semibold">
                Top Level Domain:
                <span className="font-normal text-Grey-400 ml-2">
                  {country.tld.join(", ")}
                </span>
              </p>
              <p className="font-semibold">
                Currencies:
                <span className="font-normal text-Grey-400 ml-2">
                  {Object.values<any>(country.currencies)[0].name}
                </span>
              </p>
              <p className="font-semibold">
                Languages:
                <span className="font-normal text-Grey-400 ml-2">
                  {Object.values(country.languages).join(", ")}
                </span>
              </p>
            </div>
          </div>
          <p className="pt-20 flex text-nowrap gap-5 font-semibold">
            Border Countries:
            <span className="flex flex-wrap gap-2">
              {country.borders ? (
                country.borders.map((b: any) => (
                  <span
                    className="px-10 border rounded-md font-light dark:bg-Blue-900"
                    key={b}
                  >
                    {b}
                  </span>
                ))
              ) : (
                <span className="font-light">No Border Countries</span>
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
