
const execute = () => {
    let gif =document.getElementById("empty-gif");
    let parentDivEle = document.getElementById("parent-div");
    let orderIdInput = document.getElementById("order-id").value;
    if(parentDivEle.hasChildNodes){
        gif.style.display = "none";

    }else{
        gif.style.display="block";
    }



    if(orderIdInput.length == 0){
        alert("please enter a valid order ID");
        
        
        return;
    }

    createNewCard(orderIdInput);

    document.getElementById(orderIdInput).innerText = "Order Placed!";

    chefRecived(orderIdInput)
         .then(pizzaSauceAdded)
         .then(firstLayerOfCheezeAdded)
         .then(toppingAdded)
         .then(secondLayerCheez)
         .then(pizzaBaked)
         .then(organoAdded)
         .then(packegeRecivedAtCounter)
         .then((orderIdInput) => {
            document.getElementById(orderIdInput).innerText = "order Readdy!!"
         }).catch((err) => {
             console.log(err);
         })
             
         
    


}