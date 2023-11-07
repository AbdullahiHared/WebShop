let men = document.querySelector(".mensClothing");
let women = document.querySelector(".womensClothing");


let cart = JSON.parse(localStorage.getItem("data")) || [];

// function to display mens clothes
let displayMensProducts = () => {
  women.innerHTML = mensSection
    .map((item) => {
      let { id, img, description } = item;
      let search = cart.find((item) => item.id === id) || [];
      return `
          
          <div id="product-${id}" class="item">
          <img src="${img}" alt="${description}" width = "100%" height = "70%">
          <p class="description">${description}</p>
          <button id = "buy"class="buy" onclick = "addToCart(${id})">Buy</button>
          </div>
        `;
    })
    .join("");
};

displayMensProducts();

// function to display women's clothes
let displayWomensProducts = () => {
  men.innerHTML = womensSection
    .map((item) => {
      let { id, img, description } = item;
      return `
          <div id="product-${id}" class="item">
          <img src="${img}" alt="${description}" width = "100">
            <p class="description">${description}</p>
            <button id = "buy"class="buy" onclick = "addToCart(${id})">Buy</button>
          </div>
        `;
    })
    .join("");
};

displayWomensProducts();

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

  // console.log(cart);
  totalItems(chosenItem)
};





// Function to update the quantity of items in the cart
let totalItems = (id) => {
  let search = cart.find((item) => item.id === id);
  let counter = document.getElementById('CartCounter').textContent = cart.map((items) =>
  items.item).reduce((a, b) =>  a + b, 0); 
  localStorage.setItem("data", JSON.stringify(cart));
};

totalItems();



