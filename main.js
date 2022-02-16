document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('.form');
    console.log(form)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target.box)
        addResponse(e.target.box.value)
        form.reset()
    })

function addResponse(message) {
    console.log(message)
    if (message === "") {
        form.reset()
    } else {
        let youRespond = document.createElement('div');
        youRespond.innerHTML = `<div class='rightBubblesWrapper'>
        <div class='rightContainer'>
            <div class='rightBubble'>
                <p>`+ message +`</p>
            </div>
            <div class='rightPhotoCropper'>
                <img class="rightIcon" src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80">
            </div>
        </div>
    </div>` 
        let content = document.querySelector('.content');
        console.log(content)
        content.appendChild(youRespond)

        if (message.includes('yes')) {
            setupJoke(message) 
        } else if (message.includes('yeah')) {
            setupJoke(message) 
        } else if (message.includes('sure')) {
            setupJoke(message) 
        } else if (message.includes('ya')) {
            setupJoke(message) 
        } else if (message.includes('mhm')) {
            setupJoke(message) 
        } else if (message.includes('no')) {
            noJoke()
        }
    }
}

function noJoke() {
    let noJokeResponse = document.createElement('div');
    noJokeResponse.innerHTML = `<div class='leftBubblesWrapper'>
            <div class='leftContainer'>
                <div class='leftPhotoCropper'>
                    <img class="leftIcon" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                </div>
                <div class='leftBubble'>
                    <p>Aww, alright. Hope you have a nice day!</p>
                </div>
            </div>
        </div>`

    let content = document.querySelector('.content');
    content.appendChild(noJokeResponse)
} //end function joke setup


function setupJoke() {
fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10') //async js - ajax
.then(r => r.json()) //promise
.then(function(data) {

    let jokes = data.jokes
    let randomElement = Math.floor(Math.random() * jokes.length);
    let randomJoke = jokes[randomElement]
    let jokeSetup = document.createElement('div');
    jokeSetup.innerHTML = `<div class='leftBubblesWrapper'>
            <div class='leftContainer'>
                <div class='leftPhotoCropper'>
                    <img class="leftIcon" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                </div>
                <div class='leftBubble'>
                    <p>`+ randomJoke.joke +`</p>
                </div>
            </div>
        </div>`

        let content = document.querySelector('.content');
        console.log(content)
        content.appendChild(jokeSetup)


    }) //receiving data back
    } //end function joke setup

function punchlineJoke(message) {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10') //async js - ajax
    .then(r => r.json()) //promise
    .then(function(data) {
        alert(message)
        let jokes = data.jokes
        let randomElement = Math.floor(Math.random() * jokes.length);
        let randomJoke = jokes[randomElement]

        let jokePunchline = document.createElement('div');
        jokePunchline.innerHTML = `<div class='leftBubblesWrapper'>
                <div class='leftContainer'>
                    <div class='leftPhotoCropper'>
                        <img class="leftIcon" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                    </div>
                    <div class='leftBubble'>
                        <p>`+ randomJoke.delivery +`</p>
                    </div>
                </div>
            </div>`
        let content = document.querySelector('.content');
        console.log(content)
        content.appendChild(jokePunchline)

    }) //receiving data back
    } //end function joke setup


let x = document.querySelector('#x')
let msgButton = document.querySelector('.msgButton')
let profile = document.querySelector('.bannerName')
let seeProfile = document.querySelector('.clickProfile')

profile.addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'block';
})

seeProfile.addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'block';
})

x.addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
})

msgButton.addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
})



// function scrollDown() {
    // window.setInterval(function() {
    //     let elem = document.querySelector('.content');
    //     elem.scrollTop = elem.scrollHeight;
    // }, 0)
// }


}) 
