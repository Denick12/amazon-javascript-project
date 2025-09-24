//creating objects with their properties, helps us save the data----data structure---helps us structure our data
// Note while using js: 1. we save data, 2. generate the HTML, 3. Make it interactive
// Below we save the data
// const products = [{
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4.5,
//         count: 87
//     },
//     priceCents: 1090
// }, {
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: {
//         stars: 4,
//         count: 127
//     },
//     priceCents: 2095
// }, {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating: {
//         stars: 4.5,
//         count: 56
//     },
//     priceCents: 799
// },{
//     image:'images/products/black-2-slot-toaster.jpg',
//     name:'2 Slot Toaster-Black',
//     rating:{
//         stars: 5,
//         count: 2197
//     },
//     priceCents: 1899
// }];

// We removed the js we had created and used the product.js data.

//Next we generate the HTML using js as below
//Here we will loop through the above array of products created

// The way this function forEach work, is that it takes each product, saves it in the parameter product and then runs the function.
let productsHTML = ''

// The above productsHTML allows us to put the HTML together
products.forEach((product) => {

    productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;

});
// console.log(productsHTML)
document.querySelector('.js-products-grid').innerHTML = productsHTML;

// add to cart button
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            // console.log('Added product')
            //     Now that from the above we have confirmed that pur add to cart button works, we need to now figure out how the products will be actually added to our cart list
            //     We may use;
//         cart.push({
//           productName: 'Basketball',
//           quantity: 1
//});

            //     How do we know which product to add to the cart?
            //We use data attribute, it allows us to attach any information to an element
            //     e.g : data-product-name
            const productId = button.dataset.productId;

            let matchingItem;
            // loop through the cart list using .forEach()
            cart.forEach((item) => {
                if (productId === item.productId) {
                    matchingItem = item;
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
            let cartQuantity = 0;
            cart.forEach((item) =>{
                cartQuantity +=item.quantity;
            });
            document.querySelector('.js-cart-quantity')
                .innerHTML = cartQuantity

            console.log(cartQuantity);
            console.log(cart)
        })
    })





