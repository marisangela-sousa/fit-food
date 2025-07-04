const inputTitle = document.querySelector(".input-title");
const inputIngredients = document.querySelector(".input-ingredients");
const inputSteps = document.querySelector(".input-steps");
const recipe = document.querySelector(".recipe")
const button = document.querySelector(".post");

const post = () => {
    const titleValue = inputTitle.value;
    const ingredientsValue = inputIngredients.value;
    const stepsValue = inputIngredients.value;

    const title = document.createElement("h2");
    title.classList.add("recipe-title");
    title.innerHTML = titleValue;

    const ulIngredients = document.createElement("ul");

    const ingredients = document.createElement("li");
    ingredients.classList.add("recipe-ingredient")
    ingredients.innerHTML = ingredientsValue;

    const steps = document.createElement("p");
    steps.classList.add("recipe-steps");
    steps.innerHTML = stepsValue;

    ulIngredients.appendChild(ingredients);

    recipe.appendChild(title);
    recipe.appendChild(ulIngredients);
    recipe.appendChild(steps)
    
}

button.addEventListener("click", post);

fetch("data.json")
.then(response => {
    return response.json();
})
.then((data) => {
    const recipes = data.recipes;

    recipes.forEach(element => {
        const title = document.createElement("h2");
        title.classList.add("recipe-title");
        title.innerHTML = element.title;

        recipe.appendChild(title);

        const image = document.createElement("img");
        image.src = element.image;

        recipe.appendChild(image);

        const ulIngredients = document.createElement("ul");
        element.ingredients.forEach(ingredientsList => {
            const ingredients = document.createElement("li");
            ingredients.classList.add("recipe-ingredient")
            ingredients.innerHTML = ingredientsList.name;
            recipe.appendChild(ulIngredients);
            ulIngredients.appendChild(ingredients);
        })

        const steps = document.createElement("p");
        steps.classList.add("recipe-steps");
        steps.innerHTML = element.steps;


        recipe.appendChild(steps)
    });
})