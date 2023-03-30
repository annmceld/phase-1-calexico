// Write your code here...
const baseUrl = 'http://localhost:3000/'
const menuUrl = baseUrl + 'menu/'
//Fetch all the menu items from http://localhost:3000/menu. 
function fetchMenuItems() {
    fetch(menuUrl)
    .then(res => res.json())
    .then(renderAllMenuItems)
}

fetchMenuItems()
//For each menu item create a span element that contains 
//the name of the menu item, and add it to the #menu-items div.

const dishImage = document.getElementById('dish-image')
const dishName = document.getElementById('dish-name')
const dishDescription = document.getElementById('dish-description')
const dishPrice = document.getElementById('dish-price')

function renderAllMenuItems(items) {
    items.forEach(renderMenuItem)
}

function renderMenuItem(item) {
    const menuItemsDiv = document.getElementById('menu-items')

    const menuSpan = document.createElement('span')
    menuSpan.textContent = item.name
    menuSpan.id = item.id 
    menuItemsDiv.appendChild(menuSpan)
    
// When the page loads, display the first menu item. 
// You should set the image, name, description, and price. 
// All the correct elements to set are located in the #dish section element.
    
    if (item.id === 1) {
        dishImage.src = item.image 
        dishName.textContent = item.name 
        dishDescription.textContent = item.description
        dishPrice.textContent = "$" + item.price
    }

    menuSpan.addEventListener('click', () => displayMenuItem(item))

}

// When the user clicks on the menu items on the left, 
// they should see all the details for that specific menu item.

function displayMenuItem(item) {
    //console.log(event.target)
    dishImage.src = item.image 
    dishName.textContent = item.name 
    dishDescription.textContent = item.description
    dishPrice.textContent = "$" + item.price
}

// The user should be able to add the menu items to their cart. 
// When the user presses the 'Add to Cart' button, 
// that number should be added to however many are currently in the cart.

const addToCartForm = document.getElementById('cart-form')
const AddToCartInput = document.getElementById('cart-amount')

addToCartForm.addEventListener('submit', () => updateNumberInCart())

function updateNumberInCart() {
    console.log('cart updated')
    event.preventDefault()
    const numberSpan = document.getElementById('number-in-cart')
    numberSpan.textContent = AddToCartInput.value 
    addToCartForm.reset()
}

