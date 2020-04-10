//pizza list logic/////////////////////////////////////////////////////
function OrderList() {
  this.pizzas = [];
  this.currentId = 0;
}
OrderList.prototype.addOrder = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}
OrderList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}
OrderList.prototype.findOrder = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i].id == id) {
      return this.pizzas[i];
    }
  };
  return false;
}

//pizza logic//////////////////////////////////////////////////////////
function Pizza(name, topping, size) {
  this.name = name;
  this.topping = topping;
  this.size = size; //new Size
}
// new Pizza("tomato", "small") X
// new Pizza("tomato", Size)
Pizza.prototype.price = function () {
  var regularPrice = 10;
  return regularPrice + +this.topping.toppingPrice() + this.size.sizePrice();
}

//topping logic/////////////////////////////////////////////////////////
function Topping(name) {
  this.name = name;
}
Topping.prototype.toppingPrice = function () {
  if (this.name == "cheese") {
    return 0.50;
  } else if (this.name == "pepperoni") {
    return 1.00;
  } else if (this.name == "tomato") {
    return 0.50;
  } else if (this.name == "none") {
    return 0.00;
  }
}

//size logic/////////////////////////////////////////////////////////
function Size(name) {
  this.name = name;
}
Size.prototype.sizePrice = function () {
  if (this.name == "small") {
    return 0;
  } else if (this.name == "medium") {
    return 1.00;
  } else if (this.name == "large") {
    return 2.00;
  }
}

//payment info logic/////////////////////////////////////////////////////////
function UserInfo(fullName, street, city, state, zip){
  this.fullName = fullName;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

//UI logic/////////////////////////////////////////////////////////

function displayList(orderListDisplay) {
  var showList = $("#show-order-list");
  var htmlForOrderInfo = "";
  orderListDisplay.pizzas.forEach(function (pizza) {
    htmlForOrderInfo += "<li id=" + pizza.id + ">" + pizza.name + "</li>";
  });
  showList.html(htmlForOrderInfo);
}
function showPizza(pizzaId) {
  var pizza = orderList.findOrder(pizzaId);
  console.log(pizza.size.name)
  $(".show-summary").show();
  $("#size-of-pizza").html(pizza.size.name);
  $("#topping-of-pizza").html(pizza.topping.name);
  var finalPrice = pizza.price(); //calculation no function
  $("#final-price").text("$" + finalPrice.toFixed(2) + ",");

}

function attachPizzaListeners() {
  $("#show-order-list").on("click", "li", function () {
    showPizza(this.id);
  })
};

var orderList = new OrderList();
$(document).ready(function () {
  attachPizzaListeners();
  $("#form").submit(function (event) {
    event.preventDefault();
    ///calculations
    var inputtedNameOfPizza = $("#name-of-your-pizza").val();
    var inputtedTopping = $("#topping").val();
    var inputtedSize = $("#size").val();
    var topping = new Topping(inputtedTopping)
    var size = new Size(inputtedSize);
    var pizza = new Pizza(inputtedNameOfPizza, topping, size);
    //adding orders
    orderList.addOrder(pizza);
    //show orders name of your pizza
    // show-list();
    $(".order-list").show();
    displayList(orderList);
    // $(".show-summary").show();
  });
  $("#payment-info").click(function () {
    $("#payment-input").show();
  });
  $("#payment-form").submit(function (event) {
    event.preventDefault();
    var inputtedUserName = $("#user-name").val();
    var inputtedUserStreet = $("#user-street").val();
    var inputtedUserCity = $("#user-city").val();
    var inputtedUserState = $("#user-state").val();
    var inputtedUserZip = $("#user-zip").val();
    var newUserInfo = new UserInfo(inputtedUserName, inputtedUserStreet, inputtedUserCity, inputtedUserState, inputtedUserZip);
    console.log(newUserInfo);
  })
})