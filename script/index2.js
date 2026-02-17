

const loadProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  displayProducts(data);
};

const displayProducts = (products) => {
  const allCards = document.getElementById("allCards");
  allCards.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList = "card bg-base-100 shadow-xl p-4";

    div.innerHTML = 
   ` 
         <div class="card bg-base-100 w-76 h-[500px] sm:mb-10 shadow-sm">
          <figure>
            <img class='w-[350px] h-60 p-3 bg-cover bg-slate-200'
              src="${product.image}"
              alt="Shoes"
            />
            
          </figure>
          <div class="flex  gap-10 w-64 mt-2 m-auto">
          <p class=' rounded-2xl p-1 bg-purple-300'>${product.category}</p>
          <div class="flex gap-1 ">
          <p  > <i class="fa-solid fa-star"></i>${product.rating.rate}</p>
          <p>(${product.rating.count})</p>
          </div>
          </div>

          <div>
          <p class="font-bold ml-10  mt-3"><i class="fa-solid fa-dollar-sign"></i>${product.price}</p>
          </div>
          <div class="card-body">
          <h2 class="card-title  line-clamp-1">Card Title ${product.title}</h2>
            
            
            <div class='flex gap-10 mt-5 '>
              <div>
              
              
         <button class="btn" onclick="loadModelDetail(${product.id})"><i class="fa-regular fa-eye"></i>Details</button>

            
              </div>
              <button class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i>Add</button>
            </div>
          </div>
        </div>
       `
    ;

    allCards.appendChild(div);
  });
};
const loadCategory = async (category) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const filtered = data.filter(
    (product) => product.category === category
  );

  displayProducts(filtered);
};

document.getElementById("all").addEventListener("click", () => {
  loadProducts();
});

document.getElementById("men").addEventListener("click", () => {
  loadCategory("men's clothing");
});

document.getElementById("jewelery").addEventListener("click", () => {
  loadCategory("jewelery");
});

document.getElementById("electronics").addEventListener("click", () => {
  loadCategory("electronics");
});

document.getElementById("women").addEventListener("click", () => {
  loadCategory("women's clothing");
});



const loadModelDetail =async(id)=>{

  const url=`https://fakestoreapi.com/products/${id}`;
  const res= await fetch(url)
  const details = await res.json();
  displayModelDetails(details);
}
const displayModelDetails =(data)=>{
 
  const detailsBox = document.getElementById('model_container')
  console.log(detailsBox);
  detailsBox.innerHTML= `
  <p class='m-10 font-bold'>${data.title}</p>
  <p class='m-10'>${data.description}</p>
  <div class='flex ml-10  m-auto gap-20 '>
  <p class='border   rounded w-auto p-1   font-bold'><i class="fa-solid fa-dollar-sign"></i>${data.price}</p>
  <p class=' '> <i class="fa-solid fa-star"></i>${data.rating.rate}</p>
  </div>
  <div class=' '>
  <button class='btn m-10'><i class="fa-solid fa-bag-shopping"></i>Buy Now</button>
  <button class='btn m-10'><i class="fa-solid fa-cart-arrow-down"></i> Add To Cart</button>
  </div>
  `
//   console.log(detailsBox);
  document.getElementById('my_modal_5').showModal();
}



loadProducts()


// Allproduct();
// AllCatagories();