const menu = () => {

    const content = document.getElementById("content");
    content.textContent = "";

    const header = document.createElement("h1");
    header.textContent = "MENU";
    content.appendChild(header);

    const meals = [
        {name : "Avocado Toast", price: "$8"},
        {name : "Guacamole Bowl", price: "$10"},
        {name : "Avocado Smoothie", price: "$7"},
        {name : "Avocado Salad", price: "$9"}];

    meals.forEach((meal) => {
        const mealDiv = document.createElement("div");
        mealDiv.textContent = `${meal.name} - ${meal.price}`;
        content.appendChild(mealDiv);
    });

};
  

export default menu;
