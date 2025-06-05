// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import { numberFormat } from "../functionalities/numberFormat";

interface CardProps {
  img: string;
  country: string;
  population: number;
  region: string;
  capital: string;
}

const Card = ({ img, country, population, region, capital }: CardProps) => {
  return (
    <Link
      to={`/country/${country}`}
      className="flex flex-col w-68 gap-5 bg-White rounded-md shadow cursor-pointer dark:bg-Blue-900"
    >
      <img
        src={img}
        alt="coutry flag"
        className="w-full rounded-tr-md rounded-tl-md h-full max-h-[181px]"
      />
      <h2 className="font-extrabold px-4 dark:text-White">{country}</h2>
      <div className="flex flex-col gap-0.5 px-4 pb-6 dark:text-White">
        <p>
          Population:{" "}
          <span className="text-Grey-400">{numberFormat(population)}</span>
        </p>
        <p>
          Region: <span className="text-Grey-400">{region}</span>
        </p>
        <p>
          Capital: <span className="text-Grey-400">{capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
