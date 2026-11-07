
// Restaurant menu data
const categories = {
    Lunch: [
        { name: "Veg Thali", description: "Complete Indian meal", price: 180 },
        { name: "Paneer Rice", description: "Rice with paneer curry", price: 150 }
    ],

    Dinner: [
        { name: "Butter Naan", description: "Soft Indian bread", price: 40 },
        { name: "Dal Makhani", description: "Creamy lentils", price: 160 }
    ],

    Sushi: [
        { name: "Veg Sushi", description: "Fresh vegetable sushi rolls", price: 250 },
        { name: "Avocado Roll", description: "Avocado-filled sushi", price: 280 }
    ],

    Desserts: [
        { name: "Chocolate Cake", description: "Rich chocolate dessert", price: 120 },
        { name: "Ice Cream", description: "Vanilla ice cream", price: 80 }
    ]
};


// Show a particular category
function showCategory(categoryName) {

    const homePage = document.getElementById("home-page");
    const contentPage = document.getElementById("content-page");

    homePage.hidden = true;
    contentPage.hidden = false;

    document.getElementById("page-title").textContent =
        categoryName;

    document.getElementById("page-description").textContent =
        "Explore our delicious " + categoryName + " items!";

    const menuContainer = document.getElementById("menu-items");

    menuContainer.innerHTML = "";

    const items = categories[categoryName];

    items.forEach(item => {

        const card = document.createElement("div");

        card.className = "menu-card";

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">₹${item.price}</p>
        `;

        menuContainer.appendChild(card);
    });
}


// Show all menu categories
function showMenu() {

    const homePage = document.getElementById("home-page");
    const contentPage = document.getElementById("content-page");

    homePage.hidden = true;
    contentPage.hidden = false;

    document.getElementById("page-title").textContent =
        "Our Complete Menu";

    document.getElementById("page-description").textContent =
        "Explore all our food categories.";

    const menuContainer = document.getElementById("menu-items");

    menuContainer.innerHTML = "";

    Object.keys(categories).forEach(categoryName => {

        const button = document.createElement("button");

        button.className = "tile";
        button.innerHTML = `<h3>${categoryName}</h3><p>View items</p>`;

        button.onclick = () => showCategory(categoryName);

        menuContainer.appendChild(button);
    });
}


// RANDOM SPECIALS FUNCTION
function showSpecials() {

    // Get all available category names
    const categoryNames = Object.keys(categories);

    // Generate a random index
    const randomIndex = Math.floor(
        Math.random() * categoryNames.length
    );

    // Select a random category
    const randomCategory = categoryNames[randomIndex];

    // Display the randomly selected category
    showCategory(randomCategory);
}


// Show restaurant location
function showMap() {

    document.getElementById("home-page").hidden = true;
    document.getElementById("content-page").hidden = false;

    document.getElementById("page-title").textContent =
        "Find Our Restaurant";

    document.getElementById("page-description").textContent =
        "Visit us and enjoy delicious food!";

    document.getElementById("menu-items").innerHTML =
        "<p>Restaurant location: Add your restaurant address here.</p>";
}


// Return to homepage
function goHome() {

    document.getElementById("home-page").hidden = false;
    document.getElementById("content-page").hidden = true;
}
