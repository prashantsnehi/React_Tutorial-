import { useState } from 'react';

function MealComponent() {
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    let [meals, setMeals] = useState([{}]);
    let loadData = () => {
        fetch(url)
            .then(response =>
                response.json()
            )
            .then((result) =>
                setMeals(result.meals))
            .catch((error) =>
                console.log(error));
    }
    return (
        <div>
            {/* {loadData()} */}
            <div className="row d-flex m-4 justify-content-around align-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            All Meals Details
                        </div>
                        <div className="card-body">
                            <div className="row d-flex m-2 justify-content-center align-content-center mb-4">
                                <div className="col-md-6 d-grid gap-2">
                                    <button className="btn btn-success"
                                        onClick={loadData}>
                                        Load Meals
                                    </button>
                                </div>
                            </div>
                            <div className="row d-flex m-2 justify-content-around align-content-center">
                                {
                                    meals.map(meal =>
                                        <div className="col-md-3" key={meal.idMeal}>
                                            <div className="card" style={{ width: "18rem" }}>
                                                <img src={meal.strMealThumb} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{meal.strMeal}</h5>
                                                    <h6>Category: {meal.strCategory}</h6>
                                                    <p className="card-text">{meal.strInstructions}</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MealComponent;