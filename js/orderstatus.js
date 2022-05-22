const chefRecived = (orderNumber) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = "chef Recived";
            resolve(orderNumber);
        }, 2000);
    });
    
}
const pizzaSauceAdded = (orderNumber) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = "pizza Sauce Added";
            resolve(orderNumber);
        }, 5000);
    }) 
}
const firstLayerOfCheezeAdded = (orderNumber) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = "Cheez Added"; 
            resolve(orderNumber);
        }, 4000);
    })
}
const toppingAdded  = (orderNumber) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = "topping added";
            resolve(orderNumber); 
        }, 4000);
    })
}
const secondLayerCheez  = (orderNumber) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = "second Layer Cheez"; 
            resolve(orderNumber);
        }, 4000);
    })
}
const pizzaBaked  = (orderNumber) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = "pizza Baked"; 
            resolve(orderNumber);
        }, 4000);
    })
}
const organoAdded  = (orderNumber) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = "organo Added";
            resolve(orderNumber); 
        }, 4000);
    })
}
const packegeRecivedAtCounter = (orderNumber) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = "Packege Recived";
            resolve(orderNumber); 
        }, 4000);
    })
}