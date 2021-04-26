//Business logic

$(document).ready(function () {
    function Pizza(type,toppings,crust,size){
        this.type=type
        this.toppings=toppings
        this.crust=crust
        this.size=size
    }

    Pizza.prototype.GetTotalcost= function(){
        return this.GetToppingscost + this.GetSizecost + this.GetCrustcost
    }

    Pizza.prototype.GetCrustcost= function(){
        if (type=="Cheese"){
            if(crust==crispy){
                return 100
            }
            else if(crust=="stuffed"){
                return 150
            }
            else if(crust=="Flatbread"){
                return 180
            }
        }
        else if (type=="Pepperoni"){
            if(crust=="crispy"){
                return 120
            }
            else if(crust=="stuffed"){
                return 170
            }
            else if(crust=="Flatbread"){
                return 200
            }
        }
        else if (type=="Veggie"){
            if(crust=="Crispy"){
                return 150
            }
            else if(crust=="Stuffed"){
                return 180
            }
            else if(crust=="Flatbread"){
                return 200
            }
        }
    }
    Pizza.prototype.GetToppingscost= function(){
        if (type=="Cheese"){
            if(topping=="Mushroom"){
                return 30
            }
            if(topping=="Brocoli"){
                return 50
            }
            if(topping=="Pancetta"){
                return 70
            }
        }
        if (type=="Pepperoni"){
            if(topping=="Mushroom"){
                return 40
            }
            if(topping=="Brocoli"){
                return 60
            }
            if(topping=="Pancetta"){
                return 80
            }
        }
        if (type=="Veggie"){
            if(topping=="Mushroom"){
                return 60
            }
            if(topping=="Brocoli"){
                return 80
            }
            if(topping=="Pancetta"){
                return 100
            }
        }
    }

    Pizza.prototype.GetSizecost= function (){
        if (type=="Cheese"){
            if(size=="Small"){
                return 500
            }
            if(size=="Medium"){
                return 750
            }
            if(size=="Large"){
                return 970
            }
        }
        else if (type=="Pepperoni"){
            if(size=="Small"){
                return 550
            }
            if(size=="Medium"){
                return 800
            }
            if(size=="Large"){
                return 1000
            }
        }
        if (type=="Veggie"){
            if(size=="Small"){
                return 600
            }
            if(size=="Medium"){
                return 850
            }
            if(size=="Large"){
                return 1050
            }
        }
    }

    //User Interface logic

    var customerName = "";
    var totalCost = 0;
    var pizzasOrdered = [];
    var estate = "";
    var houseNumber = "";

    $("#pizza-form").submit(function (event) {
        event.preventDefault();
        var typeSelected = $("#type").val();
        var sizeSelected = $("#size").val();
        var toppingSelected = $("#topping").val();
        var crustSelected = $("#crust").val();
        var newPizza = new Pizza(
            typeSelected,
            sizeSelected,
            toppingSelected,
            crustSelected
        );
        pizzasOrdered.push(newPizza);
        $("#type").val("");
        $("#size").val("");
        $("#topping").val("");
        $("#crust").val("");
        totalCost = 0;
        for (let i = 0; i < pizzasOrdered.length; i++) {
            totalCost += pizzasOrdered[i].GetTotalcost();
        }
        $("#order-summary").append(
            "<tr>" +
            '<th scope="row">' +
            newPizza.type +
            " (" +
            newPizza.size +
            ") - " +
            newPizza.GetSizecost() +
            "</th>" +
            "<td>" +
            newPizza.topping +
            " - " +
            newPizza.GetToppingscost() +
            "</td>" +
            "<td>" +
            newPizza.crust +
            " - " +
            newPizza.GetCrustcost() +
            "</td>" +
            "<td>" +
            newPizza.GetTotalcost() +
            "</td>" +
            "</tr>"
        );
        if (pizzasOrdered.length > 0) {
            $("#form-title").empty();
            $("#form-title").append("Add Another Order");
        }
        $("#total-amount").fadeIn();
        $("#checkout").fadeIn();
        $("#orders-div").fadeIn();
        $("#total-amount").empty();
        $("#total-amount").append(totalCost);
        $(".total-amount").show();
    });
    $("#checkout").click(function () {
        $(".checkout-options").show();
    });
    $("#checkout-form").submit(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var deliveryOption = $("#delivery-option").val();
        customerName = name;
        console.log(name);
        console.log(deliveryOption);
        $("#name").val("");
        $("#delivery-option").val("");
        $(".checkout-options").hide();
        if (deliveryOption === "deliver") {
            $(".location").show();
            $(".delivery-cost").show();
            $("#delivery-amount").append(200);
            totalCost += 200;
            $("#total-amount").empty();
            $("#total-amount").append(totalCost);
        } else {
            alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be ready for collection in the next 15 minutes.");
        }
    });
    $("#location-form").submit(function (e) {
        e.preventDefault();
        var estateEntered = $("#estate").val();
        var houseNumberEntered = $("#house-number").val();
        estate = estateEntered;
        houseNumber = houseNumberEntered;
        console.log(estate);
        console.log(houseNumber);
        $(".location").hide();
        alert(customerName + ": Your total bill is   Ksh. " + totalCost + ". Your order will be delivered to " + estate + " Estate, House Number   " + houseNumber + " in 30 minutes time.Thanks for doing business with us.");
    });

    $('#submission').submit(function (event) {
        var display1 = $('input#first').val();
        var display2 = $('input#mail').val();
        if (display1 && display2 != '') {
            alert('Thank you ' + display1 + ' your subscription is well received');
        } else {
            alert('Invalid input');
        }
        event.preventDefault();
    })
});
