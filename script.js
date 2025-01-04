let products;
async function loadProducts() {
    const response = await fetch('product.json');
    const data = await response.json();
    products = [...data];
}

loadProducts();

const box = document.querySelector('.products');
const box2 = document.querySelector('.divas');

setTimeout(() => {
    products.forEach((c, i) => {
        box.innerHTML +=
            `
            <div class="card" style="width: 250px; border: 1px solid #ccc; padding: 10px; margin: 10px;">
                <h1 style="font-size: 1.2em; background-color: bisque;">${c.title}</h1>
                <img src="${c.img}" alt="${c.title}" style="max-width: 100%; height: auto;"/>
                <p>${c.category}</p>
                <p>${c.description}</p>
                <p>Цена: $${c.price}</p>
                <button>Add</button>
            </div>
        `;
    });

    box.addEventListener("click", (e) => {
        if (e.target.localName === 'button') {
            const productTitle = e.target.closest('.card').querySelector('h1').textContent;
            alert(`продукт добвлен`);

            box2.innerHTML +=
                `
                <div style="border-bottom: 1px solid #ccc; padding: 5px; margin-bottom: 5px;">
                    <h1 style="font-size: 1.2em;">${productTitle}</h1>
                </div>
                `;
        }
    });
}, 2000);
