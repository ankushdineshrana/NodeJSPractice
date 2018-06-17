var cb=require('./callback.js');

function looper(x,y){
    console.log("Looping through the values "+x+" and "+y);
    cb(x,y,(error,result)=>{
        if(error)
            console.log("Error: "+error.message);
        else{
            console.log(result());
        }

    })
}

looper(1,5);
looper(0,4);
looper(-2,3);
looper(23,2);
looper(3,19);
looper(12,1223);