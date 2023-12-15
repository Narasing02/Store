const productsContainer = document.querySelector(".productContainer");

let list1 = [];
const products = (img, title1, price1) => {
  const CartCount = document.querySelector(".CartCount");
  let productCard = document.createElement("div");
  productCard.classList.add("productCard");
  productsContainer.appendChild(productCard);
  let productImg = document.createElement("img");
  productImg.src = `${img}`;
  productImg.classList.add("card-img");
  productCard.appendChild(productImg);
  let title = document.createElement("h3");
  title.textContent = title1;
  title.classList.add("title");
  productCard.appendChild(title);
  let price = document.createElement("p");
  price.textContent = ` $ ${price1}`;
  price.classList.add("price");
  productCard.appendChild(price);
  let buyContainer = document.createElement("div");
  buyContainer.classList.add("buyContainer");
  productCard.appendChild(buyContainer);
  let wishList = document.createElement("span");
  wishList.innerHTML = '<i class="far fa-heart"></i>';
  wishList.classList.add("wishList");
  buyContainer.appendChild(wishList);
  let addToCart = document.createElement("button");
  addToCart.classList.add("add-to-cart");
  addToCart.textContent = "Add To Cart";
  buyContainer.appendChild(addToCart);

  wishList.addEventListener("click", () => {
    if (wishList.innerHTML == '<i class="far fa-heart"></i>') {
      wishList.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      wishList.innerHTML = '<i class="far fa-heart"></i>';
    }
  });

  addToCart.addEventListener("click", () => {
    if (addToCart.textContent == "Add To Cart") {
      addToCart.textContent = "Carted";

      list1.push("added");
    } else {
      addToCart.textContent = "Add To Cart";
      list1.pop();
      // CartCount.textContent=list1.length
    }
    let lengthOfCart = list1.length;
    console.log(lengthOfCart);
    CartCount.textContent = list1.length;

    // if(count>0){
    //     console.log('added');

    //     console.log(count)
    // }
  });
};
// console.log(list1)
// CartCount.innerHTML=`${list1.length}`
let itemsCount = 8;

let ItemsList=[]

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
for (let i =0;i<itemsCount;i++){
    ItemsList.push(data[i])
    console.log(ItemsList)
}
    ItemsList.map((product) => {
      products(product.image, product.title, product.price);
    });

    // if(count==itemsCount){
    //     data.map((product)=>{
    //         products(product.image,product.title,product.price)
    //     })

    // }
  });

const loadMore = document.querySelector(".LoadMore");
loadMore.addEventListener("click", () => {
let lengthOfItems=6
itemsCount=itemsCount+lengthOfItems

 fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
for (let i =8;i<itemsCount;i++){
    ItemsList.push(data[i])
    console.log(ItemsList)
}
    ItemsList.map((product) => {
      products(product.image, product.title, product.price);
    });

    // if(count==itemsCount){
    //     data.map((product)=>{
    //         products(product.image,product.title,product.price)
    //     })

    // }
  });

});
