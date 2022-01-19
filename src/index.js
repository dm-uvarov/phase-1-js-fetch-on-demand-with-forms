const init = () => {

    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputField = document.querySelector('input#searchByID');
        console.log(inputField.value);

        const fetchURL = `http://localhost:3000/movies/${inputField.value}`;

        rs = fetch(fetchURL)
            .then(r => r.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerText = data.title;
                summary.innerText = data.summary;

                // console.log(data);
            });



    });

}

document.addEventListener('DOMContentLoaded', init);