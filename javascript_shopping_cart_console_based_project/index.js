const products = [
  {
    id: 0,
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    stock: 15,
  },
  {
    id: 1,
    name: "Bluetooth Speaker",
    price: 49.99,
    category: "Electronics",
    stock: 10,
  },
  { id: 2, name: "Yoga Mat", price: 19.99, category: "Fitness", stock: 20 },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    category: "Footwear",
    stock: 8,
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    price: 29.99,
    category: "Home & Office",
    stock: 12,
  },
  { id: 5, name: "Water Bottle", price: 14.99, category: "Fitness", stock: 25 },
  { id: 6, name: "Notebook", price: 3.49, category: "Stationery", stock: 50 },
  {
    id: 7,
    name: "Gaming Keyboard",
    price: 59.99,
    category: "Electronics",
    stock: 7,
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 129.99,
    category: "Electronics",
    stock: 5,
  },
  {
    id: 9,
    name: "Scented Candle",
    price: 12.99,
    category: "Home Decor",
    stock: 30,
  },
];

// Initialize cart
const cart = [];
// Saving of cart data loaded upon mount
retrieveCartFromLocalstorage();

export function addToCart(productId, quantity) {
  // Check if product exists.
  // productId is the id provided by the user
  const foundProduct = products.find((product) => product.id === productId);

  if (!foundProduct) {
    console.log(`Error: Product with ID ${productId} not found in catalog.`);
    return;
  }

  // Check if item is already in cart
  const existingCartItem = cart.find(
    (cartItem) => cartItem.productId === productId
  );

  // Update quantity
  if (existingCartItem) {
    console.log(
      `Product already in cart: ${foundProduct.name}. Updating quantity.`
    );

    // Check quantity of stock for product.
    const desiredTotalQuantity = existingCartItem.quantity + quantity;
    if (desiredTotalQuantity > foundProduct.stock) {
      console.log("Error: Cannot add more, desired total exceeds stock!");
      // To end going through the rest of the code in the function.
      return;
    }
    // existingCartItem.quantity = existingCartItem.quantity = quantity;.
    existingCartItem.quantity = quantity;
    // Add quantity
  } else {
    // Check to not allow adding more than available stock.
    if (quantity > foundProduct.stock) {
      console.log(
        `Error, not enough stock for ${foundProduct.name}. Only ${foundProduct.stock} available.`
      );
      return;
    }
    console.log(`Product ${foundProduct.name} added to cart.`);
    // This logic either increases the count of an already-added product or puts a brand new product into the cart.
    cart.push({
      productId: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price,
      quantity: quantity,
    });
  }
  console.log("Current cart:", cart);
  saveCart();
}

// Remove item from cart
export function removeFromCart(productId) {
  // Check if product exists before using filter to remove.
  const itemToRemove = cart.find(
    (cartItem) => cartItem.productId === productId
  );

  if (!itemToRemove) {
    console.log(`Error: Product with ID ${productId} was not found in cart.`);
    return;
  }

  // Filter out a particular product id to be removed.
  const filteredCartItems = cart.filter(
    (cartItem) => cartItem.productId !== productId
  );

  // Now, modify the *existing* 'cart' array in place:
  // Clear all current elements from the 'cart' array.
  cart.length = 0;

  // Add all elements from the 'filteredCartItems' array into the now-empty 'cart' array.
  // The line cart.push(...filteredCartItems); means:
  // Take every single item out of the filteredCartItems basket, and one by one, put them into the end of your main cart basket.
  // cart.push() normally adds one item at a time.
  // The ... (called the "spread operator") next to filteredCartItems is like saying, "Don't add the whole filteredCartItems basket as a single item. Instead, spread out its contents and add each item individually."
  // So, if filteredCartItems contains [apple, banana, orange], cart.push(...filteredCartItems) becomes like doing cart.push(apple, banana, orange). This effectively moves all the contents from the temporary basket into your main cart.
  cart.push(...filteredCartItems);

  console.log(
    `Product ${itemToRemove.name} with ID ${productId} has been removed from the cart.`
  );

  console.log("Current cart:", cart);
  saveCart();
}

// Return cart items
export function getCartItems() {
  return cart;
}

export function getTotal() {
  const total = cart.reduce((acc, cartItem) => {
    const itemSubtotal = cartItem.price * cartItem.quantity;
    return acc + itemSubtotal;
  }, 0);
  return total;
}

export function clearCart() {
  // Clear all elements from the existing 'cart' array in place.
  // This is the correct way to empty a const array without reassigning it
  cart.length = 0;
  console.log("Cart cleared");
  console.log("Current cart:", cart);
  saveCart();
}

// Helper function to save the cart to localStorage
function saveCart() {
  // Convert the 'cart' array (which contains objects) into a JSON string.
  const cartString = JSON.stringify(cart);

  // Save this string to localStorage under a specific key, using the key 'shoppingCart'.
  localStorage.setItem("shoppingCart", cartString);
  console.log("Cart saved to localStorage");
}

// Helper function to load the cart to localStorage
// Use well descriptive variable and function names.
// Eg. loadCart can be retrieveCartFromLocalstorage or loadCartFromLocalstorage
function retrieveCartFromLocalstorage() {
  // Get the cart data string from localStorage using the same key
  const cartString = localStorage.getItem("shoppingCart");

  if (cartString) {
    // If data exists, Parse the string into a temporary array
    const retrieveCart = JSON.parse(cartString);

    // To update the 'const cart' array, we can't reassign it.
    // Instead, we first clear its current contents:
    cart.length = 0;
    // Then, we add all items from the retrieveCart into the existing 'cart' array.
    // The spread operator unpacks etrieveCart's elements into push()
    cart.push(...retrieveCart);

    console.log("Cart loaded from localStorage");
    // If no data in localStorage, initialize cart as empty
  } else {
    console.log("No cart found in localStorage. Cart initialized as empty.");
  }
}

export function searchProduct(name) {
  // This line says: "For each product, take its name, convert it to lowercase,
  // and see if it contains (includes) the lowercase version of the name you are searching for."
  const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
  return searchResults;
}

export function filterProductsByCategory(categoryName) {
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );
  return filteredProducts;
}
