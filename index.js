fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json(); // Parse JSON data
    })
    .then((data) => {
        let joke = document.getElementById('joke');
        joke.innerHTML = data.value;
    })
    .catch((error) => {
        console.error("Error fetching joke:", error);
    });
