let productContainer = document.getElementById('ProductContainer')

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

for (let pr of products) {
    for (let key in products) {
        productContainer.innerHTML += `<img src='pr.key'>`
    }
}