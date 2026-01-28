let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#rst-btn");
let newGameBtn=document.querySelector("#New-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]   
];

boxes.forEach((box)=>
{
   box.addEventListener("click",()=>
{
     console.log("Button Was Clicked!!");
     if(turnO)
     {
        box.innerText="O";
        turnO=false;
     }
     else{
          box.innerText="X";
        turnO=true;
     }
     box.disabled=true;
     checkWinner();
});
});

const disableBoxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=true;
        }
    };

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
    
const checkWinner=()=>{
     for(p of winPatterns)
     {
        let pos1val=boxes[p[0]].innerText;
            let pos2val=boxes[p[1]].innerText;
            let pos3val= boxes[p[2]].innerText;
            
            if(pos1val!="" && pos2val!="" && pos3val!="")
            {
                if(pos1val==pos2val && pos2val==pos3val)
                {
                    console.log("Winner",pos1val);
                    showWinner(pos1val);
                }
            }
     }
     let isDraw = true;
boxes.forEach(box => {
    if (box.innerText === "") {
        isDraw = false;
    }
});

if (isDraw) {
    msg.innerText = "It's a Draw 🤝";
    msgContainer.classList.remove("hide");
}

};

const enableBoxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    };

const resetGame=()=>
{
     turnO=true;
     enableBoxes();
     msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
