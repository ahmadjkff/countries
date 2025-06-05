import Card from "../common/Card";

type CardsProps = {
  countries: Array<any>; // ideally you'd define a proper Country type
};

const Cards = ({ countries }: CardsProps) => {
  return (
    <div className="flex gap-8 py-10 flex-wrap sm:flex-col md:flex-row items-center justify-center">
      {countries?.map((c) => (
        <Card
          key={c.flag}
          country={c.name.common}
          img={c.flags.png}
          population={c.population}
          region={c.region}
          capital={c.capital}
        />
      ))}
    </div>
  );
};

export default Cards;
