document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && password) {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.home-container').style.display = 'block';
    }
});

const cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const name = product.querySelector('h2').textContent;
        const price = parseFloat(product.querySelector('p').textContent.replace('Price: ₹', '').replace('/kg', ''));
        const quantity = parseFloat(product.querySelector('input').value);

        if (quantity > 0) {
            cart.push({ name, price, quantity });
            updateCart();
        }
    });
});

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `<p>${item.name}: ₹${item.price}/kg x ${item.quantity}kg = ₹${itemTotal.toFixed(2)}</p>`;
    });

    document.getElementById('totalAmount').textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', function() {
    alert('Congratulations! Order placed.');
    cart.length = 0;
    updateCart();
});
