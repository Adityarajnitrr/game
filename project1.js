
let userscore=0;
let compscore=0;
let msg = document.querySelector("#msg")
let uscore = document.querySelector("#user-score");
let cscore = document.querySelector("#comp-score");

const choices=document.querySelectorAll(".toall");
const showwinner=(userwin, compchoice , userchoice) =>
{if(userwin)
    {
        userscore++;
        msg.innerText = `you win  ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "blue";
        uscore.innerText=userscore;
}


else
  {
    msg.innerText = `you lose  ${compchoice} beats  ${userchoice} `;
    compscore++;
    msg.style.backgroundColor = "red";
    cscore.innerText=compscore;
  }

};
const drawgame = () =>
{
    msg.innerText = "match draw"
};
const gencomchoice=() =>
{
    const options=["rock","paper","scissor"];
    const randint=Math.floor(Math.random()*3);
    return options[randint];
};
const playGame = (userchoice) =>
{console.log("user choice=" , userchoice);
    const compchoice = gencomchoice();
    console.log("comp choice" , compchoice);
    if (userchoice===compchoice)
    {
        drawgame();

    } 
    else
    { let userwin=true;
        if(userchoice==="stone")
            userwin=compchoice==="paper"?false:true;
        else if(userchoice==="paper")    
        userwin = compchoice==="scissor"?false:true;
    else
        userwin = compchoice==="paper"?true:false;
    showwinner(userwin,userchoice,compchoice);
    }
};
    choices.forEach((choice) =>     
{ 
choice.addEventListener("click" , () =>
{
    let userchoice=choice.getAttribute("id");
    playGame(userchoice)
});
});
0 