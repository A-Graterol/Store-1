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

});

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('categoria');
    const searchResults = document.getElementById('search-results');

    const products = {
        hombre: [
            { name: 'Camisa Hombre', price: '$19.99', image: '/public/image/ropa1.png', description: 'Camisa de algodón para hombre, disponible en varios colores.' },
            { name: 'Pantalón Hombre', price: '$29.99', image: '/public/image/ropa2.png', description: 'Pantalón de mezclilla para hombre, cómodo y resistente.' }
        ],
        mujer: [
            { name: 'Blusa Mujer', price: '$19.99', image: '/public/image/ropa3.png', description: 'Blusa elegante para mujer, perfecta para cualquier ocasión.' },
            { name: 'Falda Mujer', price: '$29.99', image: '/public/image/ropa4.png', description: 'Falda de moda para mujer, disponible en varios tamaños.' }
        ],
        accesorios: [
            { name: 'Sombrero', price: '$9.99', image: '/public/image/ropa2.png', description: 'Sombrero de verano, ideal para protegerse del sol.' },
            { name: 'Bufanda', price: '$14.99', image: '/public/image/ropa1.png', description: 'Bufanda de lana, perfecta para el invierno.' }
        ],
        calzado: [
            { name: 'Zapatos', price: '$39.99', image: '/public/image/ropa4.png', description: 'Zapatos de cuero, elegantes y cómodos.' },
            { name: 'Botas', price: '$49.99', image: '/public/image/ropa3.png', description: 'Botas de montaña, resistentes y duraderas.' }
        ]
    };

    if (products[category]) {
        products[category].forEach(product => {
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
        searchResults.innerHTML = '<p>No se encontraron productos en esta categoría.</p>';
    }
});        document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('categoria');
    const searchResults = document.getElementById('search-results');

    const products = {
        hombre: [
            { name: 'Camisa Hombre', price: '$19.99', image: '/public/image/ropa1.png', description: 'Camisa de algodón para hombre, disponible en varios colores.' },
            { name: 'Pantalón Hombre', price: '$29.99', image: '/public/image/ropa2.png', description: 'Pantalón de mezclilla para hombre, cómodo y resistente.' }
        ],
        mujer: [
            { name: 'Blusa Mujer', price: '$19.99', image: '/public/image/ropa3.png', description: 'Blusa elegante para mujer, perfecta para cualquier ocasión.' },
            { name: 'Falda Mujer', price: '$29.99', image: '/public/image/ropa4.png', description: 'Falda de moda para mujer, disponible en varios tamaños.' }
        ],
        accesorios: [
            { name: 'Sombrero', price: '$9.99', image: '/public/image/ropa2.png', description: 'Sombrero de verano, ideal para protegerse del sol.' },
            { name: 'Bufanda', price: '$14.99', image: '/public/image/ropa1.png', description: 'Bufanda de lana, perfecta para el invierno.' }
        ],
        calzado: [
            { name: 'Zapatos', price: '$39.99', image: '/public/image/ropa4.png', description: 'Zapatos de cuero, elegantes y cómodos.' },
            { name: 'Botas', price: '$49.99', image: '/public/image/ropa3.png', description: 'Botas de montaña, resistentes y duraderas.' }
        ]
    };

    if (products[category]) {
        products[category].forEach(product => {
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
        searchResults.innerHTML = '<p>No se encontraron productos en esta categoría.</p>';
    }

});

document.querySelectorAll('.product-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');
        const productDescription = this.getAttribute('data-description');
        const productImage = this.getAttribute('data-image');

        localStorage.setItem('productName', productName);
        localStorage.setItem('productPrice', productPrice);
        localStorage.setItem('productDescription', productDescription);
        localStorage.setItem('productImage', productImage);

        window.location.href = this.href;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const productName = localStorage.getItem('productName');
    const productPrice = localStorage.getItem('productPrice');
    const productDescription = localStorage.getItem('productDescription');
    const productImage = localStorage.getItem('productImage');

    if (productName && productPrice && productDescription && productImage) {
        document.getElementById('product-name').textContent = productName;
        document.getElementById('product-price').textContent = productPrice;
        document.getElementById('product-description').textContent = productDescription;
        document.getElementById('product-image').src = productImage;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    const backButton = document.getElementById('back-button');

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }
});