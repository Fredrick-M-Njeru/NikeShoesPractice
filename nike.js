document.addEventListener("DOMContentLoaded", () => {
    const shoppingDiv = document.querySelector(".shoppingDiv");
    const quantity = document.querySelector(".quantity");
    const cartList = document.querySelector(".listCart");
    const total = document.querySelector(".total");
    const closed = document.querySelector(".closedCart");
    const productItem = document.querySelector(".productItem");
    const body = document.querySelector("body");
 
    let totalAmount = 0;
    let totalQuantity = 0;
    let cartproductID = [];
 
    shoppingDiv.addEventListener("click", () => {
       body.classList.add("active");
    });
 
    closed.addEventListener("click", () => {
       body.classList.remove("active");
    });
 
    let products = [
        {
           id: 1,
           name: "Trainers",
           image: "img7.jpg",
           price: 2000,
        },
        {
           id: 2,
           name: "Airforce",
           image: "img1.jpg",
           price: 22000,
        },
        {
           id: 3,
           name: "Jordans Ones",
           image: "img6.jpg",
           price: 3000,
        },
        {
           id: 4,
           name: "Supras",
           image: "img2.jpg",
           price: 2000,
        },
        {
           id: 5,
           name: "Red Mist",
           image: "img8.jpg",
           price: 1400,
        },
     ];
 
    // Display products in the shop
    const displayProduct = () => {
       products.forEach((product) => {
          let newDiv = document.createElement("div");
          newDiv.className = "item";
          newDiv.innerHTML = `
             <img src="./images/${product.image}" alt="${product.name}">
             <div class="title">${product.name}</div>
             <div class="price">$${product.price}</div>
             <button class="AddCart">Add to Cart</button>   
          `;
          productItem.appendChild(newDiv);
 
          newDiv.querySelector(".AddCart").addEventListener("click", () => {
             addToCart(product);
          });
       });
    };
 
    // Add product to the cart
    const addToCart = (product) => {
       if (cartproductID.includes(product.id)) {
          alert("Product already exists in the cart");
          return;
       }
       cartproductID.push(product.id);
       totalQuantity++;
       quantity.textContent = totalQuantity;
 
       totalAmount += product.price;
       total.textContent = `Total: $${totalAmount}`;
 
       let cartItem = document.createElement("li");
       cartItem.classList.add("purchaseInterest");
       cartItem.innerHTML = `
          <img src="./images/${product.image}" alt="${product.name}" style="width: 50px; height: 50px;">
          <span>${product.name}</span>
          <span>Price: $${product.price}</span>
          <span class="add"> + </span>
          <span class="itemQuantity">1</span>
          <span class="minus"> - </span>
       `;
       cartList.appendChild(cartItem);
 
       cartItem.querySelector(".add").addEventListener("click", () => {
          update(product, 1, cartItem);
       });
 
       cartItem.querySelector(".minus").addEventListener("click", () => {
          update(product, -1, cartItem);
       });
    };
 
    // Update product quantity and total
    const update = (product, change, cartItem) => {
       const itemQuantity = cartItem.querySelector(".itemQuantity");
       let quantityValue = parseInt(itemQuantity.textContent);
 
       if (change === 1) {
          quantityValue++;
          totalQuantity++;
          totalAmount += product.price;
       } else if (change === -1) {
          if (quantityValue > 1) {
             quantityValue--;
             totalQuantity--;
             totalAmount -= product.price;
          } else {
             // Remove product if quantity reaches 0
             cartList.removeChild(cartItem);
             cartproductID = cartproductID.filter((id) => id !== product.id);
             totalQuantity--;
             totalAmount -= product.price;
          }
       }
 
       itemQuantity.textContent = quantityValue;
       quantity.textContent = totalQuantity;
       total.textContent = `Total: $${totalAmount}`;
    };
 
    displayProduct();
 });
 