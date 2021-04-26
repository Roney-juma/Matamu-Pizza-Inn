//Business logic
    function Pizza(type,toppings,crust,size){
        this.type=type
        this.toppings=toppings
        this.crust=crust
        this.size=size
    }

    Pizza.prototype.Gettotalcost= function(){
        return this.GetToppingscost + this.GetSizecost + this.GetCrustcost
    }

    Pizza.prototype.GetCrustcost= function(){
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
        if (type=="Pepperoni"){
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

    $(document).ready(function (){
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

