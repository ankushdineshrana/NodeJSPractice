var rect=require('./rectangle')

function solveRectangle(l,b){
    console.log("Solving for rectangle with l="+l+" and b="+b);


    if(l<=0 || b<=0)
        console.log("Rectangle dimensions should be greater than Zero!");
    
    
    else{
        
        console.log("Solvong the rectangle");
        rect(l,b,(err,rectangle)=>{
            if(err){
                console.log("ERROR: "+err.message);
            }
            else{
                console.log("The area of the rectangle is"+rectangle.area()+" and perimeter is"+rectangle.perimeter());

            }
        });
        console.log("This statement is called after the callback function");
    }
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,7);
solveRectangle(-1,2);