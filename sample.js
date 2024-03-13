let cartItems = [];
let total = 0;

function addToCart(productName, price) {
    // Add item to the cart
    cartItems.push({ name: productName, price: price });

    // Update the cart display
    updateCart();

    // Update the total price
    updateTotal();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    cartItems.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });
}

function updateTotal() {
    total = cartItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("total").innerText = total.toFixed(2);
}
