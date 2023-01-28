import axios from "axios"

const form = document.querySelector("form") as HTMLFormElement
const addressInput = document.getElementById("address") as HTMLInputElement
const googleApiKey = "AIzaSyBDz3bhbskJLQ4BElZxjJQSQC8iUMGVl4Q"

const searchAdressHandler = (event: SubmitEvent) => {
    event.preventDefault();
    const enteredAdress = addressInput.value;

    //send this to googles API

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAdress)}&key=${googleApiKey}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
}

form.addEventListener("submit", searchAdressHandler);