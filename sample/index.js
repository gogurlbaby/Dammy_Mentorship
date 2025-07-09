function add() {
  console.log("addd");
}

const name = "Philia";
const resident = "Accra";

const person = {
  name,
  resident,
  age: 20,
  role: "Frontend Developer",
  gender: "Female",
  myaddition: add,
  "my brother": "kofi",
};

add();

const person2 = new Object();
person2.name = "Dammy";

console.log(person);
console.log(person.name);
console.log(person["my brother"]);
console.log(person.myaddition());

const products = [
  { id: 1, name: "Wireless Mouse", price: 25.99, category: "Electronics" },
  { id: 2, name: "Bluetooth Speaker", price: 49.99, category: "Electronics" },
  { id: 3, name: "Yoga Mat", price: 19.99, category: "Fitness" },
  { id: 4, name: "Running Shoes", price: 89.99, category: "Footwear" },
  { id: 5, name: "LED Desk Lamp", price: 29.99, category: "Home & Office" },
  { id: 6, name: "Water Bottle", price: 14.99, category: "Fitness" },
  { id: 7, name: "Notebook", price: 3.49, category: "Stationery" },
  { id: 8, name: "Gaming Keyboard", price: 59.99, category: "Electronics" },
  { id: 9, name: "Smart Watch", price: 129.99, category: "Electronics" },
  { id: 10, name: "Scented Candle", price: 12.99, category: "Home Decor" },
];

const cart = [];

const addToCart = (productId) => products.filter(product);

const filterProducts = products.filter((product) => product.price <= 10);

const totalPrice = products.reduce((acc, current) => {
  return acc + current.price;
}, 0);

console.log(totalPrice);

console.log(filterProducts);