//Business logic
function Pizza(type,toppings,crust,size){
    this.type=type
    this.toppings=toppings
    this.crust=crust
    this.size=size
}

Pizza.prototype.Gettotalcost()= function(){
    return GetToppingscost()+GetSizecost()+GetCrustcost()
}

Pizza.prototype.GetCrustcost()= function(){
    if (type=="Cheese"){
        if(crust==crispy){
            return 100
        }
        if(crust=="stuffed"){
            return 150
        }
        if(crust=="Flatbread"){
            return 180
        }
    }
    if (type=="Pepperoni"){
        if(crust=="crispy"){
            return 120
        }
        if(crust=="stuffed"){
            return 170
        }
        if(crust=="Flatbread"){
            return 200
        }
    }
    if (type=="Veggie"){
        if(crust=="Crispy"){
            return 150
        }
        if(crust=="Stuffed"){
            return 180
        }
        if(crust=="Flatbread"){
            return 200
        }
    }
}
Pizza.prototype.GetToppingscost()= function(){
    if (type=="Cheese"){
        if(topping=="Mushroom"){
            return 30
        }
        if(crust=="Brocoli"){
            return 50
        }
        if(crust=="Pancetta"){
            return 70
        }
    }
    if (type=="Pepperoni"){
        if(crust=="Mushroom"){
            return 40
        }
        if(crust=="Brocoli"){
            return 60
        }
        if(crust=="Pancetta"){
            return 80
        }
    }
    if (type=="Veggie"){
        if(crust=="Mushroom"){
            return 60
        }
        if(crust=="Brocoli"){
            return 80
        }
        if(crust=="Pancetta"){
            return 100
        }
    }
}
Pizza.prototype.GetSizecost()= function (){
    
}

$(Document).ready(function (){
    $(".pic1").click(function(){
        $(".pic1").hide(100)
        $(".p1").show(100)
    });
    $(".p1").click(function(){
        $(".p1").hide(100)
        $(".pic1").show(100)
    });
    
    $(".pic2").click(function(){
        $(".pic2").hide(100)
        $(".p2").show(100)
    });
    $(".p2").click(function(){
        $(".p2").hide(100)
        $(".pic2").show(100)
    });
    

    $(".pic3").click(function(){
        $(".pic3").hide(100)
        $(".p3").show(100)
    });
    $(".p3").click(function(){
        $(".p3").hide(100)
        $(".pic3").show(100)
    });
})

