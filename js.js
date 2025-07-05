const inputTitle = document.querySelector(".input-title");
const inputIngredients = document.querySelector(".input-ingredients");
const inputSteps = document.querySelector(".input-steps");
// const recipe = document.querySelector(".recipe")
const containerRecipes = document.querySelector(".container-recipes")
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

const getRecipes = (recipes) => {
    containerRecipes.innerHTML = "";
    recipes.forEach(element => {
    const recipe = document.createElement("article");
    recipe.classList.add("card");
    recipe.style.width = "18rem";

    
    const image = document.createElement("img");
    image.src = element.image;
    image.classList.add("card-img-top");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    const title = document.createElement("h5");
    title.innerHTML = element.title;
    title.classList.add("card-title");

    const description = document.createElement("p");
    description.textContent = element.description;
    description.classList.add("card-text");
    
    const ulIngredients = document.createElement("ul");
    
    element.ingredients.forEach(ingredientsList => {
        const ingredients = document.createElement("li");
        ingredients.classList.add("recipe-ingredient")
        ingredients.innerHTML = ingredientsList.name;
        
        ulIngredients.appendChild(ingredients);
    })
    
    const steps = document.createElement("p");
    steps.innerHTML = element.steps;
    steps.classList.add("recipe-steps");
    
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-primary");
    deleteButton.style.width = "100%"
    deleteButton.onclick = () => {
        recipe.remove();
    }

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(deleteButton);
    
    recipe.appendChild(image);
    recipe.appendChild(cardBody);
    // recipe.appendChild(ulIngredients);
    // recipe.appendChild(steps);

        

        containerRecipes.appendChild(recipe);
    });
}


fetch("data.json")
.then(response => {
    return response.json();
})
.then((data) => {
    getRecipes(data.recipes)
})

// const editRecipe = () => {

// }