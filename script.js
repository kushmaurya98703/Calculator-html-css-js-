const btnele=document.querySelectorAll("button");
const inputele=document.querySelector("#result");

for(let i=0;i<btnele.length;i++){
    btnele[i].addEventListener("click",()=>{
        const btnval=btnele[i].textContent;
        if(btnval==="C"){
            clearres();
        }else if(btnval==="="){
            calculateres();
        }else{
            appendvalue(btnval);
        }
    })
}

function clearres(){
    inputele.value="";
}
function calculateres(){
    try{
        inputele.value=eval(inputele.value);
    }catch{
        inputele.value="error";
    }
}
function appendvalue(btnval){
    inputele.value+=btnval;
}