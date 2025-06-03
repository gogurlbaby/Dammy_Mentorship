import { addToCart, removeFromCart } from "./index.js";

console.log("\n--- Add items ---");
// Add Wireless Mouse, qty 1
addToCart(0, 1);
// Add Yoga Mat, qty 2
addToCart(2, 2);
// Update Wireless Mouse, qty 1 + 3 = 4
addToCart(0, 3);
// Add Gaming Keyboard, qty 1
addToCart(7, 1);
// Try to add non-existent product
addToCart(99, 1);

console.log("\n--- Remove items ---");
// Remove Yoga Mat (ID 2)
removeFromCart(2);
// Remove Wireless Mouse (ID 0)
removeFromCart(0);
// Try to remove non-existent product
removeFromCart(99);
// Remove Gaming Keyboard (ID 7) - should clear cart
removeFromCart(7);

// console.log("\n--- Cart should be empty now ---");
