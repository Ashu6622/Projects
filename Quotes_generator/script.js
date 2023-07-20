let api = "https://type.fit/api/quotes";

let author_name = document.querySelector('.author');

let getQuotes = async (quotes) => {

    document.querySelector('h2').innerText = "Loading......"
    let response = await fetch(quotes);
    let data = await response.json();

    let random = Math.floor(Math.random() * 1644);
    document.querySelector('h2').innerText = data[random].text;
    author_name.querySelector('p').innerText = data[random].author;
    showQuotes(data);
}

let showQuotes = (data) => {

    console.log(data);
    document.querySelector('#btn').addEventListener('click', () => {
        let random = Math.floor(Math.random() * 1644);
        console.log(random);
        document.querySelector('h2').innerText = data[random].text;
        author_name.querySelector('p').innerText = data[random].author;
    })
}



getQuotes(api);