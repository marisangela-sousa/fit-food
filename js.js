const inputTitle = document.querySelector(".input-title");
const inputDescription = document.querySelector(".input-description");
const inputImageLink = document.querySelector(".input-image");
const inputIngredients = document.querySelector(".input-ingredients");
const inputSteps = document.querySelector(".input-steps");
const containerRecipes = document.querySelector(".container-recipes")
const button = document.querySelector(".post");

const post = (event) => {
    event.preventDefault();

    const titleValue = inputTitle.value;
    const descriptionValue = inputDescription.value;
    const imageValue = inputImageLink.value;

    const recipe = document.createElement("article");
    recipe.classList.add("card");
    recipe.style.width = "18rem";
    
    const image = document.createElement("img");
    image.src = imageValue;
    image.classList.add("card-img-top");
    image.style.maxHeight = "12rem";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.innerHTML = titleValue;
    title.classList.add("card-title");

    const description = document.createElement("p");
    description.textContent = descriptionValue;
    description.classList.add("card-text");

    const seeDetailsButton = document.createElement("button");
    seeDetailsButton.textContent = "See Recipe"
    seeDetailsButton.classList.add("btn");
    seeDetailsButton.classList.add("btn-primary");
    seeDetailsButton.style.width = "100%"

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(seeDetailsButton);

    recipe.appendChild(image);
    recipe.appendChild(cardBody);
    
    containerRecipes.appendChild(recipe);
    
}

button.addEventListener("click", post);

const getRecipes = (recipes) => {
    recipes.forEach(element => {
        const recipe = document.createElement("article");
        recipe.classList.add("card");
        recipe.style.width = "18rem";

    
        const image = document.createElement("img");
        image.src = element.image;
        image.classList.add("card-img-top");
        image.style.maxHeight = "12rem";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
    
        const title = document.createElement("h5");
        title.innerHTML = element.title;
        title.classList.add("card-title");

        const description = document.createElement("p");
        description.textContent = element.description;
        description.classList.add("card-text");
    
    
        const seeDetailsButton = document.createElement("button");
        seeDetailsButton.textContent = "See Recipe"
        seeDetailsButton.classList.add("btn");
        seeDetailsButton.classList.add("btn-primary");
        seeDetailsButton.style.width = "100%"
        // seeDetailsButton.onclick = () => {
        //     recipe.remove();
        // }

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(seeDetailsButton);
    
        recipe.appendChild(image);
        recipe.appendChild(cardBody);

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