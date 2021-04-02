import * as picture from "./picture-database.js";

let homes_selection_card_element = [
  {
    type: "man",
    productType: "tShirt",
    image: picture.home_selection_collection[0],
  },
  {
    type: "woman",
    productType: "tShirt",
    image: picture.home_selection_collection[1],
  },
];

let header_element = [
  { type: "man", image: picture.header_collection[0] },
  { type: "woman", image: picture.header_collection[1] },
];

let product_man_link = ["tShirt", "shirt", "jacket", "jeans"];
let product_man_link_name = ["T-Shirt", "Shirt", "Jacket", "Jeans"];
let product_woman_link = [
  "tShirt",
  "shirt",
  "jacket",
  "coat",
  "jeans",
  "skirt",
];
let product_woman_link_name = [
  "T-Shirt",
  "Shirt",
  "Jacket",
  "Coat",
  "Jeans",
  "Skirt",
];

let product_man_tShirt = [
  {
    id: 20001,
    name: "Bone T-Shirt",
    price: "99",
    img: picture.man_tShirt_collection[0],
  },

  {
    id: 20002,
    name: "Japanese Original Lucky Cat T-Shirt",
    price: "139",
    img: picture.man_tShirt_collection[1],
  },
  {
    id: 20003,
    name: "Simple Long Sleeve T-Shirt",
    price: "79",
    img: picture.man_tShirt_collection[2],
  },
  {
    id: 20004,
    name: "Simple White T-Shirt",
    price: "59",
    img: picture.man_tShirt_collection[3],
  },
  {
    id: 20005,
    name: "Sound Guy T-Shirt",
    price: "99",
    img: picture.man_tShirt_collection[4],
  },
  {
    id: 20006,
    name: "Sunset T-Shirt",
    price: "99",
    img: picture.man_tShirt_collection[5],
  },
  {
    id: 20007,
    name: "V-Neck T-Shirt",
    price: "89",
    img: picture.man_tShirt_collection[6],
  },
  {
    id: 20008,
    name: "White Sleeve T-Shirt",
    price: "89",
    img: picture.man_tShirt_collection[7],
  },
];

let product_man_shirt = [
  {
    id: 21001,
    name: "Blue Shirt",
    price: "99",
    img: picture.man_shirt_collection[0],
  },

  {
    id: 21002,
    name: "Checked Shirt",
    price: "129",
    img: picture.man_shirt_collection[1],
  },
  {
    id: 21003,
    name: "Design Shirt",
    price: "119",
    img: picture.man_shirt_collection[2],
  },
  {
    id: 21004,
    name: "Pale Blue Shirt",
    price: "139",
    img: picture.man_shirt_collection[3],
  },
  {
    id: 21005,
    name: "Small Checked Shirt",
    price: "129",
    img: picture.man_shirt_collection[4],
  },
  {
    id: 21006,
    name: "Stripes Shirt",
    price: "159",
    img: picture.man_shirt_collection[5],
  },
  {
    id: 21007,
    name: "Vertical Stripes Shirt",
    price: "159",
    img: picture.man_shirt_collection[6],
  },
  {
    id: 21008,
    name: "Violent Shirt",
    price: "139",
    img: picture.man_shirt_collection[7],
  },
  {
    id: 21009,
    name: "White Shirt",
    price: "79",
    img: picture.man_shirt_collection[8],
  },
];

let product_man_jacket = [
  {
    id: 22001,
    name: "Black Hoodie Jacket",
    price: "199",
    img: picture.man_jacket_collection[0],
  },

  {
    id: 22002,
    name: "Black Jacket",
    price: "259",
    img: picture.man_jacket_collection[1],
  },
  {
    id: 22003,
    name: "Black Leather Jacket",
    price: "399",
    img: picture.man_jacket_collection[2],
  },
  {
    id: 22004,
    name: "Black Zip-up Jacket",
    price: "299",
    img: picture.man_jacket_collection[3],
  },
  {
    id: 22005,
    name: "Blue Denim Jacket",
    price: "309",
    img: picture.man_jacket_collection[4],
  },
];

let product_man_jeans = [
  {
    id: 23001,
    name: "Blue Denim Rotton Jeans",
    price: "299",
    img: picture.man_jeans_collection[0],
  },

  {
    id: 23002,
    name: "Blue Jeans",
    price: "399",
    img: picture.man_jeans_collection[1],
  },
  {
    id: 23003,
    name: "Blue Slim Jeans",
    price: "359",
    img: picture.man_jeans_collection[2],
  },
  {
    id: 23004,
    name: "Brown Fitted Jeans",
    price: "259",
    img: picture.man_jeans_collection[3],
  },
  {
    id: 23005,
    name: "White Pants",
    price: "199",
    img: picture.man_jeans_collection[4],
  },
];

let product_woman_tShirt = [
  {
    id: 30001,
    name: "Black Crew Neck T-Shirt",
    price: "99",
    img: picture.woman_tShirt_collection[0],
  },

  {
    id: 30002,
    name: "Black Pattern T-Shirt",
    price: "129",
    img: picture.woman_tShirt_collection[1],
  },
  {
    id: 30003,
    name: "Colorful Text T-Shirt",
    price: "99",
    img: picture.woman_tShirt_collection[2],
  },
  {
    id: 30004,
    name: "Not Today T-Shirt",
    price: "119",
    img: picture.woman_tShirt_collection[3],
  },
  {
    id: 30005,
    name: "Pattern T-Shirt",
    price: "119",
    img: picture.woman_tShirt_collection[4],
  },
  {
    id: 30006,
    name: "Picture T-Shirt",
    price: "139",
    img: picture.woman_tShirt_collection[5],
  },
  {
    id: 30007,
    name: "Simple Text T-Shirt",
    price: "109",
    img: picture.woman_tShirt_collection[6],
  },
];

