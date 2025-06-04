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

let cart = [];

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
    // existingCartItem.quantity = existingCartItem.quantity + quantity;.
    existingCartItem.quantity += quantity;
    // Add quantity
  } else {
    console.log(`Product ${foundProduct.name} added to cart.`);
    // This logic either increases the count of an already-added product or puts a brand new product into the cart.
    cart.push({
      productId: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price,
      quantity: quantity,
    });
  }
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
}

// Update item quantity
export function updateQuantity(productId, newQuantity) {
  const itemToUpdate = cart.find(
    (cartItem) => cartItem.productId === productId
  );

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
}
