import { useLoaderData } from "react-router-dom";
import axios from "axios";

const Api = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await axios.get(`${Api}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);

  return (
    <h2>Landing</h2>
  );
};

export default Landing;
