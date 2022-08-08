console.log("this is a checkout section");


// here we are not using any event listner because we want to show the data as soon as the user enters this page
// we are fetching the items from local storage and parsing it .
let itemsfromlocalstorage = JSON.parse(localStorage.getItem("Items"));


let itemstable = document.getElementById("itemstable");
let subtotalofitem = 0;

// order will be shown only if localstorage containes or else it won't show anything
if (itemsfromlocalstorage != null) {
  // here we are iterating the itemsfromlocalstorage which is in array form
  for (let i = 0; i < itemsfromlocalstorage.length; i++) {
    // we are storing the value of item after multiplying it will no of items with price in peritemvalue
    // we used parseInt because we can't multiply strings so we are converting it into a number 
    let peritemvalue = parseInt(itemsfromlocalstorage[i]["price"]) * parseInt(itemsfromlocalstorage[i]["itemNo"]);

    let value = parseInt(itemsfromlocalstorage[i]["itemNo"]);

    let html = `  <tr>
                <td>
                  <div class="cart-info">
                    <img src="${itemsfromlocalstorage[i]["image"]}" alt="">
                    <div>
                      <p>${itemsfromlocalstorage[i]["burger"]}</p>
                      <small>price: ${itemsfromlocalstorage[i]["price"]}</small>
                      <br>
                      <a href="" class='removebtn' id='${i}' onclick="removeitem(this.id)" >remove</a>
                    </div>
                  </div>
                </td>
                  <td>${value}</td>
                  <td>${peritemvalue}</td>
              </tr>`;
    
    // adding the html to table every time a loop runs
    itemstable.innerHTML += html;

    subtotalofitem = subtotalofitem + peritemvalue;

    // total after adding the tax
    let total = subtotalofitem + 35;

    let subtotal = document.getElementById("subtotal");
    let grandtotal = document.getElementById("grandtotal");

    subtotal.innerHTML = subtotalofitem;
    grandtotal.innerHTML = total;
  }
}

// function for removing the item from table
function removeitem(id) {
  // fetching the data from localstorage
  let arr = JSON.parse(localStorage.getItem("Items"));

  // we are splicing the arr . with id we are gonna get exact place of the item in localstorage and from there we are gonna remove 1 item 
  arr.splice(id, 1);

  // again after removing the item we are freshly setting the localstorage 
  localStorage.setItem("Items", JSON.stringify(arr));
}






// ----------------------customize section--------------------
// this is for items from customize section 
let customize = localStorage.getItem("customizeItems");
let customizeItems
if(customize == null ){
  customizeItems = []
}
else if ( customize != null) {
   customizeItems = JSON.parse(customize)
  let sTotal = 0;
  for (let i = 0; i < customizeItems.length; i++) {
    let customizeTable = document.getElementById("customizeTable");

    let value =
      parseInt(customizeItems[i]["numberOfItem"]) *
      parseInt(customizeItems[i]["priceOfItem"]);

    let html2 = `<tr>
                    <td>
                      <div class="cart-info">
                        <img src="${customizeItems[i]["imageOfItem"]}" alt="">
                        <div>
                          <p>${customizeItems[i]["nameOfItem"]}</p>
                          <small>size: ${customizeItems[i]["sizeOfItem"]}</small>
                          <small>price: ${customizeItems[i]["priceOfItem"]}</small>
                          <br>
                          <a href="" class='removebtn' id='${i}' onclick="removeCustomizeItem(this.id)" >remove</a>
                        </div>
                      </div>
                    </td>
                    <td>${customizeItems[i]["numberOfItem"]}</td>
                    <td>${value}</td>
                  </tr>`;

    customizeTable.innerHTML += html2;

    let Csubtotal = document.getElementById("C-subtotal");
    let Cgrandtotal = document.getElementById("C-grandtotal");

    sTotal += value;

    Csubtotal.innerHTML = sTotal;
    Cgrandtotal.innerHTML = sTotal + 45;
  }
}

function removeCustomizeItem(id) {
  let arr = JSON.parse(localStorage.getItem("customizeItems"));

  arr.splice(id, 1);

  localStorage.setItem("customizeItems", JSON.stringify(arr));
}
