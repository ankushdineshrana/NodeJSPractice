module.exports=(i,j,callback)=>{

    if(i<0 || j<0 || j<i){
        setTimeout(()=>callback(new Error("Dimensions must be positive & j must be greater than i"),null),2000);
    }
    else{
        setTimeout(()=>callback(
            null,()=>{
                for(var k=i;k<j;k++)
                    console.log("The value is: "+k);
            }
        ),2000)
    }

    
}