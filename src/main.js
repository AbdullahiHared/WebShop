let men = document.querySelector(".mensClothing");
let women = document.querySelector(".womensClothing");
let cart = JSON.parse(localStorage.getItem("data")) || [];

// Function to display mens clothes
let displayMensProducts = () => {
  men.innerHTML = mensSection
    .map((item) => {
      let { id, img, description, price } = item;
      let search = cart.find((item) => item.id === id) || [];
      return `
        <div id="product-${id}" class="item">
          <img src="${img}" alt="${description}" width="100%" height="70%">
          <p class="description">${description}</p>
          <button class="buy" onclick="addToCart(${id})">$${price}</button>
        </div>
      `;
    })
    .join("");
};

// Function to display women's clothes
let displayWomensProducts = () => {
  women.innerHTML = womensSection
    .map((item) => {
      let { id, img, description, price } = item;
      return `
        <div id="product-${id}" class="item">
          <img src="${img}" alt="${description}" width="300" height="300">
          <p class="description">${description}</p>
          <button class="buy" onclick="addToCart(${id})">$${price}</button>
        </div>
      `;
    })
    .join("");


};

// Function to add items to the cart
let addToCart = (id) => {
  let chosenItem = id;
  let search = cart.find((item) => item.id === chosenItem);

  if (search === undefined) {
    cart.push({
      id: chosenItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  totalItems(chosenItem);
};

// Function to update the quantity of items in the cart
let totalItems = () => {
  let counter = document.getElementById('CartCounter');
  counter.textContent = cart.map((items) => items.item).reduce((a, b) => a + b, 0);
  localStorage.setItem("data", JSON.stringify(cart));
};


displayMensProducts();
displayWomensProducts();
totalItems();
