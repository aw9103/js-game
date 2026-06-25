 let score=JSON.parse(localStorage.getItem('score'));
            if(score===null){
                score={
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
            }
        updateScoreElement();
            function playGame(playerMove){
                const computerMove = pickComputerChoice();
                let result = '';
                if(playerMove==='scissors'){
                    if(computerMove==='scissors'){
                        result = 'Draw';
                    }
                    else if(computerMove==='rock'){
                        result = 'You Lose';
                    }
                    else if(computerMove==='paper'){
                        result = 'You Win';
                    }
                }
                else if(playerMove==='rock') {
                    if(computerMove==='scissors'){
                        result = 'You Win';
                    }
                    else if(computerMove==='rock'){
                        result = 'Draw';
                    }
                    else if(computerMove==='paper'){
                        result = 'You Lose';
                    }
                }
                else if(playerMove==='paper') {
                    if(computerMove==='scissors'){
                        result = 'You Lose';
                    }
                    else if(computerMove==='rock'){
                        result = 'You Win';
                    }
                    else if(computerMove==='paper'){
                        result = 'Draw';
                    }
                }
                if(result==='You Win'){
                    score.wins++;
                }
                else if(result==='You Lose'){
                    score.losses++;
                }
                else if(result==='Draw'){
                    score.ties++;
                }

                localStorage.setItem('score',JSON.stringify(score));

                updateScoreElement();

                document.querySelector('.js-moves').innerHTML=
                `You picked<img src="images/${playerMove}-emoji.png" 
                class="move-icon">
                Computer picked
                <img src="images/${computerMove}-emoji.png" 
                class="move-icon">.`;

                document.querySelector('.js-result').innerHTML=`${result}`;
            }
            function updateScoreElement(){
                document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }
            function pickComputerChoice(){
                const randomNumber = Math.random();
                if(randomNumber < 0.33){
                    return 'rock';
                }
                else if(randomNumber < 0.66){
                    return 'paper';
                }
                else{
                    return 'scissors';
                }
            }
          