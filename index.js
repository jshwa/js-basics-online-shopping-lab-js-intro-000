var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {[item]: Math.floor((Math.random() * 100) + 1)}
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length) {
    console.log(`Your shopping cart is empty.`)
  } else if (cart.length === 1) {
    let itemName = Object.keys(getCart()[0])[0];
    let itemPrice = getCart()[0][itemName];
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`)
  } else if (cart.length === 2) {
    let itemName = Object.keys(getCart()[0])[0];
    let itemPrice = getCart()[0][itemName];
    let item2Name = Object.keys(getCart()[1])[0];
    let item2Price = getCart()[1][item2Name];
    console.log(`In your cart, you have ${itemName} at $${itemPrice} and ${item2Name} at $${item2Price}.`)
  } else {
    const totalCart = []
    for (var i = 0; i < cart.length - 1; i++) {
      let itemName = Object.keys(getCart()[i])[0];
      let itemPrice = getCart()[i][itemName];
      totalCart.push(`${itemName} at $${itemPrice}`)
    }
    let lastItem = Object.keys(getCart()[cart.length - 1])[0];
    let lastPrice = getCart()[cart.length - 1][lastItem];
    console.log(`In your cart, you have ${totalCart.join(', ')}, and ${lastItem} at $${lastPrice}.`)
  }

}

function total() {
  var totalCart = 0
  for (var i = 0; i < cart.length; i++) {
    let itemName = Object.keys(getCart()[i])[0];
    let itemPrice = getCart()[i][itemName];
    totalCart += parseInt(itemPrice)
  }
  return totalCart
}

function removeFromCart(item) {
  var i = 0
  var remove = false

    if (!remove) {
      console.log(`That item is not in your cart.`)
    }
}

function placeOrder(cardNumber) {
  // write your code here
}
