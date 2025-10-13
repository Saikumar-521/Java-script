let products = [
    { img: "https://tse3.mm.bing.net/th/id/OIP.m4cAv5M-cb-V45Tbuv6ZsQHaFC?pid=Api&P=0&h=180", name: "Laptop", price: "20000", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.gt7skxQSCOrtDvpDIGIugQHaE7?pid=Api&P=0&h=180", name: "mobile ", price: "3000", instock: false },
    { img: "https://tse2.mm.bing.net/th/id/OIP.3I39LG45NfZbD-MUgO3rowHaEK?pid=Api&P=0&h=180", name: "Tab", price: "45000", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.pvRIr-hT6b37xHv_4joseQHaEJ?pid=Api&P=0&h=180", name: "Mouse", price: "786", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.Fiuo8FZ7VhIAMgvGElTxwQHaEo?pid=Api&P=0&h=180", name: "TV", price: "45000", instock: false },
    { img: "https://tse1.mm.bing.net/th/id/OIP.Dlu7Kl-oMBJxSX_jujJKVQHaGk?pid=Api&P=0&h=180", name: "TV 20 incesh sony", price: "45000", instock: true },
    { img: "https://tse3.mm.bing.net/th/id/OIP.YlbsPlV-xnurLHotbO9c6AHaEu?pid=Api&P=0&h=180", name: "Sony TV Google", price: "45000", instock: false }
]

function rendor(list) {
    let productContainer = document.getElementById("ProductContainer");
    productContainer.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let product = list[i];
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
        
    `;
        productContainer.appendChild(card);
    }
}
rendor(products)

//filiter
function applyfiliter() {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        let input = document.getElementById('search_name').value.toLowerCase();

        let filiter = products.filter(product => product.name.toLowerCase().includes(input))
        rendor(filiter)
    })

}
applyfiliter()

//add to cart
let cart = [];
let cart1 = document.getElementById('cart');
let msg = document.getElementById('message');
let cartbtn = document.getElementById('cart_btn');

function addToCart(index) {
    let product = products[index];
    // console.log(index);
    //let exists = cart.includes(item => item.name === product.name);
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

cartbtn.addEventListener('click', () => {
    if (cart.length === 0) {
        cart1.innerText = "Your cart is empty!";
        alert('Your cart is Empty!');
        return;
    }
    cart1.innerHTML = "";
    // let uniele = cart.filter((user, index, self) =>
    //     index === self.findIndex(u => u.name === user.name));
    cart.forEach((item, idx) => {
    let cart_card = document.createElement("div");
    cart_card.className = `w-full h-full border bg-gray flex space-x-2 p-2 m-2`;
    cart_card.innerHTML = `
        <p>${idx + 1}.</p>
        <img src="${item.img}" alt="${item.name}" class="w-8 h-8 rounded-lg border-blue-500">
        <p class="text-black font-semibold">${item.name}</p>
        <p class="text-black font-semibold">₹${item.price}</p>
        <div class="w-[100px] h-[40px] flex bg-gray-300 border rounded-sm space-x-2">
          <button class="add w-5 h-5 bg-white rounded-xl m-auto">+</button>
          <h1 class="value m-auto">0</h1>
          <button class="sub w-5 h-5 bg-white rounded-xl m-auto">-</button>
        </div>
    `;

    // append card first
    cart1.appendChild(cart_card);

    // now add event listeners for THIS card only
    let valueElement = cart_card.querySelector(".value");
    let addBtn = cart_card.querySelector(".add");
    let subBtn = cart_card.querySelector(".sub");

    let count = 0;

    addBtn.addEventListener("click", () => {
        count++;
        valueElement.innerText = count;
    });

    subBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            valueElement.innerText = count;
        }
    });
});

});
//items increasing in cart
// let c = 0;
// let productValue = document.querySelector('.value');
// let add = document.querySelector('.add');
// let sub = document.querySelector('.sub');

// add.addEventListener('click', () => {
//     c++;
//     productValue.innerText = c;
// })
// sub.addEventListener('click', () => {
//     c--;
//     productValue.innerText = c;
// })

// function increase() {
//     c++;
//     console.log(c);
//     productValue.innerText = c;
// }
// function decrease() {
//     if (c > 0) {
//         c--;
//         productValue.innerText = c;
//     }
// }

// let valueElement = document.querySelector(".value");
// let addBtn = document.querySelector(".add");
// let subBtn = document.querySelector(".sub");

// let count = 0; // start with 0

// addBtn.addEventListener("click", () => {
//     count++;
//     valueElement.innerText = count;
// });

// subBtn.addEventListener("click", () => {
//     if (count > 0) {
//         count--;
//         valueElement.innerText = count;
//     }
// });