let product_woman_shirt = [
  {
    id: 31001,
    name: "Long Vertical Stripes Shirt",
    price: "259",
    img: picture.woman_shirt_collection[0],
  },

  {
    id: 31002,
    name: "Pale Blue Shirt",
    price: "179",
    img: picture.woman_shirt_collection[1],
  },
  {
    id: 31003,
    name: "Pale Brown Shirt",
    price: "199",
    img: picture.woman_shirt_collection[2],
  },
  {
    id: 31004,
    name: "Ribbon Shirt",
    price: "299",
    img: picture.woman_shirt_collection[3],
  },
  {
    id: 31005,
    name: "Vertical Stripes Shirt",
    price: "129",
    img: picture.woman_shirt_collection[4],
  },
  {
    id: 31006,
    name: "White Shirt",
    price: "129",
    img: picture.woman_shirt_collection[5],
  },
];

let product_woman_jacket = [
  {
    id: 32001,
    name: "Black Jacket",
    price: "299",
    img: picture.woman_jacket_collection[0],
  },

  {
    id: 32002,
    name: "Black Leather Jacket",
    price: "459",
    img: picture.woman_jacket_collection[1],
  },
  {
    id: 32003,
    name: "Blue Denim Jacket",
    price: "399",
    img: picture.woman_jacket_collection[2],
  },
  {
    id: 32004,
    name: "Short Black Jacket",
    price: "299",
    img: picture.woman_jacket_collection[3],
  },
];

let product_woman_coat = [
  {
    id: 33001,
    name: "Black Coat",
    price: "399",
    img: picture.woman_coat_collection[0],
  },

  {
    id: 33002,
    name: "Blue Coat",
    price: "359",
    img: picture.woman_coat_collection[1],
  },
  {
    id: 33003,
    name: "Brown Pattern Coat",
    price: "459",
    img: picture.woman_coat_collection[2],
  },
  {
    id: 33004,
    name: "Pale Brown Cashmier Coat",
    price: "599",
    img: picture.woman_coat_collection[3],
  },
];

let product_woman_jeans = [
  {
    id: 34001,
    name: "Black Casual Pants",
    price: "199",
    img: picture.woman_jeans_collection[0],
  },

  {
    id: 34002,
    name: "Black Pants",
    price: "239",
    img: picture.woman_jeans_collection[1],
  },
  {
    id: 34003,
    name: "Blue denim Jeans",
    price: "259",
    img: picture.woman_jeans_collection[2],
  },
  {
    id: 34004,
    name: "Blue Work Pants",
    price: "399",
    img: picture.woman_jeans_collection[3],
  },
  {
    id: 34005,
    name: "Pink Pants",
    price: "199",
    img: picture.woman_jeans_collection[4],
  },
];

let product_woman_skirt = [
  {
    id: 35001,
    name: "Blue and White Plaid Skirt",
    price: "169",
    img: picture.woman_skirt_collection[0],
  },

  {
    id: 35002,
    name: "Floral Skirt",
    price: "179",
    img: picture.woman_skirt_collection[1],
  },
  {
    id: 35003,
    name: "Grey Skirt",
    price: "139",
    img: picture.woman_skirt_collection[2],
  },
  {
    id: 35004,
    name: "Pink Skirt",
    price: "139",
    img: picture.woman_skirt_collection[3],
  },
  {
    id: 35005,
    name: "Red Long Skirt",
    price: "199",
    img: picture.woman_skirt_collection[4],
  },
  {
    id: 35006,
    name: "White Mini Skirt",
    price: "159",
    img: picture.woman_skirt_collection[5],
  },
];

let man_product_list = [
  product_man_tShirt,
  product_man_shirt,
  product_man_jacket,
  product_man_jeans,
];

let woman_product_list = [
  product_woman_tShirt,
  product_woman_shirt,
  product_woman_jacket,
  product_woman_coat,
  product_woman_jeans,
  product_woman_skirt,
];

function getProductList(type, productType) {
  if (type === "man") {
    for (let i = 0; i < man_product_list.length; i++) {
      if (productType === product_man_link[i]) {
        return [man_product_list[i], product_man_link_name[i]];
      }
    }
  } else if (type === "woman") {
    for (let i = 0; i < woman_product_list.length; i++) {
      if (productType === product_woman_link[i]) {
        return [woman_product_list[i], product_woman_link_name[i]];
      }
    }
  }

  return [[], ""];
}

function getProductDetail(type, productType, id) {
  let [productList, productName] = getProductList(type, productType);
  let result = productList.find(function (value, index, array) {
    return value.id == id;
  });

  return result;
}

export {
  homes_selection_card_element,
  header_element,
  getProductList,
  getProductDetail,
  product_man_link,
  product_man_link_name,
  product_woman_link,
  product_woman_link_name,
};
