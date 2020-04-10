//pizza list no logic/////////////////////////////////////////////////////
function OrderList (){
  this.orders = [];
  this.currentId = 0;
}
OrderList.prototype.addOrder = function(pizza){
  pizza.id = this.assignId();
  this.orders.push(pizza);
}
OrderList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

//pizza no logic//////////////////////////////////////////////////////////
function Pizza (name, topping, size) {
  this.name = name;
  this.topping = topping;
  this.size = size; //new Size
}
// new Pizza("tomato", "small") X
// new Pizza("tomato", Size)
Pizza.prototype.price =function(){
  var regularPrice = 10;
  return regularPrice + +this.topping.toppingPrice() + this.size.sizePrice();
}

//topping no logic/////////////////////////////////////////////////////////
function Topping(name){
  this.name = name;
}
Topping.prototype.toppingPrice = function(){
  if(this.name == "cheese"){
    return 0.50;
  } else if (this.name == "pepperoni"){
    return 1.00;
  } else if (this.name == "tomato"){
    return 0.50;
  } else if (this.name == "none"){
    return 0.00;
  }
}

//size no logic/////////////////////////////////////////////////////////
function Size (name){
  this.name = name;
}
Size.prototype.sizePrice = function(){
  if(this.name == "small"){
    return 0;
  } else if(this.name == "medium"){
    return  1.00;
  } else if (this.name == "large"){
    return  2.00;
  }
}

//name no logic/////////////////////////////////////////////////////////
function Name (name){
  this.name = name;
}
Name.prototype.displayName = function(){
  return this.name;
}

//UI no logic/////////////////////////////////////////////////////////
var orderList = new OrderList();
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    ///calculations
    
    var inputtedNameOfPizza = $("#name-of-your-pizza").val();
    var inputtedTopping = $("#topping").val();
    var inputtedSize = $("#size").val();
    var name = new Name (inputtedNameOfPizza);
    var topping = new Topping(inputtedTopping)
    var size = new Size(inputtedSize);
    var pizza = new Pizza(name, topping, size);
    var finalPrice = pizza.price(); //calculation no function

    //display name of pizza
  
    orderList.addOrder(pizza);
    console.log(orderList)
    

    // show final price
    $(".show-summary").show();
    $("#final-price").text("$" + finalPrice.toFixed(2));
  });
})