let men = document.querySelector(".mensClothing");
let women = document.querySelector(".womensClothing");

let mensSection = [
  {
    id: 25455,
    description: "Beautifull Gray Thobe",
    price: 50,
    img: "images/MensClothing/GrayThobe.jpg",
  },

  {
    id: 203923,
    description: "Stylish Blue Thobe",
    price: 40,
    img: "images/MensClothing/BlueThaub.jpg",
  },

  {
    id: 488380,
    description: "Red Emarati Thobe",
    img: "images/MensClothing/RedThobe.jpg",
  },

  {
    id: 299380,
    description: "Pakistani  Khamis",
    price: 70,
    img: "images/MensClothing/pakistaniThobe.jpg",
  },

  {
    id: 898987778,
    description: "Stylish Gray Juba Thobe",
    price: 50,
    img: "images/MensClothing/jubaGray.jpg",
  },

  {
    id: 989898,
    description: "Buttoned Black Juba Thobe",
    price: 39.9,
    img: "images/MensClothing/jubba black.jpg",
  },

  {
    id: 344343,
    description: "Unique Jubba Men Thobe",
    price: 90,
    img: "images/MensClothing/JubbaMenThaub.jpg",
  },

  {
    id: 44444,
    description: "Light Red  Kamees",
    price: 39.99,
    img: "images/MensClothing/blueShotThobe.jpg",
  },

  {
    id: 494994994,
    description: "Light Golden Thaub",
    price: 65,
    img: "images/MensClothing/jubaWhite.jpg",
  },

  {
    id: 40949,
    description: "Gray Thobe For Jumuah",
    price: 25,
    img: "images/MensClothing/longGray.jpg",
  },

  {
    id: 29392,
    description: "light Yellow Thobe",
    price: 10,
    img: "images/MensClothing/lightYelloThobe.jpg",
  },

  {
    id: 4499090,
    description: "Beautifull Purple Thobe",
    price: 10,
    img: "images/MensClothing/purpleThobe.jpg",
  },

  {
    id: 3488028084,
    description: "Red Moroccan Thobe",
    price: 40,
    img: "images/MensClothing/MoroccanThobe.jpg",
  },

  {
    id: 2300924010,
    description: "Shot Handed Thobe Gray",
    price: 20,
    img: "images/MensClothing/greyShortThobe.jpg",
  },

  {
    id: 390409090,
    description: "Shot Handed Thobe white",
    price: 20,
    img: "images/MensClothing/whiteshotThobe.jpg",
  },

  {
    id: 309409023,
    description: "Stylish Black Juba Thobe",
    price: 40,
    img: "images/MensClothing/blackJubba.jpg",
  },
];

let womensSection = [
  {
    id: 0,
    description: "Arabian shoulder Bag ",
    price: 99,
    img: "images/WomensClothing/ArabianBag.jpg",
  },

  {
    id: 1,
    description: "Beautifull Turkish Abaya",
    price: 70,
    img: "images/WomensClothing/TurkishAbaya.jpg",
  },

  {
    id: 2,
    description: "Light Brown Abaya",
    price: 20,
    img: "images/WomensClothing/lightBrownAbaya.jpg",
  },

  {
    id: 3,
    description: "Pure Green Abaya",
    price: 30,
    img: "images/WomensClothing/GreenAbaya.jpg",
  },

  {
    id: 4,
    description: "Double Jilbab and Abaya",
    price: 120,
    img: "images/WomensClothing/Double Jilbab and Abaya.jpg",
  },

  {
    id: 5,
    description: "Full blue Abaya",
    price: 39.99,
    img: "images/WomensClothing/FullBlueAbaya.jpg",
  },

  {
    id: 6,
    description: "Modest Forest Green Abaya",
    price: 45,
    img: "images/WomensClothing/FulljilabForestGreen.jpg",
  },

  {
    id: 7,
    description: "Full Dark Grey Jilbab",
    price: 65,
    img: "images/WomensClothing/FullJilbabGrey.jpg",
  },

  {
    id: 8,
    description: "Light Brown Jilbab",
    price: 65,
    img: "images/WomensClothing/FullJilbabLightBrown.jpg",
  },

  {
    id: 9,
    description: "Long Grey Abaya",
    price: 40,
    img: "images/WomensClothing/LonggreyAbaya.jpg",
  },

  {
    id: 11,
    description: "Long Red Abaya",
    price: 30,
    img: "images/WomensClothing/redAbaya.jpg",
  },

  {
    id: 12,
    description: "Red Kangaroo Bag",
    price: 100,
    img: "images/WomensClothing/RedKangarooBag.jpg",
  },
];

let cart = [];

// function to display mens clothes
let displayMensProducts = () => {
  women.innerHTML = mensSection
    .map((item) => {
      let { id, img, description } = item;
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
          <img src="${img}" alt="${description}" width = "100%" height = "80%">
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


// let removeItem= (id) => {
//   let chosenItem = id;
//   let search = cart.find((item) => item.id === chosenItem);

//   if (search.item === 0) return
//    else {
//     search.item -= 1;
//   }

//   console.log(cart);
// };



// Function to update the quantity of items
let totalItems = (id) => {
  let search = cart.find((item) => item.id === id);
  console.log(search);
  let counter = document.getElementById('CartCounter').textContent = cart.map((items) => items.item).reduce((a, b) =>  a + b, 0); 
};

