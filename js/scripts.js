
//pizza no logic
function Pizza (topping, size) {
  this.topping = topping;
  this.size = size;
  this.regularPrice = 10;
}

Pizza.prototype.price =function(){
  //topping
  if(this.topping == "cheese"){
    this.regularPrice += 0.50;
  } else if (this.topping == "pepperoni"){
    this.regularPrice += 1.00;
  } else if (this.topping == "tomato"){
    this.regularPrice += 0.50;
  }
  //size
  if(this.size == "medium"){
    this.regularPrice += 1.50;
  } else if (this.size == "large"){
    this.regularPrice += 2.00;
  }
  return this.regularPrice;
}
  



$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    
    ///calculations
    
    var topping = $("#topping").val();
    var size = $("#size").val();
    var pizza = new Pizza(topping, size);
    var finalPrice = pizza.price(); //calculation no function

    // show final price
    $(".show").show();
    $(".show").html(`Final price is ${finalPrice}`)
  });
})