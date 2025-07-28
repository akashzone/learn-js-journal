let h1 = document.querySelector("h1");


function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h1.style.color = color;
        resolve("Color changed!");
    },delay);
    })  
}


changeColor("red",1000).then((msg)=>{
    console.log("Success: Color changed to red ..")
    return changeColor("orange",1000);
}).then((msg)=>{
    console.log("Success: Color changed to orange ..")
    return changeColor("blue",1000);
}).then((msg)=>{
    console.log("Success: Color changed to blue..")
})
.catch((error)=>{
    console.log("Failure: Color not-changed!")
})