document.addEventListener('DOMContentLoaded', () => {

    let form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target.box)
        addResponse(e.target.box.value)
        form.reset()
    })

function addResponse(message) {
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
        content.appendChild(youRespond)

        if (message.includes('yes')) {
            typeOfJoke(message) 
        } else if (message.includes('yeah')) {
            typeOfJoke(message) 
        } else if (message.includes('sure')) {
            typeOfJoke(message) 
        } else if (message.includes('ya')) {
            typeOfJoke(message) 
        } else if (message.includes('mhm')) {
            typeOfJoke(message) 
        } else if (message.includes('no')) {
            noJoke()
        } else if (message.includes('programming')) {
            setupJoke(message)
        } else if (message.includes('dark')) {
            setupJoke(message)
        } else if (message.includes('pun')) {
            setupJoke(message)
        } else if (message.includes('Programming')) {
            setupJoke(message)
        } else if (message.includes('Dark')) {
            setupJoke(message)
        } else if (message.includes('Pun')) {
            setupJoke(message)
        }
    }
}

function noJoke() {
    let noJokeResponse = document.createElement('div');
    noJokeResponse.innerHTML = `<div class='leftWrapper'>
            <div class='leftContainer'>
                <div class='leftPhotoCropper'>
                    <img class="leftIcon" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                </div>
                <div id='leftBubble'>
                    <p>Aww, alright. Hope you have a nice day!</p>
                </div>
            </div>
        </div>`

    let content = document.querySelector('.content');
    content.appendChild(noJokeResponse)
} //end function joke setup


function typeOfJoke() {
    let jokeType = document.createElement('div');
    jokeType.innerHTML = `<div class='leftWrapper'>
            <div class='leftContainer'>
                <div class='leftPhotoCropper'>
                    <img class="leftIcon" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                </div>
                <div id='leftBubble'>
                    <p>`+ 'Awesome possum! Do ya wanna hear a pun, a programming joke, or dark joke?' +`</p>
                    <img hidden id='likeHeart' src='https://cdn-icons.flaticon.com/png/512/4209/premium/4209081.png?token=exp=1645148289~hmac=37263eb44f685c007fc1049e8ec396d0'>
                    </div>
                </div>
        </div>`

        let content = document.querySelector('.content');
        content.appendChild(jokeType)
}


function setupJoke(message) {
fetch('https://v2.jokeapi.dev/joke/Programming,Dark,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10') //async js - ajax
.then(r => r.json()) //promise
.then(function(data) {

    let jokesArray = data.jokes.filter(function(type){
        if (message.includes('pun')) {
            return type.category === 'Pun'
        } else if (message.includes('programming')) {
            return type.category === 'Programming'
        } else if (message.includes('dark')) {
            return type.category === 'Dark'
        } else if (message.includes('Pun')) {
            return type.category === 'Pun'
        } else if (message.includes('Programming')) {
            return type.category === 'Programming'
        } else if (message.includes('Dark')) {
            return type.category === 'Dark'
        }
    })

    console.log(jokesArray)

    let randomElement = Math.floor(Math.random() * jokesArray.length);
    let randomJoke = jokesArray[randomElement]
    jokesArray = jokesArray.filter(function(joke) {
        return joke !== randomJoke
    })
    let jokeSetup = document.createElement('div');
    jokeSetup.innerHTML = `<div class='leftWrapper'>
            <div class='leftContainer'>
                <div class='leftPhotoCropper'>
                    <img class="leftIcon" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                </div>
                <div id='leftBubble'>
                    <p>`+ randomJoke.joke +`</p>
                <img hidden id='likeHeart' src='https://cdn-icons.flaticon.com/png/512/4209/premium/4209081.png?token=exp=1645148289~hmac=37263eb44f685c007fc1049e8ec396d0'>
                    </div>
                </div>
        </div>`

        let content = document.querySelector('.content');
        content.appendChild(jokeSetup)


    }) //receiving data back

} //end function joke setup



// event listeners
let x = document.querySelector('#x');
let msgButton = document.querySelector('.msgButton');
let profile = document.querySelector('.bannerName');
let seeProfile = document.querySelector('.clickProfile');

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


document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('.leftIcon')) {
		document.querySelector('.popup').style.display = 'block';
    }
})


// liking messages section
const fullHeart = 'https://cdn-icons.flaticon.com/png/512/4209/premium/4209081.png?token=exp=1645148289~hmac=37263eb44f685c007fc1049e8ec396d0';
const emptyHeart = 'https://cdn-icons.flaticon.com/png/512/4209/premium/4209448.png?token=exp=1645148162~hmac=3ac904f275386a7982b2075e6a17915b' 

//document.querySelector('.leftContainer')


// document.querySelector('body').addEventListener('click', event => {
//     if (event.target.matches('#likeHeart')) {
//         console.log(event.target)
//         if (event.target.src === emptyHeart) {
//             event.target.src = fullHeart;
//         } else if (event.target.src === fullHeart) {
//             event.target.src = emptyHeart;
//         }
//     }
// })
let likedMessages = [];
document.querySelector('body').addEventListener('dblclick', event => {
    if (event.target.matches('#leftBubble')) {
        console.log(event.target)

        let heart = event.target.querySelector('#likeHeart');


        if (heart.hasAttribute('hidden')) {
            likedMessages.push(event.target.innerText)
            // addFavs()
            heart.removeAttribute('hidden')
        }
        // } else {
        //     likedMessages.filter(function(el, index) {
        //         if (likedMessages.includes(el)) {
        //             // console.log(el)
        //             likedMessages.splice(index, 1)
        //         }
        //         heart.setAttribute('hidden', '')
        //     })
        //     heart.setAttribute('hidden', '')
        //     // console.log(favMessages)
        // }
        console.log(likedMessages)
    }
})

let favMessages = document.querySelector('#favMessages')
let clickLiked = document.querySelector('.clickLiked')
clickLiked.addEventListener('click', function() {
    // console.log(favMessages)
    // let favsList = document.createElement('p')
    // favsList.innerText = likedMessages
    // favMessages.appendChild(favsList)
    // console.log(favsList)
    likedMessages.forEach(function(element) {
            if (!favMessages.textContent.includes(element)) {
                // console.log('does not include')
                let favsList = document.createElement('p')
                // console.log(element)
                favsList.innerHTML = `<p id='favs'>`+ element +`<p>`
                favMessages.appendChild(favsList);
            }
    })
    document.querySelector('#favMessages').style.display = 'block';
})

// console.log(favMessages)
// function addFavs() {
    // console.log(favMessages.textContent)
        // likedMessages.forEach(function(element) {
        //     if (favMessages.textContent.includes(element)) {
        //         // console.log('Duplicate')

        //     } else if (!favMessages.textContent.includes(element)) {
        //         // console.log('does not include')
        //         let favsList = document.createElement('p')
        //         // console.log(element)
        //         favsList.innerHTML = `<p id='favs'>`+ element +`<p>`
        //         favMessages.appendChild(favsList);
        //     } else {
        //     console.log('else')
        //     }
        // })
// }


let favX = document.querySelector('#favX')
favX.addEventListener('click', function() {
    document.querySelector('#favMessages').style.display = 'none';
})


}) 
