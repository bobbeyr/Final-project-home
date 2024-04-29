//GOAL - display form and extend card length to fit form when "PURCHASE" button is clicked
//mountian
let mountianForm = document.getElementById('form_purch1');
let mountianButton = document.getElementById('mountian_button');

mountianButton.addEventListener("click", function() {
    this.classList.toggle("active");

    let card = document.getElementById('card_mountian');

    if (mountianForm.style.display.match("block")) {
        mountianForm.style.display = "none";
        card.style.height = "570px";

    }
    else {  
        mountianForm.style.display = "block";
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
    let finalCost = userInput * 50 ;

    output1.textContent = "$" + finalCost;

})


//trail
let trailForm = document.getElementById('form_purch2')
let trailButton = document.getElementById('trail_button');

trailButton.addEventListener("click", function() {
    this.classList.toggle("active");

    let card = document.getElementById('card_trail');

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
    let finalCost = userInput * 40 ;

    output2.textContent = "$" + finalCost;

})




//GOAL PT 2 -take number of nights user inputs and multiplies it by the cost per night, then outputs it to the "FIANL COST" label
//add catch that detcts if user input is a number or a letter/other character

