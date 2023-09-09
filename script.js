let myDiv=document.getElementById("my-div");

document.addEventListener("mousemove",(e)=>{

    move(e);

})  


const move=(e)=>{
    let x=e.pageX;
    let y=e.pageY;
    
    myDiv.style.left=x+"px";
    myDiv.style.top=y+"px";



}