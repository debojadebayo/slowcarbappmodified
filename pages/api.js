import React from "react";
import axios from "axios";

export default async function fetchMealPlan(prompt){

    try{
        const response = await axios.post('/api/meal-plans', {prompt});
        return response.data;
    } catch (error) {
        console.error("Error fetching meal plan", error);
        return error;
    }

}