let cart = [];
let cart1 = document.getElementById('cart');
let msg = document.getElementById('message');
let cartbtn = document.getElementById('cart_btn');

let products = [
    { img: "https://tse3.mm.bing.net/th/id/OIP.m4cAv5M-cb-V45Tbuv6ZsQHaFC?pid=Api&P=0&h=180", name: "Laptop", price: "20000", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.gt7skxQSCOrtDvpDIGIugQHaE7?pid=Api&P=0&h=180", name: "mobile", price: "3000", instock: false },
    { img: "https://tse2.mm.bing.net/th/id/OIP.3I39LG45NfZbD-MUgO3rowHaEK?pid=Api&P=0&h=180", name: "Tab", price: "45000", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.pvRIr-hT6b37xHv_4joseQHaEJ?pid=Api&P=0&h=180", name: "Mouse", price: "786", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.Fiuo8FZ7VhIAMgvGElTxwQHaEo?pid=Api&P=0&h=180", name: "TV", price: "45000", instock: false },
    { img: "https://tse3.mm.bing.net/th/id/OIP.m4cAv5M-cb-V45Tbuv6ZsQHaFC?pid=Api&P=0&h=180", name: "Laptop", price: "20000", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.gt7skxQSCOrtDvpDIGIugQHaE7?pid=Api&P=0&h=180", name: "mobile", price: "3000", instock: false },
    { img: "https://tse2.mm.bing.net/th/id/OIP.3I39LG45NfZbD-MUgO3rowHaEK?pid=Api&P=0&h=180", name: "Tab", price: "45000", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.pvRIr-hT6b37xHv_4joseQHaEJ?pid=Api&P=0&h=180", name: "Mouse", price: "786", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.Fiuo8FZ7VhIAMgvGElTxwQHaEo?pid=Api&P=0&h=180", name: "TV", price: "45000", instock: false },
    { img: "https://tse3.mm.bing.net/th/id/OIP.m4cAv5M-cb-V45Tbuv6ZsQHaFC?pid=Api&P=0&h=180", name: "Laptop", price: "20000", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.gt7skxQSCOrtDvpDIGIugQHaE7?pid=Api&P=0&h=180", name: "mobile", price: "3000", instock: false },
    { img: "https://tse2.mm.bing.net/th/id/OIP.3I39LG45NfZbD-MUgO3rowHaEK?pid=Api&P=0&h=180", name: "Tab", price: "45000", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.pvRIr-hT6b37xHv_4joseQHaEJ?pid=Api&P=0&h=180", name: "Mouse", price: "786", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.Fiuo8FZ7VhIAMgvGElTxwQHaEo?pid=Api&P=0&h=180", name: "TV", price: "45000", instock: false },
];

// Render products
let productContainer = document.getElementById("ProductContainer");
productContainer.innerHTML = "";

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let card = document.createElement("div");
    card.className = "card w-[300px] border p-4 m-4 rounded shadow-lg flex flex-col items-center bg-sky-100 hover:bg-sky-300";
    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="w-[200px] h-[150px] rounded"/>
        <h2 class="text-2xl ">${product.name}</h2>
        <p>Price: ${product.price}</p>
        <div>
            <button class="cart_btn bg-blue-500 text-white px-4 py-2 rounded" onclick="addToCart(${i})">Add to Cart</button>
            <button class="cart_btn bg-red-500 text-white px-4 py-2 rounded ${product.instock ? '' : 'opacity-50 cursor-not-allowed'}" ${product.instock ? '' : 'disabled'}>Buy Now</button>
        </div>
        <p class="text-sm ${product.instock ? "text-green-600 font-bold" : "text-red-500 font-bold"}">
            ${product.instock ? 'Stock available' : 'Out of Stock'}
        </p>
    `;
    productContainer.appendChild(card);
}

// Add product to cart
function addToCart(index) {
    let product = products[index];
    //cart.push(product); // add full product object
    // msg.innerText = `${product.name} added to cart ✅`;

    let exists = cart.some(item => item.name === product.name);
    if (!exists) {
        cart.push(product);
        msg.innerText = `${product.name} added to cart`
    }
    else {
        msg.innerText = `${product.name} is already in cart`
    }
    setTimeout(() => {
        msg.innerText = "";
    }, 2000);

    // msg.innerText = " ";
}

// Show cart when clicking "View Cart"
cartbtn.addEventListener('click', () => {
    if (cart.length === 0) {
        cart1.innerText = "Your cart is empty!";
        alert('Your cart is Empty!');
        return;
    }

    // Display cart contents
    cart1.innerHTML = "";
    // let uniele = cart.filter((user, index, self) =>
    //     index === self.findIndex(u => u.name === user.name));
    cart.forEach((item, idx) => {
        let cart_card = document.createElement("div");
        // li.innerText = `${idx + 1}. ${item.name} - ₹${item.price}`;
        cart_card.className = `w-full h-full border bg-gray flex space-x-2 p-2 m-2`;
        cart_card.innerHTML = `<p>${idx + 1}.</p>
        <img src="${item.img}" alt="${item.name} " class="w-8 h-8 rounded-lg border-blue-500">
        <p class="text-black font-semibold">${item.name}</p>
        <p class="text-black font-semibold">${item.price}</p>`
        cart1.appendChild(cart_card);
    });
});
