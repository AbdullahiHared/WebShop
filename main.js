let men = document.querySelector('.mensClothing');
let women = document.querySelector('.womensClothing');

let mensSection =  [
  {
    id: 25455,
    description: "Beautifull black White Thobe",
    price: 50,
    img: "images/MensClothing/BlackWhiteThauwb.jpg"
  },

  {
    id : 203923,
    description : "Stylish Blue Thobe",
    price : 40,
    img : "images/MensClothing/BlueThaub.jpg"
  },

  {
    id : 299380,
    description : "Black Glory Hoodie",
    price : 70,
    img : "images/MensClothing/gloryHoody.jpg"
  },

  {
    id : "ejjajskj",
    description : "Black Islamic Hoodie | Akhlaq",
    price : 50,
    img : "images/MensClothing/islamicHoodie.jpg"
  },

  {
    id : "kekkkalk",
    description : "Unique Jubba Men Thobe",
    price :90,
    img : "images/MensClothing/JubbaMenThaub.jpg",

  },

  {
    id : "jkdjwlkkxlj",
    description : "Light Red  Kamees ",
    price :39.99,
    img : "images/MensClothing/kamees.jpg",

  },

  {
    id : "doasjlNNC",
    description : "Light Golden Thaub",
    price : 65,
    img : "images/MensClothing/lightGoldThaub.jpg"
  },

  {
    id : "ALLKDKLKL",
    description : "Beautifull Palestinian T-shirt",
    price : 25,
    img : "images/MensClothing/palestineShirt.jpg"
  },

  {
    id : "djallkkld",
    description : "White Prayer Caps",
    price : 10,
    img : "images/MensClothing/PrayerCap.jpg"
  },

  {
    id : "djalallkkld",
    description : "Dark Blue Prayer Caps",
    price : 10,
    img : "images/MensClothing/PrayerCaps.jpg"
  },

  {
    id : "sjldslkal",
    description : "Red Moroccan Thobe",
    price : 40,
    img : "images/MensClothing/MoroccanThobe.jpg"
  },

  {
    id : "saldkklkls",
    description : "White Red Turban",
    price : 20,
    img : "images/MensClothing/redTurban.jpg"
  },

  {
    id : "jllksaldsjka",
    description : "Turkish Imamah Sharif",
    price : 20,
    img : "images/MensClothing/TurkishImamahSharif.jpg"
  },

  {
    id : "djsajjdkajc",
    description : "Black Arabic Hoodie | Uthman",
    price : 40,
    img : "images/MensClothing/UthmanHoodie.jpg"
  },

  {
    id : "jldjdjjlksaldsjka",
    description : "Moroccan White Djellaba",
    price : 40,
    img : "images/MensClothing/WhiteDjellaba.jpg"
  },

  {
    id : "dajkjjdjjaljlcjjs",
    description : "Pure White Thobe",
    price : 40,
    img : "images/MensClothing/WhiteThaub.jpg"
  }];

  let womensSection =  [
    {
      id: 0,
      description: "Beautifull Arabian shoulder Bag ",
      price: 99,
      img: "images/WomensClothing/ArabianBag.jpg"
    },
  
    {
      id : 1,
      description : "Comfort Winter Jacket",
      price : 70,
      img : "images/WomensClothing/ComfortWinterJacket.jpg"
    },
  
    {
      id : 2,
      description : "Basic Daily Abaya",
      price : 20,
      img : "images/WomensClothing/DailyAbaya.jpg"
    },
  
    {
      id :3,
      description : "Pure Black Abaya",
      price : 30,
      img : "images/MensClothing/islamicHoodie.jpg"
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
      img : "images\WomensClothing\FullBlueAbaya.jpg",
  
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
      img : "images/WomensClothing/FullJilbabGrey.jpgg"
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
      id : 10,
      description : "Patterned Winter Jacket",
      price : 80,
      img : "images/WomensClothing/PatternedJacket.jpg"
    },
  
    {
      id : 11,
      description : "Long Red Abaya",
      price : 30,
      img : "images/WomensClothing/redAbaya.jpg"
    },
  
    {
      id : 12,
      description : "Turkish Imamah Sharif",
      price : 100,
      img : "images/WomensClothing/RedKangarooBag.jpg"
  } ];

  console.log(men);


  let displayProduct = () => {
    men.innerHTML = mensSection.map((item) => {
        let { id, img, description } = item;
        return `
          <div id="product-${id}" class="item">
            <img src="${img}" alt="">
            <p class="description">${description}</p>
            <button class="buy">Buy</button>
          </div>
        `;
      })
      .join("");
  };

  displayProduct();
