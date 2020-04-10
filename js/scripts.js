
//pizza no logic
function Pizza (topping, size) {
  this.topping = topping;
  this.size = size; //new Size
  this.shape = "flat"
  this.taste = "delicious"
}
// new Pizza("tomato", "small") X
// new Pizza("tomato", Size)
Pizza.prototype.price =function(){
  var regularPrice = 10;

  //topping
  if(this.topping == "cheese"){
    regularPrice += 0.50;
  } else if (this.topping == "pepperoni"){
    regularPrice += 1.00;
  } else if (this.topping == "tomato"){
    regularPrice += 0.50;
  }
  //size
  // if(this.size == "medium"){
  //   regularPrice += 1.50;
  // } else if (this.size == "large"){
  //   regularPrice += 2.00;
  // }
  console.log(this.size)

  return regularPrice + this.size.sizePrice();
  
}
  
function Size (name){
  this.name = name;
}
Size.prototype.sizePrice = function(){
  if(this.name == "small"){
    return 0;
  } else if(this.name == "medium"){
    return  1.50;
  } else if (this.name == "large"){
    return  2.00;
  }
}


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    
    ///calculations
    
    var inputtedTopping = $("#topping").val();
    var inputtedSize = $("#size").val();
    var size = new Size(inputtedSize);
    var pizza = new Pizza(inputtedTopping, size);
    var finalPrice = pizza.price(); //calculation no function

    // show final price
    $(".show").show();
    $(".show").html(`Final price is ${finalPrice}`)
  });
})