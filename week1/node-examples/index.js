var rect={
    perimeter: (x,y)=>(2*(x+y)),
    area: (x,y)=>(x*y)
};

function solveRectangle(l,b){
    console.log("Solving for rectangle with l="+l+" and b="+b);


    if(l<=0 || b<=0)
        console.log("Rectangle dimensions should be greater than Zero!");
    
    
    else{
        console.log("The Area is "+rect.area(l,b)+" and Perimeter is "+rect.perimeter(l,b));
    }
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,7);
solveRectangle(-1,2);