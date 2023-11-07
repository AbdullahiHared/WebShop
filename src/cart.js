

const cartProducts = document.getElementById("cartProduct");
const totalPriceInCart = document.getElementById("totalPriceInCart");
let cart = JSON.parse(localStorage.getItem("data")) || [];

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
            <button class="decrease">-</button>
            <div class="quantity">${quantity}</div>
            <button class="increase">+</button>
          </div>
        </div>
        <img src="./trash3.svg" alt="remove item from cart" class = "remove">
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
}

updateCart();

cartProducts.addEventListener("click", (event) => {
  if (event.target.classList.contains("decrease")) {
    decreaseItem(event.target);
  } else if (event.target.classList.contains("increase")) {
    increaseItem(event.target);
  } else if (event.target.classList.contains("remove")) {
    // Implement remove item logic
  }
});

function increaseItem(increaseButton) {
  const quantityElement = increaseButton.parentElement.querySelector(".quantity");
  const quantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = quantity + 1;
  updateCart(); // Update the cart after changing quantity
}

function decreaseItem(decreaseButton) {
  const quantityElement = decreaseButton.parentElement.querySelector(".quantity");
  const quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantityElement.textContent = quantity - 1;
    updateCart(); // Update the cart after changing quantity
  }
}
