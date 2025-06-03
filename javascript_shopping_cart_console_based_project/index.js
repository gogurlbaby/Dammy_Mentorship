const products = [
  { id: 0, name: "Wireless Mouse", price: 25.99, category: "Electronics" },
  { id: 1, name: "Bluetooth Speaker", price: 49.99, category: "Electronics" },
  { id: 2, name: "Yoga Mat", price: 19.99, category: "Fitness" },
  { id: 3, name: "Running Shoes", price: 89.99, category: "Footwear" },
  { id: 4, name: "LED Desk Lamp", price: 29.99, category: "Home & Office" },
  { id: 5, name: "Water Bottle", price: 14.99, category: "Fitness" },
  { id: 6, name: "Notebook", price: 3.49, category: "Stationery" },
  { id: 7, name: "Gaming Keyboard", price: 59.99, category: "Electronics" },
  { id: 8, name: "Smart Watch", price: 129.99, category: "Electronics" },
  { id: 9, name: "Scented Candle", price: 12.99, category: "Home Decor" },
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
    existingCartItem.quantity += quantity;
    // Add quantity
  } else {
    console.log(`Product ${foundProduct.name} added to cart.`);
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
