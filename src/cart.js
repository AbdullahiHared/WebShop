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
            <div class="cartProducts">
            <div class="cartItem">
           <img src="${search.img}" alt="${search.description}" width="100">
           <p>${search.description}</p>
           <h3>$ ${search.price}</h3>
          </div>
          </div>
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
