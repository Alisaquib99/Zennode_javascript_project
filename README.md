# Zennode_javascript_project
**This JavaScript code defines a function calculateTotal that calculates the total cost of a shopping cart based on the quantity, pricing, and discount rules for three products (A, B, and C). The code also considers gift wrapping fees, shipping fees, and applies various discounts based on the quantity and total cart value.**

**Usage**
To use this code, you can call the calculateTotal function with the quantities and gift flags for each product:
calculateTotal(quantityA, isGiftA, quantityB, isGiftB, quantityC, isGiftC);
**For Example**
calculateTotal(50, true, 120, false, 80, true);
This will calculate and display the total cost, discounts, shipping fee, and other details for the given quantities and gift flags.
**Function Breakdown**
->>calculateDiscount(quantity, discount)
This function calculates a discount based on the quantity of a product. If the quantity is greater than 10, it applies a discount using the specified product code.

->>calculateTieredDiscount(quantity, price)
This function calculates a tiered discount for the entire cart based on the total quantity. If the total quantity is greater than 15, it applies a 50% discount for each item beyond 15.

-->>calculateShippingFee(quantity)
Calculates the shipping fee based on the total quantity. It charges $5 for every 10 items.

-->>calculateGiftWrapFee(quantity, isGift)
Calculates the gift wrap fee based on the quantity and the isGift flag. It charges 1 unit per item if it's marked as a gift.

-->>applyDiscount(discountName, amount)
Applies a discount if the calculated amount is higher than the currently applied discount.

-->>calculateProductTotal(quantity, price, isGift)
Calculates the total cost for a specific product, including gift wrap fees.

-->>calculateCartTotal()
Calculates the total cost for the entire cart, applying relevant discounts based on quantity and total cart value.

Results Display
The code displays the individual totals for each product, subtotal after applying discounts, the discount applied, shipping fee, and the grand total.


-->>>calculateTotal(50, true, 120, false, 80, true);

Ensure that you have the necessary input values for quantity and gift flags when using the calculateTotal function. Adjustments can be made to the pricing, discount rules, or other parameters as needed for your specific use case.
