const Allproduct =()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=> res.json())
    .then((data)=>cardData(data));
}



const cardData =(datas)=>{

    const trendingCard = document.getElementById("trendingCards")
     
    const limitedData = datas.slice(0, 3);

    for( data of limitedData ){

       
        // console.log(datas);
        const cards = document.createElement("div");
        cards.innerHTML = 
        
       ` 
         <div class="card bg-base-100 w-76 shadow-sm">
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
            
            
            <div>
              <div>
              
              
         <button class="btn" onclick="loadModelDetail(${data.id})">open modal</button>

            
              </div>
              <button class="btn btn-primary">Add</button>
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
  <p>${data.title}</p>
  <p>${data.description}</p>
  <div>
  <p>${data.price}</p>
  <p>${data.rating.rate}</p>
  </div>
  <div>
  <button></button>
  <button></button>
  </div>
  `
  console.log(detailsBox);
  document.getElementById('my_modal_5').showModal();
}






Allproduct();