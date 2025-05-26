let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restart");
let msg = document.getElementById("msg");
let clmsg = document.querySelector(".tops");
let tem = document.querySelector(".cgtx");
let popmg = document.querySelector("#pop");
let turnX = "true"
let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [2,5,8]
]
boxes.forEach((colms)=>{
colms.addEventListener("click", ()=>{
    if(turnX){
colms.innerHTML ="X";
turnX = false;
    }else{
        colms.innerHTML ="0";
        turnX = true;
    }
    winvalue();
    colms.disabled= true;
})
})

let disable = ()=>{
    for (box of boxes){
        box.disabled = true;
    }
//clmsg.classList.remove("hide");
     tem.classList.remove("hide");
}

let able = ()=>{
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    turnX = true;
    //clmsg.classList.add("hide");
    tem.classList.add("hide");
}

let winvalue = ()=>{
for(vel of winpattern){
    let val1 = boxes[vel[0]].innerText;
    let val2 = boxes[vel[1]].innerText;
    let val3 = boxes[vel[2]].innerText;

    if(val1 != "" && val2 != "" && val3 != "" ){
        if(val1 == val2 && val2 == val3){
popmg.innerText = `The Winner is ${val1}`;
            console.log(`the winner is ${val1}`);
            disable();
        }
    }
}
}

restart.addEventListener("click", ()=>{
able();
})

