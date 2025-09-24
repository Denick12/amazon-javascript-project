//A cart is basically a list, and inside the list we have the product we want to byy, the quantinty and the price
//In js, we can represent this as an array:Inside we have some objects where wach object has product and quantity.
//const cart = [{
//     product: 'Basketball',
//     quantity: 1
//    },
//    {
//    product: 'T-shirt,
//    quantity: 2
// }
// ]

export const cart = [];

export function addToCart(productId) {
    let matchingItem;
    // loop through the cart list using .forEach()
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}
