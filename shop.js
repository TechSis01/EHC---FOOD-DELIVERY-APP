const foodName = document.querySelector('#header')
const hamburger = document.querySelector('.hamburger')
    const foodOptionsContainer = document.querySelector('.product-option-container')
    //FETCH Burger DATA FROM FOOD API
    const displayProductContainer = document.querySelector('.display-products-container')
    //AUTOMATICALLY LOAD BURGER IMAGES WHEN PAGE IS OPENED
    document.addEventListener('DOMContentLoaded',getBurgerItems)
    document.addEventListener('DOMContentLoaded',displayBurgerItems)
    let burgerList;
    async function getBurgerItems(){
        try{
            const response = await axios.get('https://ig-food-menus.herokuapp.com/burgers')
            burgerList= response.data
          
        }
        catch(error){
            console.log(error,'data could not be fetched')
        }
        foodName.innerHTML = 'Burger'
       
    }
    

//Display burger images on the page
    function displayBurgerItems(){
       let burgerData = burgerList
      
        let result = burgerData.filter((filteredBurger)=>{
            return filteredBurger.price > 50 && filteredBurger.price <70
        })
        displayProductContainer.innerHTML = ''

     result.map((res)=>{
        displayProductContainer.innerHTML += `
        <div class="food-products">
        <img src="${res.img}" onerror= "this.onerror = null; this.src = './Images/F-sandwich.jpg';" class="product-image">
      
        <p>${res.name}</p>
        <p>$${res.price}</p>
        <div class="price-container">
        <button id="cart-btn">Add to Cart</button>
    </div>
    </div>
   
        `
     })
     foodName.innerHTML = 'Burger'

    }

setTimeout(displayBurgerItems,1000)
const burgerButton = document.querySelector('.burger')
burgerButton.addEventListener('click',()=>{
    displayBurgerItems()
    foodOptionsContainer.classList.toggle('burger-active')

})
// //Hovering on the images to change the opacity
//     displayProductContainer.addEventListener('mouseover',(e)=>{
//         let target = e.target
//         if(target.classList.contains("price-container")){
//             target.classList.add('price-container-active')
//         }
        
//     })
//     displayProductContainer.addEventListener('mouseout',(e)=>{
//         let target = e.target
//         if(target.classList.contains("price-container")){
//             target.classList.remove('price-container-active')
//         }
//     })

    //FETCH PIZZA DATA FROM API
    let pizzaList;
    async function getPizzaItems(){
        try{
            const response = await axios.get('https://ig-food-menus.herokuapp.com/pizzas')
            pizzaList= response.data
          
        }
        catch(error){
            console.log(error,'data could not be fetched')
        } 
    }
    getPizzaItems()
    //SELECT PIZZA BUTTON
    const pizzaButton = document.querySelector('.pizza')
    function displayPizzaItems(){
        let pizzaData = pizzaList.sort()
      
        let result = pizzaData.filter((filteredPizza)=>{
            return filteredPizza.price > 80 && filteredPizza.price <90
        })
        displayProductContainer.innerHTML = ''
     result.map((res)=>{
        displayProductContainer.innerHTML += `
        <div class="food-products">
        <img src="${res.img}"  onerror= "this.onerror = null; this.src = './Images/coffee1.png';"class="product-image">
       
            <p class="food-name">${res.name}</p>
            <p id="food-price">$${res.price}</p>
            <div class="price-container">
            <button >Add to Cart</button>
        </div>
    </div>
        `
     })
     foodName.innerHTML = 'Pizza'
    }
  

    pizzaButton.addEventListener('click',()=>{
        displayPizzaItems()
        foodOptionsContainer.classList.toggle('burger-active')

    })
    
    //SELECT DRINKS BUTTON
const drinkButton = document.querySelector('.drink')
let drinkList;

//FETCH DRINKS FROM API
    async function getDrinkItems(){
        try{
            const response = await axios.get('https://ig-food-menus.herokuapp.com/drinks')
            drinkList= response.data
           
        }
        catch(error){
            console.log(error,'data could not be fetched')
        } 
    }
