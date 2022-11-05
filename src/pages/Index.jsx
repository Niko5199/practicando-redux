import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiCall from "../api";
import MealItem from "../components/MealItem";
import { fetchRecipes } from "../redux/actions/results";

const Index = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchClick = async () => {
    try {
      setIsLoading(true);
      dispatch(fetchRecipes(searchText));

      const response = await apiCall(`/search.php?s=${searchText}`);
      setSearchResults(response?.meals);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMealClick = (id) => {
    navigate(`/meal/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2 className="text-4xl font-bold my-4 font-lato">
          Buscador de recetas.
        </h2>
        <div className="h-10">
          <input
            type="text"
            placeholder="Buscar por nombre"
            className="text-lg p-1 border-2 rounded-sm border-slate-500 w-90 h-full font-lato mt-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white text-lg h-full ml-2 w-28 rounded hover:bg-blue-600 font-lato font-bold"
            onClick={handleSearchClick}
          >
            Buscar
          </button>
        </div>

        {isLoading && <h6 className="mt-8">Cargando...</h6>}
        {error && <h6 className="text-red-500 mt-2">Ha ocurrido un error</h6>}
        <div className="flex flex-row flex-wrap my-8 justify-center">
          {!isLoading &&
            searchResults?.map((meal) => (
              <MealItem key={meal.idMeal} {...meal} onClick={handleMealClick} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
