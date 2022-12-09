import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import apiCall from "../api";
import { fetchMealDetail } from "../redux/actions/detail";
import { errorDetail, isLoadingDetail, mealDetail } from "../redux/selectors";

const Meal = () => {
  const { id } = useParams();
  const meal = useSelector(mealDetail);
  const isLoading = useSelector(isLoadingDetail);
  const error = useSelector(errorDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    function fetchData() {
      dispatch(fetchMealDetail(id));
    }
    fetchData();
  }, [id]);

  if (isLoading) return <div>Cargando...</div>;
  if (Object.keys(error)?.length) return <h6>Ha ocurrido un error</h6>;

  return (
    <div className="p-2">
      <h2 className="text-4xl font-lato font-bold">Recetario</h2>
      {Object.keys(meal)?.length ? (
        <div className="flex py-8 px-4">
          <div className="w-1/4 flex flex-col items-start mb-2">
            <label htmlFor="#" className="font-lato font-bold text-xl">
              {meal.strMeal}
            </label>
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              className="w-80 max-w-6xl"
            />
          </div>
          <div className="w-3/4 flex flex-col items-start p-4">
            <label htmlFor="#" className="text-lg font-lato">
              Instrucciones
            </label>
            <p className="text-left font-lato">{meal?.strInstructions}</p>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default Meal;
