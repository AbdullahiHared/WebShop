let cartProducts = document.getElementById("cartProduct");
let totalPriceInCart = document.getElementById("totalPriceInCart");

let cart = JSON.parse(localStorage.getItem("data")) || [];

let totalItems = (id) => {
  let search = cart.find((item) => item.id === id);
  let counter = (document.getElementById("CartCounter").textContent = cart
    .map((items) => items.item)
    .reduce((a, b) => a + b, 0));
  localStorage.setItem("data", JSON.stringify(cart));
};

totalItems();

let creatCartItems = () => {
  if (cart.length !== 0) {
    return (cartProducts.innerHTML = cart
      .map((items) => {
        let { id, item } = items;

        // search for items in the products (men and women)
        let search = [...womensSection, ...mensSection].find((x) => x.id === id);
        return `
           
    <div class="cartCenter">
    <div class="ItemImage">
    <img src="${search.img}" alt="image" width="100">
    <p class="name">${search.name}</p></div>
<div class="Subtotal">
    <h3>Subtotal</h3>
    <h4 class="price">$${search.price}</h4>
</div>


    <div class="quantitySection">
        <h3>Quantity</h3>
        <div class="cartBtn">
        <button class="add">+</button>
        <div class="quantity">1</div>
        <button class="remove"><i class="bi bi-dash"></i>-</button>
        </div>
    </div>
<h2 class="remove">X</h2></div>
            `;
      })
      .join(""));
  } else {
    cartProducts.innerHTML = "";
    totalPriceInCart.innerHTML = `
        <h2> No Items In the Cart</h2>

        <a href="/index.html"><button class = "HomeBtn">Buy Now</button></a>
`;
  }
};

creatCartItems();

