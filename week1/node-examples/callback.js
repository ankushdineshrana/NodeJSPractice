module.exports=(i,j,callback)=>{

    if(i<0 || j<0 || j<i){
        callback(new Error("Dimensions must be positive & j must be greater than i"),null);
    }
    else{
        callback(
            null,()=>{
                for(var k=i;k<9999999;k++)
                    console.log("The value is: "+k);
            }
        )
    }

    
}