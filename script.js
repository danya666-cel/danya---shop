
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price} ₽`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
}

function toggleCart() {
    const cartSection = document.getElementById('cart');
    cartSection.classList.toggle('hidden');
}

function clearCart() {
    cart = [];
    updateCart();
    toggleCart();
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    if (cart.length === 0) {
        alert('Ваша корзина пуста!');
        return;
    }

    console.log('Новый заказ:');
    console.log('Имя:', name);
    console.log('Телефон:', phone);
    console.log('Адрес:', address);
    console.log('Товары:', cart);

    alert(`Спасибо за заказ, ${name}!
Мы свяжемся с вами по телефону: ${phone}.`);

    cart = [];
    updateCart();
    document.getElementById('order-form').reset();
    toggleCart();
}
