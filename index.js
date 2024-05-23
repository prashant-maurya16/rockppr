let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#userscore");
const comppara=document.querySelector("#compscore");
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scessior=document.querySelector("#scessior");
console.log(choices);

        const genrateCompChoice=()=>{
const option=['rock','paper','scissors'];
const randIdx = Math.floor(Math.random()*3);
return option[randIdx];
};
const disabled=(resetgame)=>{

}
const showWinner=(userWin,userChoice,compChoice)=>{
          if(userWin)
          {
                    
                    msg.innerHTML=`You Win! your ${userChoice} beats ${compChoice}`;
                    msg.style.backgroundColor="green";
                    userScore++;
                    userpara.innerHTML=userScore;
          
          
          }
          else{
                  
                    msg.innerHTML=`You Lost! your ${userChoice} beaten by ${compChoice}`;
                    msg.style.backgroundColor="red";
                    compScore++;
                    comppara.innerHTML=compScore;

          }
}
        const DrawGame=()=>{
          console.log("game was draw");
          msg.innerHTML=`Game is Draw. Play Again`;
          msg.style.backgroundColor="black";
        }
       const playGame=(userChoice)=>{
         //console.log("user choice",userChoice);
          //generating computer choice
         const compChoice= genrateCompChoice();
        // console.log("computer choice",compChoice);
         if(userChoice===compChoice)
         {
    DrawGame();
         }
         else{
let userWin= true;
if(userChoice==="rock")
{
          userWin=compChoice==="paper"?false:true;

}
else if(userChoice==="paper")
{
         userWin= compChoice==="scissors"?false:true;
}
else{
           userWin=compChoice==="rock"?false:true;
}
showWinner(userWin,userChoice,compChoice);
disabled(resetgame);

         }}
       choices.forEach((choice)=>
{
          choice.addEventListener("click",()=>
          {
                    const userChoice=choice.getAttribute("id");
                    //choice.style.backgroundColor="yellow";
     

                   
                   
                    playGame(userChoice);

          });
});