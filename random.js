// global variables:
const advice = document.getElementById('advice')
const joke = document.getElementById('joke')
const bored = document.getElementById('bored')
const target = document.getElementById('target')
const delivery = document.getElementById('delivery')
const title = document.getElementById('title')


const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice').then((data) => data.json())
        .then((data) => {
            console.log(data)
            target.textContent = data.slip.advice
            title.textContent = '# Advice'
            delivery.textContent = ''
        })
}
advice.addEventListener('click', getAdvice)

joke.addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Any').then((data) => data.json())
        .then((data) => {
            console.log(data)
            if (data.type==='twopart') {
                target.textContent = data.setup
                delivery.textContent = data.delivery
            } else {
                target.textContent = data.joke
                delivery.textContent = ''
            }
            title.textContent = '# Joke'
        })
})

bored.addEventListener('click', () => {
    fetch('https://www.boredapi.com/api/activity').then((data) => data.json())
        .then((data) => {
            console.log(data)
            target.textContent = data.activity
            title.textContent = '# Activity'
            delivery.textContent = ''
        })
})

document.addEventListener('DOMContentLoaded', getAdvice)