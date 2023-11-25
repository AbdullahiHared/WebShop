

const cartProducts = document.getElementById("cartProduct");
const totalItemsInCart = document.getElementById("totalItemsInCart");
let cart = JSON.parse(localStorage.getItem("data")) || [];

// Function to add items to the cart
const addItem = (id) => {
let selectedItem = id;
  // find item id
  let search = cart.find((item) => item.id === selectedItem);
  console.log(selectedItem);
  if (search === undefined) {
    cart.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  console.log(cart);
  updateCart(selectedItem)
};


// function to remove item from the cart
let removeItem = (id) => {
  let selectedItem = id;
  let search = cart.find((item) => item.id === selectedItem);

  if (search === undefined || search.item === 0) {
    // If the item is not in the cart or its quantity is 0, do nothing
    return;
  }

  search.item -= 1;
  
   // If the item quantity becomes 0, remove the (selected)item from the cart
  if (search.item === 0) {
    cart = cart.filter((item) => item.id !== selectedItem);
  }

  updateCart(selectedItem);
};


let deleteItem = (id) => {
  let selectedItem = id;
  let index = cart.findIndex((item) => item.id === selectedItem);
  console.log(index)
  if (index !== -1) {
    // If the item is found in the cart, remove it
    cart.splice(index, 1);
    updateCart(selectedItem);
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
  totalItemsInCart.textContent = "TOTAL" + "$" + totalPrice;
  document.getElementById("CartCounter").textContent = totalQuantity;

  if (cart.length === 0) {
    cartProducts.innerHTML = "";
    totalItemsInCart.innerHTML = `
      <h2>No Items Found</h2>
      <a href="/index.html"><button class="HomeBtn">Buy Now</button></a>
    `;
  }

  localStorage.setItem("data", JSON.stringify(cart));
}

updateCart();






