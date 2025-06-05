import { useEffect, useState } from "react";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";

function Header() {
  const [theme, setTheme] = useState<string | null>("light");

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem("theme");
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <div className="flex items-center py-7 border-b border-Grey-400 dark:bg-Blue-900 dark:border-Blue-950 transition-colors xs:px-10 lg:px-40">
      <h1 className="font-extrabold dark:text-white xs:text-sm lg:text-xl">
        Where in the world?
      </h1>

      <button
        className="flex gap-2 items-center cursor-pointer ml-auto"
        onClick={toggleDarkMode}
      >
        <img
          src={theme === "light" ? dark : light}
          alt="Moon icon"
          width={30}
        />
        <p className="dark:text-White">
          {theme === "light" ? "Dark" : "Light"} Mode
        </p>
      </button>
    </div>
  );
}
export default Header;
