document.getElementById('add-to-cart').addEventListener('click', () => {
    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('li');
    newItem.textContent = 'Hello World T-Shirt';
    cartItems.appendChild(newItem);
});
