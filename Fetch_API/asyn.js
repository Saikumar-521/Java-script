
let data = []; 

 async function products() {
   let fetchData = "https://dummyjson.com/products/category/smartphones";
   let pr = await fetch(fetchData);
   let res = await pr.json();
   data = res.products;  
   let product = document.getElementById('products');
   product.innerHTML = data.map((items, index) => {
     return `
       <div class="cards">
         <img src="${items.thumbnail}" alt="${items.title}" class="img">
         <p class="price"><b>Price:</b> $${items.price}</p>
         <a href="product.html" target="_parent" class="viewbtn" onclick="saveDetails(${index})">View More</a>
       </div>
     `;
   }).join('');
 }
products();

function saveDetails(index) {
  localStorage.setItem("selectedProduct", JSON.stringify(data[index]));
}


window.onload = function() {
  let product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (product) {
    showProductDetails(product);
  }
};

function showProductDetails(p) {
  let viewmore = document.getElementById('viewmore');
  if (!viewmore) return;
  viewmore.innerHTML = `
   <div class="container my-5 p-4 bg-primary text-white rounded shadow">
    <div class="row align-items-center">
      
      <!-- Left Section -->
      <div class="col-md-6 text-center mb-4 mb-md-0">
        <img src="${p.thumbnail}" alt="${p.title}" class="img-fluid rounded mb-3" style="max-width: 250px;">
        <h2 class="fw-bold">${p.title}</h2>
        <p class="text-light fs-5">${p.category}</p>
      </div>

      <!-- Right Section -->
      <div class="col-md-6">
        <p><strong>Price:</strong> $${p.price}</p>
        <p><strong>Discount:</strong> ${p.discountPercentage}% off</p>
        <p><strong>Rating:</strong> ⭐ ${p.rating}</p>
        <p class="mb-3">${p.description}</p>

        <!-- Product Images -->
        <div class="d-flex flex-wrap gap-2 border rounded-xl bg-primary">
          ${p.images.map(img => `
            <img src="${img}" class="img-thumbnail" style="width: 100px; height: 100px; object-fit: cover;">
          `).join('')}
        </div>
      </div>

    </div>
  </div>

  `;
}

//let viewmore=document.getElementById('viewmore')
//viewmore.addEventListener('click',showDetails)
