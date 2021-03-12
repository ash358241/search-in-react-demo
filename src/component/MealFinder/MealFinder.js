import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const handleChange = event => {
        // console.log(event.target.value);
        setSearch(event.target.value);
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [search])
    
   
    return (
        <div>
           <h1>sometimes api sucks</h1>
           <input onChange={handleChange} type="text" placeholder="search meal"/>
           <h3>you searched for: {search}</h3>
           <p>meal founded: {meals?.length || 0}</p>
           <ul>
               {
                   meals?.map(meal => <li key={meal.idMeal}>{meal.strMeal}</li>)
               }
           </ul>
        </div>
    );
};

export default MealFinder;