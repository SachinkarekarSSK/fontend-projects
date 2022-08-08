// this log for testing purpose 
console.log(`WELCOME TO D-BURGER'S`);

//--------------------- for menu button---------------

let menubtn = document.getElementById('menubtn')
let menuitems = document.getElementById('menu-items')

// adding an eventlistner when menu button is clicked
menubtn.addEventListener('click', function () {

    // at default the menu section will be visible. when clicked on button menu display will be block so it will execute the else part . 

    if (menuitems.style.display == 'none') {
        menuitems.style.display = 'block'
    }
     else {
        
        menuitems.style.display = 'none'
    }
})

//--------------------- for menu button---------------



// -------------------- item added to cart


// fetched all the buttons with its class 
let addtocartBTN = document.querySelectorAll('.addtocartBTN')

// because we are fetching it from a class we will recive an array of buttons . we will have to iterate it
for(let i=0; i<addtocartBTN.length; i++){
    
    // now we are adding eventlistner for every button .
    addtocartBTN[i].addEventListener('click', function(event){
        // this event will help us to navigate which button has been clicked and we can fetch the data of that card or item 

        // we are fetching the data from the localstorage because if user has already added some items to cart. 
        let itemsfromlocalstorage = localStorage.getItem('Items')
        
        // this is the data of that card where the button has been clicked 
        let imageLink = event.target.parentElement.children[0].src
        let burgerName = event.target.parentElement.children[1].innerText
        let burgerprice = event.target.parentElement.children[3].innerText
        let itemNumber = event.target.parentElement.children[4].value

        // this is html which will be added to a message section to show which item has been added to card
        let innermessage = `
                            <h4>${burgerName} has been added to a cart :)</h4>
                        `
        
        // we are fetching message section with class
        let message = document.querySelectorAll('.message')
        // we have only 1 message section so we can directly hard code the value . no need of for loop
        message[0].innerHTML = innermessage

        // when button is clicked this class will be added in the message section
        message[0].classList.add('messagefadein')
        
        // timeout has been applied because after few seconds it should get disappeared
        setTimeout(function(){
            message[0].classList.remove('messagefadein')
        },3000)

        // we are declaring the arr because we can use it everywhere in this function 
        let arr 


        if (itemsfromlocalstorage == null) {
            arr = []
            
        }else{
            arr = JSON.parse(itemsfromlocalstorage)
        }
            
        // creating an object with all the data
        let obj = {
            image : imageLink,
            burger : burgerName,
            price : burgerprice,
            itemNo : itemNumber
            
        }
        
        // pushing the object in an array | json format
        arr.push(obj)
            
        // we are converting the array into string and then we are storing it in a localstorage 
        localStorage.setItem('Items', JSON.stringify(arr))
            

        // now we have successfully stored the data into localstorage. we can access the localstorage from other page . 
        // important : we cannot access the localstorage on other page by clicking on this page 

    })
}








