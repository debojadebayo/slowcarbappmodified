// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from "openai"
import Ingredients from'./Ingredients.js'

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPEN_AI_API_KEY })
);
export default async function handler(req, res) {
  try{
    const result = await openai.createChatCompletion({
        messages: [{role: "user", 
        content:`Using these ingredients ${JSON.stringify(Ingredients)}
    please create a meal plan that has breakfast lunch and dinner for 6 days of the week`}],
    model: "gpt-3.5-turbo",
    max_tokens: 1000,
    temperature: 0.9,
    top_p: 1,
    stop: null,
    n: 1,})

     const mealPlan = result.data.choices[0].message.content;
     res.send(mealPlan);
} catch (error) {
    console.log(error);
    res.status(500).json({error: "Didn't fetch meal plan"});
}
}