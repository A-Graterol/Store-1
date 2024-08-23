document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const texts = {
        es: {
            logo: 'Tienda de Ropa',
            'home-link': 'Inicio',
            'categories-link': 'Categorías',
            'search-link': 'Búsqueda',
            'search-placeholder': 'Buscar productos...',
            'search-button': 'Buscar',
            'footer-text': 'Proveedores: Proveedor 1, Proveedor 2, Proveedor 3...'
        },
        en: {
            logo: 'Clothing Store',
            'home-link': 'Home',
            'categories-link': 'Categories',
            'search-link': 'Search',
            'search-placeholder': 'Search products...',
            'search-button': 'Search',
            'footer-text': 'Suppliers: Supplier 1, Supplier 2, Supplier 3...'
        }
    };

    function setLanguage(language) {
        localStorage.setItem('language', language);
        for (const [key, value] of Object.entries(texts[language])) {
            const element = document.getElementById(key);
            if (element) {
                if (key === 'search-placeholder') {
                    element.placeholder = value;
                } else {
                    element.textContent = value;
                }
            }
        }
    }

    languageSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    const savedLanguage = localStorage.getItem('language') || 'es';
    languageSelect.value = savedLanguage;
    setLanguage(savedLanguage);

    // Función para buscar por categoría
    window.searchCategory = function(category) {
        window.location.href = `busqueda.html?categoria=${category}`;
    };

    // Función para manejar la búsqueda de productos
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const products = [
        { name: 'Camisa Hombre', price: '$19.99', image: 'producto1.jpg', description: 'Camisa de algodón para hombre, disponible en varios colores.' },
        { name: 'Pantalón Hombre', price: '$29.99', image: 'producto2.jpg', description: 'Pantalón de mezclilla para hombre, cómodo y resistente.' },
        { name: 'Blusa Mujer', price: '$19.99', image: 'producto3.jpg', description: 'Blusa elegante para mujer, perfecta para cualquier ocasión.' },
        { name: 'Falda Mujer', price: '$29.99', image: 'producto4.jpg', description: 'Falda de moda para mujer, disponible en varios tamaños.' },
        { name: 'Sombrero', price: '$9.99', image: 'producto5.jpg', description: 'Sombrero de verano, ideal para protegerse del sol.' },
        { name: 'Bufanda', price: '$14.99', image: 'producto6.jpg', description: 'Bufanda de lana, perfecta para el invierno.' },
        { name: 'Zapatos', price: '$39.99', image: 'producto7.jpg', description: 'Zapatos de cuero, elegantes y cómodos.' },
        { name: 'Botas', price: '$49.99', image: 'producto8.jpg', description: 'Botas de montaña, resistentes y duraderas.' }
    ];

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

        searchResults.innerHTML = '';

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <p>${product.name}</p>
                        <p class="price">${product.price}</p>
                        <p>${product.description}</p>
                    </div>
                `;
                searchResults.appendChild(productCard);
            });
        } else {
            searchResults.innerHTML = '<p>No se encontraron productos.</p>';
        }
    });
});
