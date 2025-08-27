 let scorestr= localStorage.getItem('score');
        let score;
        resetscore(scorestr);

    function resetscore(scorestr){
      score= scorestr ? JSON.parse(scorestr) : {
      win:0,
      lost:0,
      tie:0,
      };

    score.Displayscore= function(){
    return`NO of matches win: ${score.win} 
    NO of matches lost: ${score.lost}
    NO of matches tie: ${score.tie}`;
    }; 
    
    showResult();                                            
}
     


          
function generateComputerChoice(){
        let randomNO= Math.random()*3;
        if(randomNO>=0 && randomNO<1){return 'bat';}
        else if(randomNO>=1  && randomNO<2){
        return 'ball';
       }
       else if(randomNO>=2  && randomNO<3){ return 'stump';}
    }
        




function getResult(userMove, computerMove){

if(userMove==='bat'){
    if(computerMove==='bat'){ score.tie++;      return `it's a tie`;}
    else if(computerMove==='ball'){ score.win++;      return `you won`;}
    else if(computerMove==='stump'){ score.lost++;      return `computer won`;}
    }
            
else if(userMove==='ball'){
    if(computerMove==='ball'){ score.tie++;     return `it's a tie`;}
    else if(computerMove==='stump'){ score.win++;      return `you won`;}
    else if(computerMove==='bat'){ score.lost++;     return `computer won`;}
    }

else if(userMove==='stump'){
    if(computerMove==='stump'){ score.tie++;      return `it's a tie`;}
    else if(computerMove==='bat'){ score.win++;      return `you won`;}
    else if(computerMove==='ball'){ score.lost++;     return `computer won`;}
    }    
}




function showResult(user_choice,computerchoice,result){
     
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('#user-move').innerText=   user_choice ? `your choice is ${user_choice}` : ' ';

    document.querySelector('#computer-move').innerText=  computerchoice ? `computer choice is ${computerchoice}` : ' '; 
          
    document.querySelector('#RESULT').innerText= result || ' '; 
       
    document.querySelector('#SCORE').innerText= ` ${score.Displayscore()}`;
    
    }
      