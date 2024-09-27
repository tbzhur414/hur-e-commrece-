// Cart Functionality
const cart = [];
const products = [
    { id: 1, name: 'Aroma Super Kernal Rice', price: 1200 },
    { id: 2, name: 'Sona Brown Rice', price: 1000 },
    { id: 3, name: 'Har Roz IRRI 6 Rice', price: 800 },
    { id: 4, name: 'Super Kernel Basmati Rice', price: 1500 },
    { id: 5, name: 'PK 386 Rice', price: 900 },
    { id: 6, name: 'IRRI-9 Rice', price: 750 },
    { id: 7, name: 'IRRI-6 Rice', price: 700 },
    { id: 8, name: '1121 Basmati White Rice', price: 2000 },
    { id: 9, name: '1121 Steam Basmati Rice', price: 1900 },
    { id: 10, name: '1121 Basmati Golden Sella', price: 1800 },
    { id: 11, name: 'Green Millet', price: 600 },
    { id: 12, name: 'Sesame (Til)', price: 500 }
];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartContainer = document.querySelector('.cart-container');
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No items in cart</p>';
    } else {
        cartContainer.innerHTML = cart.map(item => `<p>${item.name} - $${item.price}</p>`).join('');
    }
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}
