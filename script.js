let us = 0;
let cs = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorep=document.querySelector("#uscore");
const compscorep=document.querySelector("#cscore");


const getcompchoice = () => {
    const options = ["rock", "paper", "scissors"]
    const ran = Math.floor(Math.random() * 3)
    return options[ran];

}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        us++;
        console.log(us);
        userscorep.innerText=us;
        console.log("you win");
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"

    }else{
        cs++;
        console.log(cs);
        console.log("you lose");
        compscorep.innerText=cs;
       
        msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;

        msg.style.backgroundColor="red"
    }
}

const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    const compchoice = getcompchoice();
    console.log("comp choice=", compchoice);

    if(userchoice==compchoice){
        console.log("Game Draw");
        msg.innerText="Game was draw..Play Again!!!!!"
        msg.style.backgroundColor="#021c3a"



    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ? false : true;


        }
     else if(userchoice==="paper"){
        userwin=compchoice==="scissors"?false:true;

    }else if(userchoice==="scissor"){
        userwin=compchoice==="rock"?false:true;
}

showwinner(userwin,userchoice,compchoice);
}


};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})