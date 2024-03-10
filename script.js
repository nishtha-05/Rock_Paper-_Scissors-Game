let user_score =0;
let comp_score =0;
const choices = document.querySelectorAll('.choice');
const message = document.querySelector('#msg');
const user_score_num = document.querySelector('#user_score');
const comp_score_num =document.querySelector('#com_score');


const gencomp_choice = ()=>{
    const options  = ['rock','paper','scissor'];
    //rock,paper,scissor
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame = ()=>{
   
    message.innerText = 'Game was draw ☹️. Play again!'
    message.style.backgroundColor = 'rgb(8, 8, 68)';
}

const Show_winner =(user_win,user_choice,comp_choice)=>{
    if (user_win){
        user_score++;
        user_score_num.innerText =user_score;
        message.innerText = `You win 🥳. ${user_choice} beats ${comp_choice}`
        message.style.backgroundColor = 'green';
    }
    else{
        comp_score++;
        comp_score_num.innerText =comp_score;
        
        message.innerText = `You lost 🥲. ${user_choice} beats ${comp_choice}`;
        message.style.backgroundColor = 'red';
    }
}


const playgame=(user_choice)=>{
   
    //generate computer choive
    const comp_choice = gencomp_choice();
   
    if (user_choice === comp_choice){
        //draw
        drawGame();
    }
    else{
        let user_win = true;
        if (user_choice === 'rock'){
            //scissore ,paper
            user_win = comp_choice === 'paper' ? false : true;
        }
        //rock , scissor
        else if(user_choice == 'paper'){
           user_win = comp_choice === 'scissor'?  false : true;
        }
        else{
            user_win =comp_choice ==='rock'? false :true;
        }
        Show_winner(user_win,user_choice,comp_choice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let user_choice = choice.getAttribute('id');
        // console.log('choice was clicked',user_choice);
        playgame(user_choice);
    })
});

