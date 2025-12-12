/*
API:apllication programming interface,which allow the software to commicates with each other
api have the set of rules and instructions and provides services

fetch():
The fetch() function is a built-in JavaScript method used to request data 
from a server and return a Promise that resolves to the Response object representing 
the result of that request.


*/
const fetchData = 'https://dummyjson.com/products/category/smartphones';

    fetch(fetchData)
      .then(res => res.json())
      .then(data => {
        const products = document.getElementById('products');
        const detailsModal = document.getElementById('product-details');
        const detailsContent = document.getElementById('details-content');
        const closeBtn = document.getElementById('closeDetails');

        // ✅ Create product cards
        products.innerHTML = data.products.map((product, index) => {
          return `
            <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
              <img src="${product.thumbnail}" alt="${product.title}" class="w-48 h-48 object-cover rounded-lg mb-3">
              <h3 class="text-lg font-semibold text-gray-800 mb-1">${product.title}</h3>
              <p class="text-gray-500 text-sm mb-2">${product.category}</p>
              <p class="text-green-600 font-bold text-lg mb-3">$${product.price}</p>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300" onclick="showDetails(${index})">
                View Details
              </button>
            </div>
          `;
        }).join('');

        // ✅ Function to show product details
        window.showDetails = (index) => {
          const p = data.products[index];
          detailsContent.innerHTML = `
            <div class="flex flex-col md:flex-row items-center gap-6">
              <img src="${p.thumbnail}" alt="${p.title}" class="w-64 h-64 object-cover rounded-lg shadow-md">
              <div class="text-gray-800">
                <h2 class="text-2xl font-bold mb-2">${p.title}</h2>
                <p class="text-gray-500 mb-2 capitalize">${p.category}</p>
                <p class="text-green-600 font-bold text-xl mb-3">$${p.price}</p>
                <p class="mb-2"><b>Discount:</b> ${p.discountPercentage}% off</p>
                <p class="mb-2"><b>Rating:</b> ⭐ ${p.rating}</p>
                <p class="mb-4 text-sm text-gray-700">${p.description}</p>
                
                <!-- Extra Images -->
                <div class="flex flex-wrap gap-2 mt-3">
                  ${p.images.map(img => `
                    <img src="${img}" class="w-20 h-20 object-cover rounded-lg border hover:scale-105 transition-transform duration-300">
                  `).join('')}
                </div>
              </div>
            </div>
          `;
          detailsModal.classList.remove('hidden');
        };

        // ✅ Close modal
        closeBtn.addEventListener('click', () => {
          detailsModal.classList.add('hidden');
        });
      })
      .catch(error => console.log('Error:', error));

// function moreDetails(){

// }