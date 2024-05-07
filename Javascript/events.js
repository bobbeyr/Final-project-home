//GOAL - display form and extend card length to fit form when "PURCHASE" button is clicked
//mountian
let hotelForm = document.getElementById('form_purch1');
let hotelButton = document.getElementById('hotel_button');

hotelButton.addEventListener("click", function() {
    this.classList.toggle("active");

    let card = document.getElementById('card_Hotel');

    if (hotelForm.style.display.match("block")) {
        hotelForm.style.display = "none";
        card.style.height = "570px";

    }
    else {  
        hotelForm.style.display = "block";
        card.style.height = "770px";
    }
})

let mountianText = document.getElementById('nights1');
let output1 = document.getElementById('output_Cost1')
let submit1 = document.getElementById('submit1');

submit1.addEventListener("click", function(event) {
    event.preventDefault();

    const form = document.getElementById('form_purch1');

    let userInput = form.elements['event1'].value.trim();
    console.log(userInput);
    let finalCost = userInput * 169 ;


    output1.textContent = "$" + finalCost.toFixed(2);

})


//trail
let trailForm = document.getElementById('form_purch2')
let zoombeziButton = document.getElementById('zoombezi_button');

zoombeziButton.addEventListener("click", function() {
    this.classList.toggle("active");

    let card = document.getElementById('card_zoombezi');

    if (trailForm.style.display.match("block")) {
        trailForm.style.display = "none";
        card.style.height = "570px";

    }
    else {  
        trailForm.style.display = "block";
        card.style.height = "770px";
    }
})

let trailText = document.getElementById('nights2');
let output2 = document.getElementById('output_Cost2')
let submit2 = document.getElementById('submit2');

submit2.addEventListener("click", function(event) {
    event.preventDefault();

    const form = document.getElementById('form_purch2');
    
    let userInput = form.elements['event2'].value.trim();
    console.log(userInput);
    let finalCost = userInput * 34.99 ;

    output2.textContent = "$" + finalCost.toFixed(2);

})




//GOAL PT 2 -take number of nights user inputs and multiplies it by the cost per night, then outputs it to the "FIANL COST" label
//add catch that detcts if user input is a number or a letter/other character

