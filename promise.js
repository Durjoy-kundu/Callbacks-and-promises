//alert('harry');
console.log('this is promise');


let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a<0.5){
        reject("no random number was supporting you");
    }
    else{
        setTimeout(() =>{
            console.log("Yes I am done")
            resolve("Hello")
        }, 3000);
    }
    
})

let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a<0.5){
        reject("no random number was supporting you");
    }
    else{
        setTimeout(() =>{
            console.log("Yes I am done 2")
            resolve("Hello 2")
        }, 1000);
    }
    
})

let prom4 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a<0.5){
        reject("no number passed");
    }
    else{
        setTimeout(() =>{
            console.log('Yes , I am done 4');
            resolve("Hello 4")      
        }, 500);
    }

})

let p3 = Promise([prom1,prom2,prom4])
p3.then((a)=>{
    console.log(a);
    
})

prom1.then((a) =>{
    console.log(a)
}).catch((err) =>{
    console.log(err);
})


