document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const productsCarousel = document.getElementById('products-carousel');
    const bestsellersCarousel = document.getElementById('bestsellers-carousel');

    const products = [
        { name: 'Camisa Hombre', price: '$19.99', image: 'image/ropa3.png', category: 'hombre' },
        { name: 'Pantalón Hombre', price: '$29.99', image: 'image/ropa2.png', category: 'hombre' },
        { name: 'Blusa Mujer', price: '$19.99', image: 'image/ropa1.png', category: 'mujer' },
        { name: 'Falda Mujer', price: '$29.99', image: 'image/ropa4.png', category: 'mujer' },
        { name: 'Sombrero', price: '$9.99', image: 'image/ropa3.png', category: 'accesorios' },
        { name: 'Bufanda', price: '$14.99', image: 'image/ropa2.png', category: 'accesorios' },
        { name: 'Zapatos', price: '$39.99', image: 'image/ropa4.png', category: 'calzado' },
        { name: 'Botas', price: '$49.99', image: 'image/ropa1.png', category: 'calzado' }
    ];

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

        productsCarousel.innerHTML = '';
        bestsellersCarousel.innerHTML = '';

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name}</p>
                    <p>${product.price}</p>
                `;
                productsCarousel.appendChild(productCard);
            });
        } else {
            productsCarousel.innerHTML = '<p>No se encontraron productos.</p>';
        }
    });
});
