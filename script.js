// Dynamic Restaurant Data
const restaurants = [
    { name: "Tasty Bites", img: "images/r1.jpg" },
    { name: "Foodie Hub", img: "images/r2.jpg" },
    { name: "Flavor Town", img: "images/r3.jpg" },
    { name: "Spice Junction", img: "images/r7.jpg" },
    { name: "Royal Feast", img: "images/r5.jpg" }
];

const restaurantList = document.getElementById("restaurant-list");

// Load restaurants dynamically
restaurants.forEach(restaurant => {
    let restaurantCard = `
        <div class="restaurant-card">
            <img src="${restaurant.img}" alt="${restaurant.name} Image">
            <h3>${restaurant.name}</h3>
            <button class="view-menu-btn">View Menu</button>
        </div>
    `;
    restaurantList.innerHTML += restaurantCard;
});