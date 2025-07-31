// Async and Await Keywords..


// async function demo(){
//     // return "Hii, Im akash.."
// }


// let greet = async () =>{
//   return "Hiii..."
// };


// function getNum(){
//     return new Promise((resolve,reject)=>{
//         let randomNum = Math.floor(Math.random()*5)+1;
//         setTimeout(() => {
//             console.log(randomNum);
//             resolve(randomNum);
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum()
//     await getNum();
//     await getNum();
//     await getNum();
// }



// let url = "https://catfact.ninja/fact";

// fetch(url).then((res)=>{
//     // console.log(res);
//     return res.json();
// }).then((res)=>{
//     console.log(res.fact);
//     return fetch(url);
// }).then((res)=>{
//     return res.json();
// }).then((res)=>{
//     console.log(res.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })


let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    let p = document.querySelector(".result");
    p.innerText = fact;
})


async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
        return res.data.fact;
    }
    catch{
        return "No fact found!"
    }   
}


