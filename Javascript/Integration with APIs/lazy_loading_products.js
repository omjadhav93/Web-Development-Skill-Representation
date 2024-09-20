/* I had created three products sections on landing of my clients E-Commerce website for suggesting customers that ,
    1. Frequently Purchased Products
    2. Top Designs Products
    3. Less In Price 
  And I have add lazy loading effect to that products such that it will reduce loading time for whole landing page.*/

// Fetching products
// Function to fetch products from the server
function fetchProducts(sectionId) {
    fetch(/api/${sectionId})
        .then(response => response.json())
        .then(data => {
            const productsDiv = document.getElementById(${sectionId});
            productsDiv.innerHTML = ''; // Clear existing content
            if(Object.hasOwn(data, 'msg')){
                productsDiv.innerHTML = <center>${data.msg}</center>;
                return;
            }
            data.forEach(product => {
                const imageDiv = document.createElement('img');
                imageDiv.classList.add('product-img');
                imageDiv.src = /static/productImg/${product.image};
                const productElement = document.createElement('div');
                productElement.classList.add('product-box');
                productElement.setAttribute('onclick',window.location.href= '/product?modelNo=${product['model-number']}')
                productElement.appendChild(imageDiv);
                productsDiv.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Function to initialize Intersection Observer
function initObserver() {
    const frequentProducts = document.getElementById('frequent');
    const topDesign = document.getElementById('topDesign');
    const lessPrice = document.getElementById('lessPrice');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                fetchProducts(sectionId);
                observer.unobserve(entry.target); // Fetch products only once
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    observer.observe(frequentProducts);
    observer.observe(topDesign);
    observer.observe(lessPrice);
}
