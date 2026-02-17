const Allproduct =()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=> res.json())
    .then((data)=>cardData(data));
}

const cardData =(datas)=>{

    const trendingCard = document.getElementById("allCards")
     
    console.log(datas);

    for( data of datas ){

       
        // console.log(datas);
        const cards = document.createElement("div");
        cards.innerHTML = 
        
       ` 
         <div class="card bg-base-100 w-76 h-[350px] shadow-sm">
          <figure>
            <img class='w-30 p-3 bg-slate-400'
              src="${data.image}"
              alt="Shoes"
            />
            
          </figure>
          <div class="flex gap-10">
          <p>${data.category}</p>
          <div class="flex gap-2 ">
          <p>${data.rating.rate}</p>
          <p>(${data.rating.count})</p>
          </div>
          </div>

          <div>
          <p><i class="fa-solid fa-dollar-sign"></i>${data.price}</p>
          </div>
          <div class="card-body">
          <h2 class="card-title  line-clamp-1">Card Title ${data.title}</h2>
            
            
            <div class='flex gap-10 mt-5 '>
              <div>
              
              
         <button class="btn" onclick="loadModelDetail(${data.id})"><i class="fa-regular fa-eye"></i>Details</button>

            
              </div>
              <button class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i>Add</button>
            </div>
          </div>
        </div>
       `
          console.log(data.image);
        
        trendingCard.append(cards)
       
    }
}


const loadModelDetail =async(id)=>{

  const url=`https://fakestoreapi.com/products/${id}`;
  const res= await fetch(url)
  const details = await res.json();
  displayModelDetails(details);
}
const displayModelDetails =(data)=>{
 
  const detailsBox = document.getElementById('model_container')
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
  console.log(detailsBox);
  document.getElementById('my_modal_5').showModal();
}



Allproduct();