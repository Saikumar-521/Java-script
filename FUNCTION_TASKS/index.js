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

let productContainer = document.getElementById("ProductContainer");
let msg = document.getElementById("message");
productContainer.innerHTML = "";

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let card = document.createElement("div");
    card.className = "card w-[300px] border p-4 m-4 rounded shadow-lg flex flex-col items-center bg-sky-100 hover:bg-sky-300";
    card.innerHTML = `
    <img src="${product.img}" alt="${product.name}" class="w-[200px] h-[150px] rounded"/>
    <h2 class="text-2xl ">${product.name}</h2>
    <p>Price:${product.price}</p>
    <div>
    <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="message()">Add to Cart</button>
    <button class="bg-red-500 text-white px-4 py-2 rounded ${product.instock ? '' : 'opacity-50 cursor-not-allowed'}" ${product.instock ? '' : 'disabled'}>Buy Now</button>
    </div>
       <p class="text-sm ${product.instock ? "text-green-600 font-bold" : "text-red-500 font-bold"}">
            ${product.instock ? 'Stock avliable' : 'Out of Stock'}
        </p>
    `;
    productContainer.appendChild(card);

}
function message() {
    msg.innerText = "Item added to cart";
    setTimeout(() => {
        msg.innerText = "";
    }, 2000)
}