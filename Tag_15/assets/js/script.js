function request_cats_facts() {
    let base_url = 'https://cat-fact.herokuapp.com'
    let query = '/facts'

    //fetch('../../index.html')
    fetch(base_url + query) //first request to remote server
        .then( //server answers back with or or not ok, if ok ist starts downloading packets
            function(response) {
                // how do we format the packets?
                return response.json()
            })
        .then(function(data) {
            //what do we do with the information we collected?
            build_facts(data)
                //here we can build another function

        })
        .catch(function(error) {
            console.log(error)
        })
}

//let url = 'https://cat-fact.herokuapp.com/facts'

//https://cataas.com/cat

function build_facts(data) {
    //let javascript mess with your html claass
    let cat_facts_div = document.querySelector('.cats-facts')
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        let data_point = data[i]
            // console.log(data_point)
            //display only the text
        console.log(data_point['text'])
            //build a virtual div in javascript
        let cat_fact = document.createElement('div')
            //text to it
        cat_fact.textContent = data_point['text']
            //add it to the html element that we grabbed above
        cat_facts_div.appendChild(cat_fact)
    }
}


function request_coffee() {
    let base_url = 'https://coffee.alexflipnote.dev'
    let query = '/random.json'

    fetch(base_url + query)
        .then(function(response) { return response.json() })
        .then(function(data) { build_coffee(data) })
        .catch(function(error) { console.log(error) })
}

function build_coffee(data) {
    console.log(data['file'])
    let coffee_div = document.querySelector('.coffee')
    let coffee_img = document.createElement('img')
    coffee_img.src = data['file']
    coffee_div.appendChild(coffee_img)
}
//request_coffee()

//wait until the html page is loaded
window.onload = function() {
    //get the button
    let coffee_button = document.querySelector('.kafi')
    console.log(coffee_button)
        //add an event listener to the button in this case click
    coffee_button.addEventListener('click ', request_coffee)
}