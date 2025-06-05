import {
  addToCart,
  updateQuantity,
  removeFromCart,
  getCartItems,
  getTotal,
  clearCart,
  searchProduct,
  filterProductsByCategory,
} from "./index.js";

console.log("\n--- Testing addToCart with Stock Limits ---");

// --- Test `addToCart` ---
console.log("\n--- Testing addToCart ---");
addToCart(0, 20); // Add Wireless Mouse (ID 0) - Qty 1
addToCart(2, 2); // Add Yoga Mat (ID 2) - Qty 2
addToCart(0, 3); // Add Wireless Mouse (ID 0) again - Qty should update to 4
addToCart(7, 3); // Add Gaming Keyboard (ID 7) - Qty 1
addToCart(99, 5); // Try to add a non-existent product (ID 99)

// // Test 1: Try adding a NEW item that EXCEEDS stock
// // Wireless Mouse (ID 0) has a stock of 15
// addToCart(0, 20); // This should trigger the "Error: Not enough stock..." message

// // Test 2: Add a NEW item that is WITHIN stock
// // Bluetooth Speaker (ID 1) has a stock of 10
// addToCart(1, 5); // This should succeed

// // Test 3: Add more of an EXISTING item, where the new total EXCEEDS stock
// // Gaming Keyboard (ID 7) has a stock of 7
// addToCart(7, 5); // Add 5 first (should succeed)
// addToCart(7, 3); // Try to add 3 more (5 + 3 = 8, which > 7 stock). This should trigger an error.

// // Test 4: Add more of an EXISTING item, where the new total is WITHIN stock
// // Yoga Mat (ID 2) has a stock of 20
// addToCart(2, 10); // Add 10 first (should succeed)
// addToCart(2, 5); // Try to add 5 more (10 + 5 = 15, which <= 20 stock). This should succeed.

console.log("\n--- Current Cart Items (using getCartItems) ---");
// console.log(getCartItems()); // Should show 3 items: Mouse (4), Mat (2), Keyboard (1)
// To see a snapshot of the cart at that moment (prevents console live-updating)
console.log(JSON.parse(JSON.stringify(getCartItems())));
console.log("Total Price after initial adds:", getTotal());

// --- Test `updateQuantity` ---
console.log("\n--- Testing updateQuantity ---");
updateQuantity(2, 5); // Update Yoga Mat (ID 2) to Qty 5
updateQuantity(0, 1); // Update Wireless Mouse (ID 0) to Qty 1
updateQuantity(7, 0); // Update Gaming Keyboard (ID 7) to Qty 0 (should trigger removal)
updateQuantity(99, 10); // Try to update a non-existent product (ID 99)

console.log("\n--- Current Cart Items after Updates ---");
// console.log(getCartItems()); // Should show 2 items: Mouse (1), Mat (5)
// To see a snapshot of the cart at that moment (prevents console live-updating)
console.log(JSON.parse(JSON.stringify(getCartItems())));
console.log("Total Price after updates:", getTotal());

// --- Test `removeFromCart` ---
console.log("\n--- Testing removeFromCart ---");
removeFromCart(2); // Remove Yoga Mat (ID 2)
removeFromCart(0); // Remove Wireless Mouse (ID 0)
removeFromCart(99); // Try to remove non-existent product (ID 99)

console.log("\n--- Test `clearCart` ---");
clearCart(); // Call the function to clear the cart

console.log("\n--- Current Cart Items after Removals ---");
// console.log(getCartItems()); // Should be empty: []
// To see a snapshot of the cart at that moment (prevents console live-updating)
console.log(JSON.parse(JSON.stringify(getCartItems())));
console.log("Total Price after removals:", getTotal());

console.log("\n--- End of Cart Operations Test ---");

console.log("\n--- Testing searchProduct ---");

console.log("Search for 'Mouse':", searchProduct("Mouse")); // Should find Wireless Mouse
console.log("Search for 'keyboard':", searchProduct("keyboard")); // Should find Gaming Keyboard
console.log("Search for 'Watch':", searchProduct("Watch")); // Should find Smart Watch
console.log("Search for 'bottle':", searchProduct("bottle")); // Should find Water Bottle
console.log("Search for 'speaker':", searchProduct("speaker")); // Should find Bluetooth Speaker
console.log("Search for 'nonexistent':", searchProduct("nonexistent")); // Should return an empty array []

console.log("\n--- End of Cart Operations Test ---");

console.log("\n--- Testing filterProductsByCategory ---");

console.log(
  "Products in 'Electronics' category:",
  filterProductsByCategory("Electronics")
);
console.log(
  "Products in 'Fitness' category:",
  filterProductsByCategory("Fitness")
);
console.log(
  "Products in 'home & office' category:",
  filterProductsByCategory("home & office")
); // Test case-insensitivity
console.log("Products in 'Books' category:", filterProductsByCategory("Books")); // Test non-existent category

console.log("\n--- End of Cart Operations Test ---");
