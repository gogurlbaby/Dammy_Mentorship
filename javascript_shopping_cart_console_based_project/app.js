import {
  addToCart,
  updateQuantity,
  removeFromCart,
  getCartItems,
  getTotal,
  clearCart,
} from "./index.js";

console.log("--- Starting Cart Operations Test ---");

// --- Test `addToCart` ---
console.log("\n--- Testing addToCart ---");
addToCart(0, 1); // Add Wireless Mouse (ID 0) - Qty 1
addToCart(2, 2); // Add Yoga Mat (ID 2) - Qty 2
addToCart(0, 3); // Add Wireless Mouse (ID 0) again - Qty should update to 4
addToCart(7, 1); // Add Gaming Keyboard (ID 7) - Qty 1
addToCart(99, 5); // Try to add a non-existent product (ID 99)

console.log("\n--- Current Cart Items (using getCartItems) ---");
console.log(getCartItems()); // Should show 3 items: Mouse (4), Mat (2), Keyboard (1)
// To see a snapshot of the cart at that moment (prevents console live-updating)
// console.log(JSON.parse(JSON.stringify(getCartItems())));
console.log("Total Price after initial adds:", getTotal());

// --- Test `updateQuantity` ---
console.log("\n--- Testing updateQuantity ---");
updateQuantity(2, 5); // Update Yoga Mat (ID 2) to Qty 5
updateQuantity(0, 1); // Update Wireless Mouse (ID 0) to Qty 1
updateQuantity(7, 0); // Update Gaming Keyboard (ID 7) to Qty 0 (should trigger removal)
updateQuantity(99, 10); // Try to update a non-existent product (ID 99)

console.log("\n--- Current Cart Items after Updates ---");
console.log(getCartItems()); // Should show 2 items: Mouse (1), Mat (5)
// To see a snapshot of the cart at that moment (prevents console live-updating)
// console.log(JSON.parse(JSON.stringify(getCartItems())));
console.log("Total Price after updates:", getTotal());

// --- Test `removeFromCart` ---
console.log("\n--- Testing removeFromCart ---");
removeFromCart(2); // Remove Yoga Mat (ID 2)
removeFromCart(0); // Remove Wireless Mouse (ID 0)
removeFromCart(99); // Try to remove non-existent product (ID 99)

console.log("\n--- Test `clearCart` ---");
clearCart(); // Call the function to clear the cart

console.log("\n--- Current Cart Items after Removals ---");
console.log(getCartItems()); // Should be empty: []
// To see a snapshot of the cart at that moment (prevents console live-updating)
// console.log(JSON.parse(JSON.stringify(getCartItems())));
console.log("Total Price after removals:", getTotal());

console.log("\n--- End of Cart Operations Test ---");
