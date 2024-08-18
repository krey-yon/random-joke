const jokecontainer = document.querySelector("#randomjoke")
const btn = document.querySelector("#btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

btn.addEventListener("click", () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            jokecontainer.innerHTML = data.joke
        })
})