getDrinkItems()
   //DISPLAY DRINKS
    function displayDrinkItems(){
        let drinkData = drinkList.sort()
      
        let result = drinkData.filter((filteredDrink)=>{
            return filteredDrink.price > 65 && filteredDrink.price <100
        })
        displayProductContainer.innerHTML = ''
     result.map((res)=>{
        displayProductContainer.innerHTML += `
        <div class="food-products">
        <img src="${res.img}" class="product-image">
       
            <p>${res.name}</p>
            <p>$${res.price}</p> 
           
            <div class="price-container">
            <button>Add to Cart</button>
        </div>
    </div>
        `
     })
     foodName.innerHTML = 'Drinks'
    }

    drinkButton.addEventListener('click',()=>{
        displayDrinkItems()
        foodOptionsContainer.classList.toggle('burger-active')

    })


    //FETCH SANDWICH FROM API
let sandWichList;
const sandWichBtn = document.querySelector('.sandwich')
    async function getSandwichItems(){
        try{
            const response = await axios.get('https://ig-food-menus.herokuapp.com/sandwiches')
            sandWichList= response.data
            console.log(sandWichList)
        }
        catch(error){
            console.log(error,'data could not be fetched')
        } 
    }
    getSandwichItems()
   //DISPLAY DRINKS
    function displaySandWichItems(){
        let sandWichData = sandWichList.sort()
        let result = sandWichData.filter((filteredSandWich)=>{
            return filteredSandWich.price > 70 && filteredSandWich.price <90
        })
        displayProductContainer.innerHTML = ''
     result.map((res)=>{
        displayProductContainer.innerHTML += `
        <div class="food-products">
        <img src="${res.img}" onerror= "this.onerror = null; this.src = './Images/F-sandwich.jpg';"class="product-image">
    
            <p>${res.name}</p>
            <p>$${res.price}</p>
            <div class="price-container">
            <button>Add to Cart</button>
        </div>
    </div>
        `
     })
     foodName.innerHTML = 'Sandwiches'
    }

    sandWichBtn.addEventListener('click',()=>{
        displaySandWichItems()
        foodOptionsContainer.classList.toggle('burger-active')

    })


      //FETCH FRIED CHICKEN FROM API
let chickenList;
const chickenBtn = document.querySelector('.chicken')
    async function getChickenItems(){
        try{
            const response = await axios.get('https://ig-food-menus.herokuapp.com/fried-chicken')
            chickenList= response.data
            console.log(chickenList)
        }
        catch(error){
            console.log(error,'data could not be fetched')
        } 
    }
    getChickenItems()
   //DISPLAY DRINKS
    function displayChickenItems(){
        let chickenData = chickenList.sort()
        let result = chickenData.filter((filteredChicken)=>{
            return filteredChicken.price > 70 && filteredChicken.price <99
        })
        displayProductContainer.innerHTML = ''
     result.map((res)=>{
      
        displayProductContainer.innerHTML += `
        <div class="food-products">
        <img src="${res.img}" onerror= "this.onerror = null; this.src = './Images/chicken-loli.png';"alt = "fried-chicken"class="product-image">
       
            <p>${res.name}</p>
            <p>$${res.price}</p>
            <div class="price-container">
            <button>Add to Cart</button>
        </div>
    </div>
        `
     })
     foodName.innerHTML = 'Fried Chicken'
    }

    chickenBtn .addEventListener('click',()=>{
        displayChickenItems()
        foodOptionsContainer.classList.toggle('burger-active')

    })


    // async function Items(){
    //     try{
    //         const response = await axios.get('https://restcountries.com/v3.1/region/{region}')
    //         result= response.data
    //         console.log(result)
    //     }
    //     catch(error){
    //         console.log(error,'data could not be fetched')
    //     } 
    // }
    // Items()


    
    hamburger.addEventListener('click',()=>{
        // hamburger.innerHTML = 'X'
       foodOptionsContainer.classList.toggle('burger-active')
    })
    // hamburger.addEventListener('mousedown',()=>{
    //     hamburger.innerHTML = 'X'
    // })
    // hamburger.addEventListener('mousedown',()=>{
    //     hamburger.innerHTML = ` <div class="line"></div>
    //      <div class="line"></div>
    //     <div class="line"></div>`
    // })
