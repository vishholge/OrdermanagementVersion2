
const parentDiv = document.getElementById("parent-div");
// let orderID = document.getElementById("order-id");

const createNewCard = (orderIdInput) => {

    //creating cards after excutation
    // let orderIdInput = document.getElementById("order-id").value
    // let orderIdInput = orderID.value;
    // console.log(orderIdInput)
    
    
    let colDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let cardHeader = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");
    let cardButton = document.createElement("a");
    let cardFooter= document.createElement("div");

    
    // Giving Hard codde values for text
    let cardFooterText= document.createTextNode("Pizza Baked ");
    let cardButtonText = document.createTextNode("cancle Order");
    let cardTextPText = document.createTextNode("order-item:- ABC");
    let cardTitleText = document.createTextNode("Bill Amount:- $120 " );
    let cardHeaderText = document.createTextNode( "ID:-" + orderIdInput);
    

    // addeding child element to its parent div

    

    cardBody.appendChild(cardTitleText);
    cardBody.appendChild(cardTextPText);
    cardBody.appendChild(cardButtonText);

    cardTitle.appendChild(cardTitleText);
    cardText.appendChild(cardTextPText);
    cardButton.appendChild(cardButtonText);
    cardHeader.appendChild(cardHeaderText);
    cardFooter.appendChild(cardFooterText);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardFooter);

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(cardButton);
    colDiv.appendChild(cardDiv);
    parentDiv.appendChild(colDiv);


    // appling css for card 

    colDiv.classList = "col-xs-12 col-md-4";
    cardDiv.classList = "card text-center mx-2 my-2 ";
    cardHeader.classList = "card-header";
    cardBody.classList = "card-body"
    cardTitle.classList = "card-title"
    cardText.classList = "card-text"
    cardButton.classList = "btn btn-danger cancel-btn"
    cardFooter.classList = "card-footer text-muted"

    cardFooter.id = orderIdInput;






}