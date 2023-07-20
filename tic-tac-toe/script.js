let boxvalue = document.querySelectorAll('.box');
        let player1 = document.querySelector('.btn1');
        let player2 = document.querySelector('.btn2');
        let winner = document.querySelector('.winner');
        let btn = document.querySelector('.btn');

        let player, flag1 = true, flag2 = true;
        let indicate = 0 ;

        let array = [[, ,],
        [, ,],
        [, ,]];

        let checkwinner = () => {

            if (player == 1 && ((array[0][0] == 1 && array[1][1] == 1 && array[2][2] == 1) || (array[0][0] == 1 && array[1][0] == 1 && array[2][0] == 1) || (array[0][2] == 1 && array[1][1] == 1 && array[2][0] == 1) || (array[0][2] == 1 && array[1][2] == 1 && array[2][2] == 1) || (array[0][0] == 1 && array[0][1] == 1 && array[0][2] == 1) || (array[1][0] == 1 && array[1][1] == 1 && array[1][2] == 1) || (array[2][0] == 1 && array[2][1] == 1 && array[2][2] == 1) || (array[0][1] == 1 && array[1][1] == 1 && array[2][1] == 1))) {

                indicate = 1;
                // let h1 = document.createElement('h1');
                // h1.innerText = `Player 1 is winner`
                // winner.append(h1)
            
                // location.reload();

            }
            else if (player == 2 && ((array[0][0] == 0 && array[1][1] == 0 && array[2][2] == 0) || (array[0][0] == 0 && array[1][0] == 0 && array[2][0] == 0) || (array[0][2] == 0 && array[1][1] == 0 && array[2][0] == 0) || (array[0][2] == 0 && array[1][2] == 0 && array[2][2] == 0) || (array[0][0] == 0 && array[0][1] == 0 && array[0][2] == 0) || (array[1][0] == 0 && array[1][1] == 0 && array[1][2] == 0) || (array[2][0] == 0 && array[2][1] == 0 && array[2][2] == 0) || (array[0][1] == 0 && array[1][1] == 0 && array[2][1] == 0))) {

                indicate = 2
                // let h1 = document.createElement('h1');
                // h1.innerText = `Player 1 is winner`
                // winner.append(h1)
                
                // location.reload();


            }

            if(indicate == 1 || indicate == 2){
                let h1 = document.createElement('h1');
                let button = document.createElement('button');
                button.classList.add('play_again');
                button.innerText = `Play Again`;
                btn.append(button);
              
                h1.innerText = `Player ${indicate} is winner`;
                winner.append(h1);
                button.addEventListener('click' , ()=>{
                    location.reload();
                })
            }

        }



        let boxselected = (id) => {


            if (player == 1) {

                if (id == 'box1') {
                    array[0][0] = 1;
                }
                else if (id == 'box2') {
                    array[0][1] = 1;
                }
                else if (id == 'box3') {
                    array[0][2] = 1;
                }
                else if (id == 'box4') {
                    array[1][0] = 1;
                }
                else if (id == 'box5') {
                    array[1][1] = 1;
                }
                else if (id == 'box6') {
                    array[1][2] = 1;
                }
                else if (id == 'box7') {
                    array[2][0] = 1;
                }
                else if (id == 'box8') {
                    array[2][1] = 1;
                }
                else if (id == 'box9') {
                    array[2][2] = 1;
                }
            }
            else if (player == 2) {

                if (id == 'box1') {
                    array[0][0] = 0;
                }
                else if (id == 'box2') {
                    array[0][1] = 0;
                }
                else if (id == 'box3') {
                    array[0][2] = 0;
                }
                else if (id == 'box4') {
                    array[1][0] = 0;
                }
                else if (id == 'box5') {
                    array[1][1] = 0;
                }
                else if (id == 'box6') {
                    array[1][2] = 0;
                }
                else if (id == 'box7') {
                    array[2][0] = 0;
                }
                else if (id == 'box8') {
                    array[2][1] = 0;
                }
                else if (id == 'box9') {
                    array[2][2] = 0;
                }
            }

            // console.log('#');
            setTimeout((checkwinner), 100);
            // checkwinner();

        }
        let fillbox = () => {
            boxvalue.forEach((e) => {
                e.addEventListener('click', (event) => {

                    if (player == 1 && flag1 == true) {

                        e.innerText = `X`;
                        console.log('*');
                        boxselected(e.id);

                        flag1 = false;
                        flag2 = true;
                    }
                    else if (player == 2 && flag2 == true) {
                        e.innerText = `O`;
                        console.log('#')
                        boxselected(e.id);

                        flag2 = false;
                        flag1 = true;
                    }



                })
            })
        }

        player1.addEventListener('click', () => {
            player2.classList.remove('selected2');
            player1.classList.add('selected1');
            player = 1;
            fillbox();
        })
        player2.addEventListener('click', () => {
            player1.classList.remove('selected1');
            player2.classList.add('selected2');
            player = 2;
            fillbox();
        })