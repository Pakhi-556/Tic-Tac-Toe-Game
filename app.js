let boxes=document.querySelectorAll(".part");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");



let turnO=true;//player O
let count=0;///for check draw condition
//2D array
let winptr=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

const resetGame=()=>{

    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}; 

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{

        console.log("box was clicked");
        if(turnO){
        //player 0 turn
        box.innerText='O';
        turnO=false;
        }else{
        //player X turn
            box.innerText='X'
            turnO=true;
        }

        box.disabled=true;
        
        count++;
        let winner= checkwinner();

       //condition for draw a game
        if(count===9 && !winner){
                gameDraw();
        
        }

    });

    
    
});

const showWinner = (winner)=>{
    msg.innerText='Congratulations, You Win Game';
    msgContainer.classList.remove("hide");
    disableBoxes()

};




const checkwinner=()=>{


    for(let pattern of winptr){
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        //console.log(pattern[0],pattern[1],pattern[2]);

        let first=boxes[pattern[0]].innerText;
        let sec=boxes[pattern[1]].innerText;
        let tir=boxes[pattern[2]].innerText;

        if(first!="" && sec!="" && tir!=""){

            if(first===sec && sec===tir){

                console.log("Winner is ",first);
                
                showWinner(first);
            }

        }


    }
    
    

    
};

 const gameDraw=()=>{
        msg.innerText='Game Draw!!!';
        msgContainer.classList.remove("hide");
        disableBoxes()
        count=0;
}

const disableBoxes= ()=>{

    for(let box of boxes ){
        box.disabled=true;
    }
}

const enableBoxes= ()=>{

    for(let box of boxes ){
        box.disabled=false;
        box.innerText=""
    }
}


newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


