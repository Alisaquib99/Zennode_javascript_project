function calculateTotal(quantityA, isGiftA, quantityB, isGiftB, quantityC, isGiftC) {
    const prices = {
        A: 20,
        B: 40,
        C: 50
    };

    const flat_10_discount = 10;
    const bulk_5_discount = 0.05;
    const bulk_10_discount = 0.10;
    const tiered_50_discount = 0.50;

    let totalAmount = 0;
    let cartTotal = 0;
    let discountApplied = '';
    let discountAmount = 0;
    let shippingFee = 0;
    let giftWrapFee = 0;

// Calculate the discount based on quantity
    const calculateDiscount = (quantity, discount) => {
        let result;
        if (quantity > 10) {
            result = prices[discount] * quantity;
        } else {
            result = 0;
        }
        return result;


    };
// Calculate tiered discount
    const calculateTieredDiscount = (quantity, price) => {
        if (quantity > 15) {
            return (quantity - 15) * price * tiered_50_discount;
        }
        return 0;
    };
// Calculate shipping fee based on quantity
    const calculateShippingFee = (quantity) => {
        return Math.ceil(quantity / 10) * 5;
    };
// Calculate gift wrap fee based on quantity and isGift flag
    const calculateGiftWrapFee = (quantity, isGift) => {
        if (isGift) {
            return quantity;
        } else {
            return 0;
        }
    };
    
 // Apply discount if the calculated amount is higher
    const applyDiscount = (discountName, amount) => {
        if (amount > discountAmount) {
            discountAmount = amount;
            discountApplied = discountName;
        }
    };
// Calculate total for a product, including gift wrap fee
    const calculateProductTotal = (quantity, price, isGift) => {
        const productTotal = quantity * price;
        const giftWrapFee = calculateGiftWrapFee(quantity, isGift);
        totalAmount += productTotal + giftWrapFee;
        cartTotal += productTotal;
        return productTotal + giftWrapFee;
    };
// Calculate the total for the entire cart and apply relevant discounts
    const calculateCartTotal = () => {
        const totalQuantity = quantityA + quantityB + quantityC;

        if (totalQuantity > 30 && (quantityA > 15 || quantityB > 15 || quantityC > 15)) {
            const tieredDiscount = calculateTieredDiscount(totalQuantity, prices.A);
            applyDiscount('tiered_50_discount', tieredDiscount);
        } else if (totalQuantity > 20) {
            const bulkDiscount = cartTotal * bulk_10_discount;
            applyDiscount('bulk_10_discount', bulkDiscount);
        } else if (quantityA > 10) {
            const bulkDiscountA = calculateDiscount(quantityA, 'A');
            applyDiscount('bulk_5_discount', bulkDiscountA);
        } else if (quantityB > 10) {
            const bulkDiscountB = calculateDiscount(quantityB, 'B');
            applyDiscount('bulk_5_discount', bulkDiscountB);
        } else if (quantityC > 10) {
            const bulkDiscountC = calculateDiscount(quantityC, 'C');
            applyDiscount('bulk_5_discount', bulkDiscountC);
        }

        if (cartTotal > 200) {
            applyDiscount('flat_10_discount', flat_10_discount);
        }
    };

    calculateCartTotal();
// Calculate total for each product
    const productATotal = calculateProductTotal(quantityA, prices.A, isGiftA);
    const productBTotal = calculateProductTotal(quantityB, prices.B, isGiftB);
    const productCTotal = calculateProductTotal(quantityC, prices.C, isGiftC);
// Calculate shipping fee and final totals
    shippingFee = calculateShippingFee(totalAmount);

    const subtotal = cartTotal - discountAmount;
    const grandTotal = subtotal + shippingFee;
// Display results
    console.log(`Product A: Quantity - ${quantityA}, Total - $${productATotal}`);
    console.log(`Product B: Quantity - ${quantityB}, Total - $${productBTotal}`);
    console.log(`Product C: Quantity - ${quantityC}, Total - $${productCTotal}`);
    console.log(`Subtotal: $${subtotal}`);
    console.log(`Discount Applied: ${discountApplied} - $${discountAmount}`);
    console.log(`Shipping Fee: $${shippingFee}`);
    console.log(`Total: $${grandTotal}`);
}

// Example usage
calculateTotal(50, true, 120, false, 80, true);