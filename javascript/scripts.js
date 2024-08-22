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
