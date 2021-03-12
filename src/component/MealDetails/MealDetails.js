import React, { useEffect, useState } from 'react';

const MealDetails = () => {
    const [meal, setMeal] = useState({});
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    }, [])
    return (
        <div>
            <h1>this is meal details</h1>
            <h3>name: {meal.strMeal}</h3>
        </div>
    );
};

export default MealDetails;