function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = (Math.floor(Math.random()*10)+1);
    if(internetSpeed > 4){
        resolve("Success : the data saved..");
    }
    else{
        reject("Failure: weak connection..")
    }
    })
}


let request = savetoDb("Akash_zone..");

request.then((Success)=>{
    console.log("The DataSaved in DB" , Success);
})
.catch((error)=>{
    console.log("Weak connection, Check your internet connection..")
})