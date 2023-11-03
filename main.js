let men = document.querySelector('.mensClothing');
let women = document.querySelector('.womensClothing');

let mensSection =  [
  {
    id: 25455,
    description: "Beautifull Gray Thobe",
    price: 50,
    img: "images/MensClothing/GrayThobe.jpg"
  },

  {
    id : 203923,
    description : "Stylish Blue Thobe",
    price : 40,
    img : "images/MensClothing/BlueThaub.jpg"
  },

  {
    id: 488380,
    description : "Red Emarati Thobe",
    img : "images/MensClothing/RedThobe.jpg"

  },

  {
    id : 299380,
    description : "Pakistani  Khamis",
    price : 70,
    img : "images/MensClothing/pakistaniThobe.jpg"
  },

  {
    id : "ejjajskj",
    description : "Stylish Gray Juba Thobe",
    price : 50,
    img : "images/MensClothing/jubaGray.jpg"
  },

  {
    id : "kekkkalk",
    description : "Unique Jubba Men Thobe",
    price :90,
    img : "images/MensClothing/JubbaMenThaub.jpg",

  },

  {
    id : "jkdjwlkkxlj",
    description : "Light Red  Kamees",
    price :39.99,
    img : "images/MensClothing/blueShotThobe.jpg",

  },

  {
    id : "doasjlNNC",
    description : "Light Golden Thaub",
    price : 65,
    img : "images/MensClothing/jubaWhite.jpg"
  },

  {
    id : "ALLKDKLKL",
    description : "Gray Thobe For Jumuah",
    price : 25,
    img : "images/MensClothing/longGray.jpg"
  },

  {
    id : "djallkkld",
    description : "light Yellow Thobe",
    price : 10,
    img : "images/MensClothing/lightYelloThobe.jpg"
  },

  {
    id : "djalallkkld",
    description : "Beautifull Purple Thobe",
    price : 10,
    img : "images/MensClothing/purpleThobe.jpg"
  },

  {
    id : "sjldslkal",
    description : "Red Moroccan Thobe",
    price : 40,
    img : "images/MensClothing/MoroccanThobe.jpg"
  },

  {
    id : "saldkklkls",
    description : "Shot Handed Thobe Gray",
    price : 20,
    img : "images/MensClothing/greyShortThobe.jpg"
  },

  {
    id : "jllksaldsjka",
    description : "Shot Handed Thobe white",
    price : 20,
    img : "images/MensClothing/whiteshotThobe.jpg"
  },

  {
    id : "jldjdjjlksaldsjka",
    description : "Moroccan White Djellaba",
    price : 40,
    img : "images/MensClothing/WhiteDjellaba.jpg"
  },

  {
    id : "dajkjjdjjaljlcjjs",
    description : "Stylish Black Juba Thobe",
    price : 40,
    img : "images/MensClothing/blackJubba.jpg"
  }];

  let womensSection =  [
    {
      id: 0,
      description: "Arabian shoulder Bag ",
      price: 99,
      img: "images/WomensClothing/ArabianBag.jpg"
    },
  
    {
      id : 1,
      description : "Beautifull Turkish Abaya",
      price : 70,
      img : "images/WomensClothing/TurkishAbaya.jpg"
    },
  
    {
      id : 2,
      description : "Light Brown Abaya",
      price : 20,
      img : "images/WomensClothing/lightBrownAbaya.jpg"
    },
  
    {
      id :3,
      description : "Pure Green Abaya",
      price : 30,
      img : "images/WomensClothing/GreenAbaya.jpg"
    },
  
    {
      id : 4,
      description : "Double Jilbab and Abaya",
      price :120,
      img : "images/WomensClothing/Double Jilbab and Abaya.jpg",
  
    },
  
    {
      id : 5,
      description : "Full blue Abaya",
      price :39.99,
      img : "images/WomensClothing/FullBlueAbaya.jpg",
  
    },
  
    {
      id : 6,
      description : "Modest Forest Green Abaya",
      price : 45,
      img : "images/WomensClothing/FulljilabForestGreen.jpg"
    },
  
    {
      id : 7,
      description : "Full Dark Grey Jilbab",
      price : 65,
      img : "images/WomensClothing/FullJilbabGrey.jpg"
    },
  
    {
      id : 8,
      description : "Light Brown Jilbab",
      price :65,
      img : "images/WomensClothing/FullJilbabLightBrown.jpg"
    },
  
    {
      id :9,
      description : "Long Grey Abaya",
      price : 40,
      img : "images/WomensClothing/LonggreyAbaya.jpg"
    },

  
    {
      id : 11,
      description : "Long Red Abaya",
      price : 30,
      img : "images/WomensClothing/redAbaya.jpg"
    },

  
    {
      id : 12,
      description : "Red Kangaroo Bag",
      price : 100,
      img : "images/WomensClothing/RedKangarooBag.jpg"
  } ];

  console.log(men);


  let displayMensProducts = () => {
    women.innerHTML = mensSection.map((item) => {
        let { id, img, description } = item;
        return `
          
          <div id="product-${id}" class="item">
          <img src="${img}" alt="${description}" width = "100%" height = "70%">
          <p class="description">${description}</p>
            <button class="buy">Buy</button>
          </div>
        `;
      })
      .join("");
  };

  displayMensProducts();

  let displayWomensProjects = () => {
    men.innerHTML = womensSection.map((item) => {
        let { id, img, description } = item;
        return `
          <div id="product-${id}" class="item">
          <img src="${img}" alt="${description}" width = "100%" height = "80%">
            <p class="description">${description}</p>
            <button class="buy">Buy</button>
          </div>
        `;
      })
      .join("");
  };

  displayWomensProjects();
