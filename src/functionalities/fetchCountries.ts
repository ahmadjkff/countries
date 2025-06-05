export const fetchCountries = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch countries:", error);
  }
};
