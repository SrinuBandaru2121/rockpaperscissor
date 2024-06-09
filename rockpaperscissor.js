let userScore=0;
let comScore=0;  
const choices=document.querySelectorAll(".image")
let compGame=()=>{
    let list=["paper","rock","scissor"]
    let index=Math.floor(Math.random()*3)
    return list[index];

}
let drawGame=()=>{
    let msg=document.getElementById("dis");
    msg.innerHTML="game was drawn";
}
let winGame=()=>{
    let msg=document.getElementById("dis");
    msg.innerHTML="you won";
    userScore++;
    let user=document.getElementById("userscore");
    user.innerHTML=userScore;
}
let loseGame=()=>{
  let msg=document.getElementById("dis");
  msg.innerHTML="you lost";
  comScore++;
  let comp=document.getElementById("comscore");
  comp.innerHTML=comScore;
}

let playGame=(userChoice)=>{
  let compChoice=compGame()
  console.log(userChoice)
  console.log(compChoice)
  if(userChoice==compChoice){
      drawGame()
  }else if(userChoice==="rock"){
      compChoice==="scissor"?winGame():loseGame()
  }
  else if(userChoice==="scissor"){
      compChoice==="paper"?winGame():loseGame()
  }
  else if(userChoice==="paper"){
      compChoice==="rock"?winGame():loseGame()
  }
}
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id") 
      playGame(userChoice)
  })
})