import React from "react";
import fetchMealPlan from "./api";


// This will import the Meal component from the Meal.js file and render the number of meals the user requests
// Each time this happens an API call will be made to the GPT4 API which will render a new meal 

function MealList(props) {

    const [mealPlan, setMealPlan] = React.useState([]);

    const handleGetMealPlan = async () => {
        try{
            const mealPlanResponse = await fetchMealPlan();
            setMealPlan(mealPlanResponse);
        } catch (error) {
            console.error("Error fetching meal plan from your component", error);
        }};

    return (
        <div className="m-10 text-center space-y-10">
            <h1 className="text-3xl">Meal List</h1>
            <button onClick={handleGetMealPlan} className="border border-1 border-grey p-2 hover:bg-red-500">Get Meal Plan</button>
            {mealPlan && <pre style={{fontFamily: "Roboto, sans-serif"}}>{mealPlan}</pre>}
        </div>
    )

console.log("Meal List component logged")
};

export default MealList;