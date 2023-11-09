

const cartProducts = document.getElementById("cartProduct");
const totalPriceInCart = document.getElementById("totalPriceInCart");
let cart = JSON.parse(localStorage.getItem("data")) || [];

// Function to add items to the cart
let addItem = (id) => {
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

  console.log(cart);
  updateCart(chosenItem)
};


// function to remove item from the cart
let removeItem = (id) => {
  let chosenItem = id;
  let search = cart.find((item) => item.id === chosenItem);

  if (search === undefined || search.item === 0) {
    // If the item is not in the cart or its quantity is 0, do nothing
    return;
  }

  search.item -= 1;

  if (search.item === 0) {
    // If the item quantity becomes 0, remove the item from the cart
    cart = cart.filter((item) => item.id !== chosenItem);
  }

  updateCart(chosenItem);
};


let deleteItem = (id) => {
  let chosenItem = id;
  let index = cart.findIndex((item) => item.id === chosenItem);

  if (index !== -1) {
    // If the item is found in the cart, remove it
    cart.splice(index, 1);
    updateCart(chosenItem);
  }
};
 

function updateCart() {
  let totalQuantity = 0;
  let totalPrice = 0;

  cartProducts.innerHTML = cart
    .map((item) => {
      const { id, item: quantity } = item;
      // Search for items in the products of men and women
      const search = [...womensSection, ...mensSection].find((x) => x.id === id);
      // Calculate subtotal for each item
      const subtotal = search.price * quantity;
      totalPrice += Math.round(subtotal);
      totalQuantity += quantity;

      return `
      <div class="cartCenter">
        <div class="ItemImage">
          <img src="${search.img}" alt="image" width="100">
          <p class="name">${search.name}</p>
        </div>
        <div class="Subtotal">
          <h3>Subtotal</h3>
          <h4 class="price">$${subtotal}</h4>
        </div>
        <div class="quantitySection">
          <h3>Quantity</h3>
          <div class="cartBtn">
            <button class="decrease" onclick = "removeItem(${id})">-</button>
            <div class="quantity">${quantity}</div>
            <button class="increase" onclick = "addItem(${id})">+</button>
          </div>
        </div>
        <button class="deleteItem" onclick="deleteItem(${id})"><img src="./deleteitem.svg" alt=""></button>
      </div>`;
    })
    .join("");

  // Update the total price and total quantity
  totalPriceInCart.innerHTML = `<h2>Total Price: $${totalPrice}</h2>`;
  document.getElementById("CartCounter").textContent = totalQuantity;

  if (cart.length === 0) {
    cartProducts.innerHTML = "";
    totalPriceInCart.innerHTML = `
      <h2>No Items In the Cart</h2>
      <a href="/index.html"><button class="HomeBtn">Buy Now</button></a>
    `;
  }

  localStorage.setItem("data", JSON.stringify(cart));
}

updateCart();






