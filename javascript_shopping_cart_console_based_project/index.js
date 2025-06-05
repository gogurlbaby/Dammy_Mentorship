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
let cart = [];
// Saving of cart data loaded upon mount
loadCart();

export function addToCart(productId, quantity) {
  // Check if product exists
  const foundProduct = products.find((product) => product.id === productId);

  if (foundProduct) {
    console.log(`Product Found: ${foundProduct.name}`);
  } else {
    console.log(`Error: Product with ID ${productId} not found`);
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
      return;
    }
    // existingCartItem.quantity = existingCartItem.quantity + quantity;.
    existingCartItem.quantity += quantity;
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
  // Initial cart length
  const inititalCartLength = cart.length;

  const updatedCart = cart.filter(
    (cartItem) => cartItem.productId !== productId
  );
  // Updates the global cart
  cart = updatedCart;

  if (cart.length < inititalCartLength) {
    console.log(`Product with ID ${productId} has been removed from the cart.`);
  } else {
    console.log(`Error: Product ${productId} was not found in the cart.`);
  }
  console.log("Current cart:", cart);
  saveCart();
}

// Update item quantity
export function updateQuantity(productId, newQuantity) {
  const itemToUpdate = cart.find(
    (cartItem) => cartItem.productId === productId
  );

  // To check if product exists and also to access foundProduct
  const foundProduct = products.find((product) => product.id === productId);
  if (!foundProduct) {
    console.log(
      `Error: Product with ID ${productId} not found in product catalog.`
    );
    return;
  }

  if (itemToUpdate) {
    // Logic to check if item is 0 or negative.
    if (newQuantity <= 0) {
      // If quantity is 0 or less, remove the item.
      console.log(
        `Quantity for ${itemToUpdate.name} is 0 or less. Removing item from cart.`
      );
      removeFromCart(productId);
      // Only update the quantity if it's a positive number
    } else {
      // Check to not allow adding more than available stock.
      if (newQuantity > foundProduct.stock) {
        console.log("Error: Not enough stock for desired quantity!");
        return;
      }
      itemToUpdate.quantity = newQuantity;
      console.log(
        `Product ${itemToUpdate.name} quantity updated to ${newQuantity}.`
      );
    }
  } else {
    console.log(`Error: Product with ID ${productId} was not found`);
    return;
  }
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
  cart = [];
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
function loadCart() {
  // Get the cart data string from localStorage using the same key
  const cartString = localStorage.getItem("shoppingCart");

  if (cartString) {
    // If data exists, parse the JSON string back into a JavaScript array/object
    cart = JSON.parse(cartString);
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
