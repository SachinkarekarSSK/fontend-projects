console.log("this is a customize section");

let singleProduct = document.querySelectorAll(".addtocart");
let arr = [];
for (let i = 0; i < singleProduct.length; i++) {
  singleProduct[i].addEventListener("click", function (event) {
    event.preventDefault();
    // fetching the data of the item 
    let itemImage =event.target.parentElement.parentElement.children[0].children[0].src;
    let itemName = event.target.parentElement.children[0].innerText;
    let noOfItem = event.target.parentElement.children[3].value;
    let itemPrice = event.target.parentElement.children[1].innerText;
    let itemSize = event.target.parentElement.children[2].selectedIndex;

    // assingning the value to a size variable
    let size;
    
    if (itemSize == 0) {
      size = "select size";
    } else if (itemSize == 1) {
      size = "Large";
    } else if (itemSize == 2) {
      size = "medium";
    } else if (itemSize == 3) {
      size = "small";
    }

    let message = document.querySelectorAll(".message");

    // if size is not select size means user has selected the size 
    if (size != "select size") {
      let innermessage = `<h4><b>${itemName}</b> has been added to a cart :)</h4>`;
      message[0].innerHTML = innermessage;
      message[0].classList.add("messagefadein");

      setTimeout(function () {
        message[0].classList.remove("messagefadein");
      }, 3000);

      let obj = {
        nameOfItem: itemName,
        imageOfItem: itemImage,
        priceOfItem: itemPrice,
        sizeOfItem: size,
        numberOfItem: noOfItem,
      };
      let item = localStorage.getItem("customizeItems");
      if (item == null) {
        arr = [];
      } else {
        arr = JSON.parse(item);
      }
      arr.push(obj);

      localStorage.setItem("customizeItems", JSON.stringify(arr));

    }   //if user has not selected the size then it will show the message in red colour 
    else {
      
      let innermessage = `<h4><b> size </b> has not been selected ! :)</h4>`;
      message[0].innerHTML = innermessage;
      message[0].style.background = "#f5c2c7";
      message[0].classList.add("messagefadein");

      setTimeout(function () {
        message[0].style.background = "";
        message[0].classList.remove("messagefadein");
      }, 3000);
      console.log("sorry pls select the size");
    }
  });
}
