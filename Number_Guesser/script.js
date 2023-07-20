let guess = document.querySelector('#guess');
let indicate = document.querySelector('.title');
let attempts = document.querySelector('.attempts');
let p_apt = attempts.querySelector('p');
console.log(p_apt);
let randomnum = Math.floor(Math.random() * 101);
console.log(randomnum);
let history = document.querySelector('.history');
let p_hist = history.querySelector('p');


let playgame = () => {

    let limit = 5;

    let count = 0;
    let string = "";

    guess.addEventListener('keyup', (e) => {

        if (e.key == 'Enter') {
            let temp = guess.value
            guess.value = "";
            count++;
            limit--;
            p_apt.innerText = count;

            document.querySelector('span').innerText = limit;


            if (count == 1) {
                string += temp;
                p_hist.innerText = string;
            }
            if(count > 1) {
                string += ' ,';
                string += temp;
                p_hist.innerText = string
            }

            if (limit < 3) {
                document.querySelector('span').style.color = 'red';
            }
            if (limit == 1) {
                document.querySelector('.limit').innerHTML = `<h2>You have <span>${limit}</span> attempt left</h2>`;
                document.querySelector('span').style.color = 'red';
            }


            if (randomnum == temp) {

                indicate.style.color = 'green'
                indicate.innerText = 'Correct Guess'
                guess.remove();
                document.querySelector('.limit').remove();

                document.getElementById('btn').style.display = 'initial';
                document.getElementById('btn').addEventListener('click', () => {

                    location.reload();
                })
                return;

            }
            else if (randomnum > temp) {
                indicate.innerText = "Guess higher Number"
            }
            else if (randomnum < temp) {
                indicate.innerText = "Guess lower Number"
            }


            if (limit == 0 && count == 5) {
                indicate.innerHTML = "<h1>Sorry You lose</h1>"
                indicate.style.color = 'red';
                guess.remove();
                document.getElementById('btn').style.display = 'initial';
                document.getElementById('btn').addEventListener('click', () => {

                    location.reload();
                    return ;
                })

            }
        }
    })
}


playgame();
