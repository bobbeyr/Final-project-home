//create ab XMLHttpRequest object
let xhr = new XMLHttpRequest();



//when state of request changes
xhr.onload = function(){
   

    //if server response === 'ok', create some HTML
    if(xhr.status === 200){
        //create an object to get the data from the json file
        let responseObject = JSON.parse(xhr.responseText)

        console.log(responseObject)
        //string object to hold "card" info and layout
        let newCard = '';
        //loop through responseObject to obtain all elements
        //and data to add to the "card" on the webpage
        for(let i=0; i<responseObject.activities.length; i++){
            newCard += "<div class='activity'>"
            newCard += "<img src='" + responseObject.activities[i].look + "'"
            newCard += "alt ='" + responseObject.activities[i].entertainment + "' />"
            newCard += "<p><b>" + responseObject.activities[i].entertainment + "<br>"
            newCard += responseObject.activities[i].type + "</b></p>"
            newCard += "</div>"
        }
        //add new Card content to the webpage
        document.getElementById('content').innerHTML = newCard
    }
}


//prepare the request
xhr.open('GET', '../data/data.json', true)
//send the request
xhr.send(null)