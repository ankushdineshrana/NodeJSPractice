var rectmodule=require('./rectangle');

function rectcalc(l,b){
    console.log("Solving retangle:");
    var a=rectmodule.perimeter(l,b);
    var b=rectmodule.area(l,b);
    console.log("Perimeter: "+a+" and Area: "+b);
}


rectcalc(9,1);